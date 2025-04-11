<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Publisher extends Model
{
    protected $fillable = [
        'publisher_name',
        'published_date',
        'publication_place',
    ];

    public function books()
    {
        return $this->hasMany(Book::class, 'publisher_id');
    }
}
