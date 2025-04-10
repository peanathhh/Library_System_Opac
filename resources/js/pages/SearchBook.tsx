import AppLogoIcon from "@/components/app-logo-icon";
import { Head, Link } from "@inertiajs/react";
import { useState } from "react";
import { FaHome } from "react-icons/fa";

type Book = {
  title: string;
  author: string;
  publisher: string;
  catalog_info: {
    acc: string;
    call: string;
    place: string;
  };
  status: {
    available: number;
    onLibrary: string;
  };
  isbn: string;
  category: string;
};

type Props = {
  books: Book[];
  category: string;
};

export default function SearchBook({ books, category }: Props) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBooks = books.filter(
    (book) =>
      (category === "All" || book.category === category) &&
      (book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.isbn.includes(searchTerm))
  );

  return (
    <>
      <Head title={`Books in ${category}`} />

      <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4 sm:p-6">
        {/* Header */}
        <header className="fixed top-0 left-0 z-50 w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4 bg-white dark:bg-gray-800 shadow-md">
        <img src="philcst logo1.png" alt="Library Logo" className="h-10 sm:h-12 mb-2 sm:mb-0" />
        <div className="space-x-2 sm:space-x-4">
          <Link href={route("login")} className="text-gray-700 dark:text-gray-300 hover:text-purple-700 text-sm sm:text-base">
            Login
          </Link>
        </div>
        </header>

        {/* Title */}
        <div className="mt-20 text-center">
          <h1 className="text-lg sm:text-2xl font-bold text-purple-800 dark:text-purple-400">Welcome to Online Public Access Catalog</h1>
          <p className="text-xs sm:text-md text-gray-700 dark:text-gray-300 font-semibold">
            PhilCST Library: Your Gateway to Knowledge and Discovery
          </p>
        </div>
        <div className="mt-6 w-full flex justify-between items-center px-4 sm:px-8 max-w-6xl">
            
            <div className="flex items-center gap-2">
                <Link href={route("home")} className="text-purple-700 text-xl sm:text-2xl hover:text-purple-500">
                <FaHome />
                </Link>
                <h1 className="text-base sm:text-lg font-semibold text-purple-800 dark:text-purple-300">
                {category}
                </h1>
            </div>
            <div className="w-full max-w-xl">
                <input
                type="text"
                placeholder="Search by Title, Author, ISBN"
                className="w-full py-2 px-4 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
        </div>
        {/* Book Table */}
        <div className="mt-6 w-full px-2 sm:px-6 overflow-x-auto">
          <table className="w-full border bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden text-xs sm:text-sm md:text-base">
            <thead className="bg-purple-700 dark:bg-purple-900 text-white">
              <tr className="text-center">
                <th className="px-2 sm:px-4 py-2">BOOK TITLE</th>
                <th className="px-2 sm:px-4 py-2">BOOK AUTHOR</th>
                <th className="px-2 sm:px-4 py-2 hidden sm:table-cell">PUBLISHER</th>
                <th className="px-2 sm:px-4 py-2">CATALOG INFO</th>
                <th className="px-2 sm:px-4 py-2">STATUS</th>
                <th className="px-2 sm:px-4 py-2">DOWNLOAD</th>
              </tr>
            </thead>
              
          </table>
        </div>
      </div>
    </>
  );
}
