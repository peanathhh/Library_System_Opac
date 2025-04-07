import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';


const category = [
    {id:'09', categoryname:'IT', }
];

export default function Category() {
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <AppLayout>
            <Head title='Category'/>
            <div className='p-6'>
                <h1 className='text-2xl font-bold text-purple-700'>Category</h1>
                <div className="flex justify-between mt-4">
                    <Button className="bg-purple-600 text-white px-4 py-2">Add Category</Button>
                    <div className="flex gap-2">
                        <Input 
                            className="border rounded px-2 py-1"
                            placeholder="Search" 
                            value={searchQuery} 
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>

                <div className="mt-4 border rounded-lg overflow-hidden">
                    <table className="w-full border-collapse">
                        <thead className="bg-purple-700 text-white">
                            <tr>
                                <th className="p-2">ID</th>
                                <th className="p-2">Category Name</th>
                                <th className="p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {category.length > 0 ? (
                                category.map((category, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="p-2">{category.id}</td>
                                        <td className="p-2">{category.categoryname}</td>
                                        <td className="p-2">
                                            <Button className="bg-green-500 text-white px-2 py-1 mr-2">Edit</Button>
                                            <Button className="bg-red-500 text-white px-2 py-1">Delete</Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="text-center p-4">No books found.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    )
}


