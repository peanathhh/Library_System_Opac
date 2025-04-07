import { Head, Link } from "@inertiajs/react";
import { router } from "@inertiajs/react";
export default function Welcome() {



  return (
    <>
      <Head title="PhilCST Library" />
      <div className="flex flex-col items-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-4 sm:p-6">
        {/* Header */}
        <header className="w-full flex flex-col sm:flex-row justify-between items-center px-4 sm:px-8 py-4 bg-white dark:bg-gray-800 shadow-md">
          <img src="philcst logo1.png" alt="Library Logo" className="h-10 sm:h-12 mb-2 sm:mb-0" />
          <div className="space-x-2 sm:space-x-4">
            <Link href={route("login")} className="text-gray-700 dark:text-gray-300 hover:text-purple-700 text-sm sm:text-base">Login</Link>
          </div>
        </header>

        {/* Title */}
        <div className="mt-4 text-center">
          <h1 className="text-lg sm:text-2xl font-bold text-purple-800 dark:text-purple-400">Welcome to Online Public Access Catalog</h1>
          <p className="text-xs sm:text-md text-gray-700 dark:text-gray-300 font-semibold">
            PhilCST Library: Your Gateway to Knowledge and Discovery
          </p>
        </div>
        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        <div
                        onClick={() => router.get(route('books.show', 'Criminology Books'))}
                        className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            <p>Criminology Books</p>
                        </div>
                        <div 
                        onClick={() => router.get(route('books.show', 'Hospital Management Books'))}
                        className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                        
                            <p>Hospital Management Books</p>
                            
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                           
                            <p>Education Books</p>
                            
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            
                            <p>Accountancy Books</p>
                            
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            
                            <p>Computer Science and Information Technology Books</p>
                            
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            
                            <p>Engineering and Architecture Books</p>
                            
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            
                            <p>Nursing and Midwifey Books</p>
                            
                        </div>
                        <div className="bg-gray-200 dark:bg-gray-700 text-black dark:text-white p-4 rounded-lg shadow-md flex items-center gap-4 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] cursor-pointer">
                            
                            <p>Free Ebooks</p>
                            
                        </div>
          </div>

        

        
      </div>
    </>
  );
}
