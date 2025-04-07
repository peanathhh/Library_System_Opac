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
                    {/* Welcome Message */}
                    <p className="text-violet-600 text-2xl font-bold">Welcome to PhilCST Library</p>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            <BookOpen className="w-10 h-10 text-black dark:text-white" />
                            <p>Total Books</p>
                            <p className="text-2xl font-bold">1,250</p> {/* Placeholder value */}
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            <Layers className="w-10 h-10 text-black dark:text-white" />
                            <p>Total Categories</p>
                            <p className="text-2xl font-bold">350</p> {/* Placeholder value */}
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            <Library className="w-10 h-10 text-black dark:text-white" />
                            <p>Available Books</p>
                            <p className="text-2xl font-bold">350</p> {/* Placeholder value */}
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            <Archive className="w-10 h-10 text-black dark:text-white" />
                            <p>Total Books Dewey</p>
                            <p className="text-2xl font-bold">350</p> {/* Placeholder value */}
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            <Undo2 className="w-10 h-10 text-black dark:text-white" />
                            <p>Barrowed Books</p>
                            <p className="text-2xl font-bold">350</p> {/* Placeholder value */}
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            <BookX className="w-10 h-10 text-black dark:text-white" />
                            <p>Not Returned Books</p>
                            <p className="text-2xl font-bold">350</p> {/* Placeholder value */}
                        </div>
                    </div>

                    
                </div>
            </div>
        </AppLayout>
    );
}
