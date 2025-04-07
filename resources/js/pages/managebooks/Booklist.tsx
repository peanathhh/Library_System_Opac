import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { Button } from "@/components/ui/button";
import { Input } from '@/components/ui/input';
import Modal from '@/components/ui/modal';
import { type BreadcrumbItem } from '@/types';

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Manage Books', href: '/booklist' },
];

export const books = [
    { title: 'Book 1', author: 'Author A', publisher: 'Publisher X', status: 'Available' },
    { title: 'Book 2', author: 'Author B', publisher: 'Publisher Y', status: 'Checked Out' },
    { title: 'Book 3', author: 'Author C', publisher: 'Publisher Z', status: 'Available' },
    { title: 'Book 4', author: 'Author D', publisher: 'Publisher X', status: 'Available' },
    { title: 'Book 5', author: 'Author E', publisher: 'Publisher Y', status: 'Checked Out' },
    { title: 'Book 6', author: 'Author F', publisher: 'Publisher Z', status: 'Available' },
    { title: 'Book 7', author: 'Author G', publisher: 'Publisher X', status: 'Available' },
    { title: 'Book 8', author: 'Author H', publisher: 'Publisher Y', status: 'Checked Out' },
    { title: 'Book 9', author: 'Author I', publisher: 'Publisher Z', status: 'Available' },
    { title: 'Book 10', author: 'Author J', publisher: 'Publisher X', status: 'Available' },
    { title: 'Book 11', author: 'Author K', publisher: 'Publisher Y', status: 'Checked Out' },
];

export default function BookList() {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const booksPerPage = 10;
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    

    // Pagination logic
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const displayedBooks = filteredBooks.slice(startIndex, endIndex);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="BookList" />
            <div className="p-6">
                

                {/* Controls: Search & Add Button */}
                <div className="flex justify-between mt-4">
                    <Button
                        className="bg-purple-600 text-white px-4 py-2"
                        onClick={() => setIsModalOpen(true)}
                    >
                         Add Book
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
                                <th className="p-2">Book Title</th>
                                <th className="p-2">Author</th>
                                <th className="p-2">Publisher</th>
                                <th className="p-2">Status</th>
                                <th className="p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedBooks.length > 0 ? (
                                displayedBooks.map((book, index) => (
                                    <tr key={index} className="border-t">
                                        <td className="p-2">{book.title}</td>
                                        <td className="p-2">{book.author}</td>
                                        <td className="p-2">{book.publisher}</td>
                                        <td className="p-2">{book.status}</td>
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

                {/* Pagination Controls */}
                <div className="flex justify-between items-center mt-4 p-2 border-t">
                    <span>
                        Showing {filteredBooks.length === 0 ? 0 : startIndex + 1} to{' '}
                        {Math.min(endIndex, filteredBooks.length)} of {filteredBooks.length} entries
                    </span>
                    <div className="flex gap-2">
                        <Button
                            className={`px-3 py-1 ${currentPage === 1 ? '' : 'bg-black text-white'}`}
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </Button>
                        <span className="px-3 py-1 bg-black text-white rounded">{currentPage}</span>
                        <Button
                            className={`px-3 py-1 ${currentPage === totalPages ? '' : 'bg-black text-white'}`}
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </Button>
                    </div>
                </div>
                <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            </div>
        </AppLayout>
    );
}
