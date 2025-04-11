<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('books', function (Blueprint $table) {
            $table->id('book_id');
            $table->string('title');
            $table->string('isbn');
            $table->string('edition');
            $table->integer('pages');
            $table->integer('book_copies');
            $table->integer('available_book_copies');
            $table->string('call_number');
            

            $table->foreignId('shelf_section_id')->constrained('shelf_sections', 'shelf_section_id')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('dewey_id')->constrained('deweys', 'dewey_id')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('publisher_id')->constrained('publishers', 'publisher_id')->onUpdate('cascade')->onDelete('cascade');

            $table->string('cover_image');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('books');
    }
};
