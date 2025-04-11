<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Author;
use App\Models\Shelf_Section;
use App\Models\Dewey;
use App\Models\Publisher;

class Book extends Model
{
    protected $fillable = [
        'title',
        'isbn',
        'edition',
        'pages',
        'book_copies',
        'available_book_copies',
        'call_number',
        'shelf_section_id',
        'dewey_id',
        'publisher_id',
        'cover_image',
    ];

    public function authors()
    {
        return $this->belongsToMany(Author::class, 'book_author', 'book_id', 'author_id');
    }
    public function shelf_sections()
    {
        return $this->belongsTo(Shelf_Section::class, 'shelf_section_id');
    }
    public function deweys()
    {
        return $this->belongsTo(Dewey::class, 'dewey_id');
    }
    public function publishers()
    {
        return $this->belongsTo(Publisher::class, 'publisher_id');
    }
}
