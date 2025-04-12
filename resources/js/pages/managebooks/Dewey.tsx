import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import ModalForDewey from '@/components/ui/modalForDewey'
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Manage Books', href: '/Dewey' },
];

type Dewey = {
    deweydecimalnumbers: string;
    deweydecimalclassification: string;
    
  }

const initialDewey: Dewey [] = [
    {deweydecimalnumbers : '100', deweydecimalclassification: '100'},
];

export default function DeweyList() {
    const [dewey, setDewey] = useState<Dewey[]>(initialDewey);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalForDeweyOpen, setIsModalForDeweyOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
    const [selectedDewey, setSelectedDewey] = useState<Dewey | undefined>(undefined);

    const deweyPerPage = 10;
    const filteredDewey = dewey.filter((dewey) =>
        dewey.deweydecimalnumbers.toLowerCase().includes(searchQuery.toLowerCase())
    );
    

    // Pagination logic
    const totalPages = Math.ceil(filteredDewey.length / deweyPerPage);
    const startIndex = (currentPage - 1) * deweyPerPage;
    const endIndex = startIndex + deweyPerPage;
    const displayedDewey = filteredDewey.slice(startIndex, endIndex);

    const handleAddDewey = () => {
        setModalMode('add');
        setSelectedDewey(undefined);
        setIsModalForDeweyOpen(true);
    };

    const handleEditDewey = (dewey: Dewey) => {
        setModalMode('edit');
        setSelectedDewey(dewey);
        setIsModalForDeweyOpen(true);
    };
    const handleDeleteDewey = (index: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this Dewey?");
        if (confirmDelete) {
            setDewey(prevDewey => prevDewey.filter((_, i) => i !== index));
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dewey" />
            <div className="p-6">
                

            <div className="mt-4">
            <div>
                <Button
                className="bg-purple-900 text-white px-4 py-2 rounded shadow hover:bg-purple-800 cursor-pointer"
                onClick={handleAddDewey}
                >
                Add New Dewey
                </Button>
            </div>

            <div className="mt-2">
                <Input
                className="border rounded px-2 py-1 w-64"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            </div>


                {/* Books Table */}
                <div className="mt-4 border rounded-lg overflow-hidden">
                    <table className="w-full border-collapse">
                        <thead className="bg-purple-900 text-white">
                        <tr>
                            <th className="p-3 text-center">Dewey Decimal Number</th>
                            <th className="p-3 text-center">Dewey Decimal Classification</th>
                            <th className="p-3 text-center">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {displayedDewey.length > 0 ? (
                                displayedDewey.map((dewey, index) => (
                                    <tr key={index} className="border-t hover:bg-gray-100">
                                        <td className="p-3 text-center">{dewey.deweydecimalnumbers}</td>
                                        <td className="p-3 text-center">{dewey.deweydecimalclassification}</td>
                                        <td className="p-3 text-center">
                                            <div className="flex justify-center gap-2">
                                                <Button className="bg-green-600 text-white px-3 py-1 text-sm rounded hover:bg-green-700"
                                                onClick={() => handleEditDewey(dewey)}
                                                >
                                                    Edit
                                                </Button>
                                                <Button className="bg-red-600 text-white px-3 py-1 text-sm rounded hover:bg-red-700"
                                                onClick={() => handleDeleteDewey(index)}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="text-center p-4 text-gray-500">
                                        No Dewey Found
                                    </td>
                                </tr>
                            )}
                        </tbody>

                    </table>
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-between items-center mt-4 p-2 border-t">
                    <span>
                        Showing {filteredDewey.length === 0 ? 0 : startIndex + 1} to{' '}
                        {Math.min(endIndex, filteredDewey.length)} of {filteredDewey.length} entries
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
                <ModalForDewey
                isOpen={isModalForDeweyOpen} 
                onClose={() => setIsModalForDeweyOpen(false)}
                mode={modalMode}
                deweyData={selectedDewey}
                />
            </div>
        </AppLayout>
    );
}
