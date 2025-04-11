<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Dewey extends Model
{
    protected $fillable = [
        'dewey_code',
        'dewey_classification',
    ];

    public function books()
    {
        return $this->hasMany(Book::class, 'dewey_id');
    }
}
