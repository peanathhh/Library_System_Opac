import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import Modal from '@/components/ui/modal';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Issued List', href: '/issuedlist' },
];



export default function BookList() {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Issued LIst" />
            <div className="p-6">
                

                {/* Controls: Search & Add Button */}
                <div className="flex justify-between mt-4">
                    <Button
                        className="bg-purple-600 text-white px-4 py-2"
                        onClick={() => setIsModalOpen(true)}
                    >
                         Issue Book
                    </Button>
                    <Input
                        className="border rounded px-2 py-1 ml-10"
                        placeholder="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>

                {/* Books Table */}
                <div className="mt-4 border rounded-lg overflow-hidden">
                    <table className="w-full border-collapse">
                        <thead className="bg-purple-700 text-white">
                            <tr>
                                <th className="p-2">ID</th>
                                <th className="p-2">Name</th>
                                <th className="p-2">Book Title</th>
                                <th className="p-2">ISBN</th>
                                <th className="p-2">Date</th>
                                <th className="p-2">Due Date</th>
                                <th className="p-2">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                                    <tr className="border-t">
                                        <td className="p-2"></td>
                                        <td className="p-2"></td>
                                        <td className="p-2"></td>
                                        <td className="p-2"></td>
                                        <td className="p-2"></td>
                                    </tr>
                                
                             
                                <tr>
                                    <td colSpan={5} className="text-center">No books found.</td>
                                </tr>
                            
                        </tbody>
                    </table>
                </div>


                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </AppLayout>
    );
}
