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

type Book = {
    title: string;
    author: string;
    publisher: string;
    status: string;
    isbn?: string;
    pubPlace?: string;
    edition?: string;
    pages?: string;
    category?: string;
    deweyCode?: string;
    deweyClass?: string;
    quantity?: string;
    callNumber?: string;
};

// Initial books data
const initialBooks: Book[] = [
    { title: 'Book 1', author: 'Author B', publisher: 'Publisher Y', status: 'Checked Out' },
    { title: 'Book 2', author: 'Author C', publisher: 'Publisher Z', status: 'Available' },
    { title: 'Book 3', author: 'Author D', publisher: 'Publisher X', status: 'Checked Out', isbn: '978-1234567893', pubPlace: 'London', edition: '3rd Edition', pages: '256', category: 'Criminology', deweyCode: '300', deweyClass: 'Social Sciences', quantity: '2', callNumber: 'CR-103' },
    { title: 'Book 4', author: 'Author E', publisher: 'Publisher Y', status: 'Available', isbn: '978-1234567894', pubPlace: 'Paris', edition: '1st Edition', pages: '189', category: 'Information and Technology', deweyCode: '000', deweyClass: 'Computer Science', quantity: '4', callNumber: 'IT-204' },
    { title: 'Book 5', author: 'Author F', publisher: 'Publisher Z', status: 'Checked Out', isbn: '978-1234567895', pubPlace: 'Berlin', edition: '2nd Edition', pages: '510', category: 'Criminology', deweyCode: '300', deweyClass: 'Social Sciences', quantity: '1', callNumber: 'CR-105' },
    { title: 'Book 6', author: 'Author G', publisher: 'Publisher X', status: 'Available', isbn: '978-1234567896', pubPlace: 'Tokyo', edition: '4th Edition', pages: '322', category: 'Information and Technology', deweyCode: '000', deweyClass: 'Computer Science', quantity: '6', callNumber: 'IT-206' },
    { title: 'Book 7', author: 'Author H', publisher: 'Publisher Y', status: 'Checked Out', isbn: '978-1234567897', pubPlace: 'Sydney', edition: '1st Edition', pages: '276', category: 'Criminology', deweyCode: '300', deweyClass: 'Social Sciences', quantity: '2', callNumber: 'CR-107' },
    { title: 'Book 8', author: 'Author I', publisher: 'Publisher Z', status: 'Available', isbn: '978-1234567898', pubPlace: 'Toronto', edition: '2nd Edition', pages: '412', category: 'Information and Technology', deweyCode: '000', deweyClass: 'Computer Science', quantity: '3', callNumber: 'IT-208' },
    { title: 'Book 9', author: 'Author J', publisher: 'Publisher X', status: 'Checked Out', isbn: '978-1234567899', pubPlace: 'Moscow', edition: '5th Edition', pages: '198', category: 'Criminology', deweyCode: '300', deweyClass: 'Social Sciences', quantity: '1', callNumber: 'CR-109' },
    { title: 'Book 10', author: 'Author K', publisher: 'Publisher Y', status: 'Available', isbn: '978-1234567810', pubPlace: 'Beijing', edition: '1st Edition', pages: '356', category: 'Information and Technology', deweyCode: '000', deweyClass: 'Computer Science', quantity: '4', callNumber: 'IT-210' },
    { title: 'Book 11', author: 'Author L', publisher: 'Publisher Z', status: 'Checked Out', isbn: '978-1234567811', pubPlace: 'Madrid', edition: '3rd Edition', pages: '287', category: 'Criminology', deweyCode: '300', deweyClass: 'Social Sciences', quantity: '2', callNumber: 'CR-111' },
    { title: 'Book 12', author: 'Author M', publisher: 'Publisher X', status: 'Available', isbn: '978-1234567812', pubPlace: 'Rome', edition: '2nd Edition', pages: '420', category: 'Information and Technology', deweyCode: '000', deweyClass: 'Computer Science', quantity: '5', callNumber: 'IT-212' },
    { title: 'Book 13', author: 'Author N', publisher: 'Publisher Y', status: 'Checked Out', isbn: '978-1234567813', pubPlace: 'Amsterdam', edition: '1st Edition', pages: '312', category: 'Criminology', deweyCode: '300', deweyClass: 'Social Sciences', quantity: '1', callNumber: 'CR-113' },
    { title: 'Book 14', author: 'Author O', publisher: 'Publisher Z', status: 'Available', isbn: '978-1234567814', pubPlace: 'Vienna', edition: '4th Edition', pages: '248', category: 'Information and Technology', deweyCode: '000', deweyClass: 'Computer Science', quantity: '3', callNumber: 'IT-214' },
    { title: 'Book 15', author: 'Author P', publisher: 'Publisher X', status: 'Checked Out', isbn: '978-1234567815', pubPlace: 'Seoul', edition: '2nd Edition', pages: '360', category: 'Criminology', deweyCode: '300', deweyClass: 'Social Sciences', quantity: '2', callNumber: 'CR-115' },
    { title: 'Book 16', author: 'Author Q', publisher: 'Publisher Y', status: 'Available', isbn: '978-1234567816', pubPlace: 'Mexico City', edition: '1st Edition', pages: '402', category: 'Information and Technology', deweyCode: '000', deweyClass: 'Computer Science', quantity: '4', callNumber: 'IT-216' },
    { title: 'Book 17', author: 'Author R', publisher: 'Publisher Z', status: 'Checked Out', isbn: '978-1234567817', pubPlace: 'Cairo', edition: '3rd Edition', pages: '278', category: 'Criminology', deweyCode: '300', deweyClass: 'Social Sciences', quantity: '1', callNumber: 'CR-117' },
    { title: 'Book 18', author: 'Author S', publisher: 'Publisher X', status: 'Available', isbn: '978-1234567818', pubPlace: 'Bangkok', edition: '2nd Edition', pages: '332', category: 'Information and Technology', deweyCode: '000', deweyClass: 'Computer Science', quantity: '5', callNumber: 'IT-218' },
    { title: 'Book 19', author: 'Author T', publisher: 'Publisher Y', status: 'Checked Out', isbn: '978-1234567819', pubPlace: 'Stockholm', edition: '1st Edition', pages: '296', category: 'Criminology', deweyCode: '300', deweyClass: 'Social Sciences', quantity: '2', callNumber: 'CR-119' },
    { title: 'Book 20', author: 'Author U', publisher: 'Publisher Z', status: 'Available', isbn: '978-1234567820', pubPlace: 'Dublin', edition: '4th Edition', pages: '368', category: 'Information and Technology', deweyCode: '000', deweyClass: 'Computer Science', quantity: '3', callNumber: 'IT-220' },
    { title: 'Book 21', author: 'Author V', publisher: 'Publisher X', status: 'Checked Out', isbn: '978-1234567821', pubPlace: 'Lisbon', edition: '2nd Edition', pages: '284', category: 'Criminology', deweyCode: '300', deweyClass: 'Social Sciences', quantity: '1', callNumber: 'CR-121' },
    { title: 'Book 22', author: 'Author W', publisher: 'Publisher Y', status: 'Available', isbn: '978-1234567822', pubPlace: 'Athens', edition: '1st Edition', pages: '414', category: 'Information and Technology', deweyCode: '000', deweyClass: 'Computer Science', quantity: '4', callNumber: 'IT-222' },
    { title: 'Book 23', author: 'Author X', publisher: 'Publisher Z', status: 'Checked Out', isbn: '978-1234567823', pubPlace: 'Brussels', edition: '3rd Edition', pages: '326', category: 'Criminology', deweyCode: '300', deweyClass: 'Social Sciences', quantity: '2', callNumber: 'CR-123' },
    { title: 'Book 24', author: 'Author Y', publisher: 'Publisher X', status: 'Available', isbn: '978-1234567824', pubPlace: 'Warsaw', edition: '2nd Edition', pages: '392', category: 'Information and Technology', deweyCode: '000', deweyClass: 'Computer Science', quantity: '5', callNumber: 'IT-224' },
    { title: 'Book 25', author: 'Author Z', publisher: 'Publisher Y', status: 'Checked Out', isbn: '978-1234567825', pubPlace: 'Prague', edition: '1st Edition', pages: '258', category: 'Criminology', deweyCode: '300', deweyClass: 'Social Sciences', quantity: '1', callNumber: 'CR-125' },
    { title: 'Book 26', author: 'Author A', publisher: 'Publisher Z', status: 'Available', isbn: '978-1234567826', pubPlace: 'Budapest', edition: '4th Edition', pages: '342', category: 'Information and Technology', deweyCode: '000', deweyClass: 'Computer Science', quantity: '3', callNumber: 'IT-226' },
    { title: 'Book 27', author: 'Author B', publisher: 'Publisher X', status: 'Checked Out', isbn: '978-1234567827', pubPlace: 'Helsinki', edition: '2nd Edition', pages: '276', category: 'Criminology', deweyCode: '300', deweyClass: 'Social Sciences', quantity: '2', callNumber: 'CR-127' },
    { title: 'Book 28', author: 'Author C', publisher: 'Publisher Y', status: 'Available', isbn: '978-1234567828', pubPlace: 'Oslo', edition: '1st Edition', pages: '388', category: 'Information and Technology', deweyCode: '000', deweyClass: 'Computer Science', quantity: '4', callNumber: 'IT-228' },
    { title: 'Book 29', author: 'Author D', publisher: 'Publisher Z', status: 'Checked Out', isbn: '978-1234567829', pubPlace: 'Copenhagen', edition: '3rd Edition', pages: '304', category: 'Criminology', deweyCode: '300', deweyClass: 'Social Sciences', quantity: '1', callNumber: 'CR-129' },
    { title: 'Book 30', author: 'Author E', publisher: 'Publisher X', status: 'Available', isbn: '978-1234567830', pubPlace: 'Singapore', edition: '2nd Edition', pages: '426', category: 'Information and Technology', deweyCode: '000', deweyClass: 'Computer Science', quantity: '5', callNumber: 'IT-230' }
];

export default function BookList() {
    const [books, setBooks] = useState<Book[]>(initialBooks);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalMode, setModalMode] = useState<'add' | 'edit'>('add');
    const [selectedBook, setSelectedBook] = useState<Book | undefined>(undefined);
    const [hasNavigatedNext, setHasNavigatedNext] = useState(false);

    const booksPerPage = 10;
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pagination logic
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
    const startIndex = (currentPage - 1) * booksPerPage;
    const endIndex = startIndex + booksPerPage;
    const displayedBooks = filteredBooks.slice(startIndex, endIndex);

    const handleAddBook = () => {
        setModalMode('add');
        setSelectedBook(undefined);
        setIsModalOpen(true);
    };

    const handleEditBook = (book: Book) => {
        setModalMode('edit');
        setSelectedBook(book);
        setIsModalOpen(true);
    };
    const handleDeleteBook = (index: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this book?");
        if (confirmDelete) {
            setBooks(prevBooks => prevBooks.filter((_, i) => i !== index));
        }
    };
    

    

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="BookList" />
            <div className="p-6">
                {/* Controls: Search & Add Button */}
                <div className="mt-4">
                    <div>
                        <Button
                            className="bg-purple-900 text-white px-4 py-2 rounded shadow hover:bg-purple-800 cursor-pointer"
                            onClick={handleAddBook}
                        >
                            Add Book
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
                                <th className="p-2">Book Title</th>
                                <th className="p-2">Author</th>
                                <th className="p-2 hidden md:table-cell">Publisher</th>
                                <th className="p-2">Status</th>
                                <th className="p-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {displayedBooks.length > 0 ? (
                                displayedBooks.map((book, index) => (
                                    <tr key={index} className="border-t hover:bg-gray-100">
                                        <td className="p-3">{book.title}</td>
                                        <td className="p-3">{book.author}</td>
                                        <td className="p-3 hidden md:table-cell">{book.publisher}</td>
                                        <td className="p-3">{book.status}</td>
                                        <td className="p-3 text-center">
                                            <div className="flex justify-center gap-2">
                                                <Button 
                                                    className="bg-green-600 text-white px-3 py-1 text-sm rounded hover:bg-green-900"
                                                    onClick={() => handleEditBook(book)}
                                                >
                                                    Edit  
                                                </Button>
                                                <Button className="bg-red-600 text-white px-3 py-1 text-sm rounded hover:bg-red-700"
                                                onClick={() => handleDeleteBook(index)}
                                                >
                                                    Delete
                                                </Button>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={5} className="text-center p-4 text-gray-500">
                                        No books found.
                                    </td>
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
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            className="px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </Button>
                        
                        <span className="px-2">{currentPage}</span>
                        
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

                {/* Modal for Add/Edit */}
                <Modal 
                    isOpen={isModalOpen} 
                    onClose={() => setIsModalOpen(false)}
                    mode={modalMode}
                    bookData={selectedBook}
                />
            </div>
        </AppLayout>
    );
}