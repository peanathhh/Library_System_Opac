<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Shelf_Section extends Model
{
    protected $fillable = [
        'shelf_section_name',
        'dewey_classification',
    ];

    public function books()
    {
        return $this->hasMany(Book::class, 'shelf_section_id');
    }
}
