import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ModalForCategory from '@/components/ui/modalForCategory'
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Manage Books', href: '/shelfsection' },
];

type Shelf = {
    categoryName: string;
    selectDeweyClassification: string;
}

const initialShelf: Shelf [] =[
    { categoryName: '09', selectDeweyClassification: 'IT'},
];

export default function Shelf () {
    const [shelf, setShelf] = useState<Shelf[]>(initialShelf);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalForCategoryOpen, setIsModalForCategoryOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
    const [selectedShelf, setSelectedShelf] = useState<Shelf | undefined>(undefined);

    const shelfPerPage = 10;
    const filteredShelf = shelf.filter((shelf) =>
        shelf.categoryName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalPages = Math.ceil(filteredShelf.length / shelfPerPage);
    const startIndex = (currentPage - 1) * shelfPerPage;
    const endIndex = startIndex + shelfPerPage;
    const displayedShelf = filteredShelf.slice(startIndex, endIndex);

    const handleAddShelf = () => {
        setModalMode('add');
        setSelectedShelf(undefined);
        setIsModalForCategoryOpen(true);
    };

    const handleEditShelf = (shelf: Shelf) => {
        setModalMode('edit');
        setSelectedShelf(shelf);
        setIsModalForCategoryOpen(true);
    };
    const handleDeleteShelf = (index: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this Dewey?");
        if (confirmDelete) {
            setShelf(prevShelf => prevShelf.filter((_, i) => i !== index));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title='Category' />
            <div className='p-6'>

            <div className="mt-4">
                <div>
                    <Button
                    className="bg-purple-900 text-white px-4 py-2 rounded shadow hover:bg-purple-800 cursor-pointer"
                    onClick={handleAddShelf}
                    >
                    Add New Section
                    </Button>
                </div>

                <div className="mt-2">
                    <Input
                    className="border rounded px-2 py-1 w-64 mb-5"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

                
                
                {/* Table */}
                <div className="border rounded-lg overflow-hidden shadow-sm">
                    <table className="w-full border-collapse">
                        <thead className="bg-purple-900 text-white uppercase text-sm">
                            <tr>
                                <th className="p-3 text-left">Category Name</th>
                                <th className="p-3 text-left">Dewey Code</th>
                                <th className="p-3 text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {shelf.length > 0 ? (
                                shelf.map((shelf, index) => (
                                    <tr key={index} className="border-t hover:bg-gray-100">
                                        <td className="p-3">{shelf.categoryName}</td>
                                        <td className="p-3">{shelf.selectDeweyClassification}</td>
                                        <td className="p-3 text-center space-x-2">
                                            <Button className="bg-green-600 text-white px-3 py-1 text-sm rounded hover:bg-green-700"
                                            onClick={()=> handleEditShelf (shelf)}
                                            >
                                                Edit
                                            </Button>
                                            <Button className="bg-red-600 text-white px-3 py-1 text-sm rounded hover:bg-red-700"
                                            onClick={() => handleDeleteShelf (index) }>
                                                Delete
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="text-center p-4 text-gray-500">
                                        No categories found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
                {/* Pagination Controls */}
                <div className="flex justify-between items-center mt-4 p-2 border-t">
                    <span>
                    Showing {filteredShelf.length === 0 ? 0 : startIndex + 1} to{' '}
                    {Math.min(endIndex, filteredShelf.length)} of {filteredShelf.length} entries
                    </span>
                    <div className="flex items-center gap-2">
                        <Button
                         variant="ghost"
                         className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                         onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                         disabled={currentPage === 1}
                         >
                        Previous
                        </Button>
                
                        <span className="px-1">{currentPage}</span>
                                        
                        <Button
                            variant="ghost"
                             className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                             onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                             disabled={currentPage === totalPages}
                            >
                             Next
                        </Button>
                    </div>
                
                </div>
                <ModalForCategory
                isOpen={isModalForCategoryOpen} 
                onClose={() => setIsModalForCategoryOpen(false)}
                mode={modalMode}
                shelfData={selectedShelf}
                />
            </div>
        </AppLayout>
    );
}
