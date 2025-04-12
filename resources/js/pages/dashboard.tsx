import { useState } from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import {
    BookOpen,
    Layers,
    Library,
    Archive,
    Undo2,
    BookX
  } from 'lucide-react';
  

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
];

export default function Dashboard() {
    const [filter, setFilter] = useState('title'); // Default filter option
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        console.log(`Searching for ${searchQuery} by ${filter}`);
        // Add your search logic here
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-screen">
                {/* Main Content */}
                <div className="flex-1 p-6 space-y-6">

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            <div className="w-12 h-12 bg-gray-300 rounded-sm flex items-center justify-center">
                                <BookOpen className="w-6 h-6 text-black dark:text-white" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm text-gray-600 dark:text-gray-300">Total Books</p>
                                <p className="text-2xl font-bold">1,250</p>
                            </div>
                        </div>

                        {/* Total Categories */}
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            <div className="w-12 h-12 bg-gray-300 rounded-sm flex items-center justify-center">
                                <Layers className="w-6 h-6 text-black dark:text-white" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm text-gray-600 dark:text-gray-300">Total Categories</p>
                                <p className="text-2xl font-bold">350</p>
                            </div>
                        </div>

                        {/* Available Books */}
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            <div className="w-12 h-12 bg-gray-300 rounded-sm flex items-center justify-center">
                                <Library className="w-6 h-6 text-black dark:text-white" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm text-gray-600 dark:text-gray-300">Available Books</p>
                                <p className="text-2xl font-bold">350</p>
                            </div>
                        </div>

                        {/* Total Books Dewey */}
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            <div className="w-12 h-12 bg-gray-300 rounded-sm flex items-center justify-center">
                                <Archive className="w-6 h-6 text-black dark:text-white" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm text-gray-600 dark:text-gray-300">Total Books Dewey</p>
                                <p className="text-2xl font-bold">350</p>
                            </div>
                        </div>

                        {/* Borrowed Books */}
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            <div className="w-12 h-12 bg-gray-300 rounded-sm flex items-center justify-center">
                                <Undo2 className="w-6 h-6 text-black dark:text-white" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm text-gray-600 dark:text-gray-300">Borrowed Books</p>
                                <p className="text-2xl font-bold">350</p>
                            </div>
                        </div>

                        {/* Not Returned Books */}
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            <div className="w-12 h-12 bg-gray-300 rounded-sm flex items-center justify-center">
                                <BookX className="w-6 h-6 text-black dark:text-white" />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm text-gray-600 dark:text-gray-300">Not Returned Books</p>
                                <p className="text-2xl font-bold">350</p>
                            </div>
                        </div>
                </div>


                    
                </div>
            </div>
        </AppLayout>
    );
}
