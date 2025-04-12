<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});


Route::get('/Bookslist', function () {
    return Inertia::render('managebooks/Booklist');
    })->name('bookslist');

Route::get('/Dewey', function () {
    return Inertia::render('managebooks/Dewey');
    })->name('dewey');

Route::get('/ShelfSection', function () {
    return Inertia::render('managebooks/ShelfSection');
    })->name('shelfsection');


Route::get('/Issuedlist', function () {
    return Inertia::render('transaction/IssuedList');
})->name('issuedlist');

Route::get('/ReturnedList', function () {
    return Inertia::render('transaction/ReturnedList');
})->name('returnedlist');

Route::get('/LostList', function () {
    return Inertia::render('transaction/LostList');
})->name('lostlist');

Route::get('/books/{category}', function ($category) {
    $books = [];

    return Inertia::render('SearchBook', [
        'category' => $category,
        'books' => collect($books)->where('category', $category)->values()
    ]);
})->name('books.show');




require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
