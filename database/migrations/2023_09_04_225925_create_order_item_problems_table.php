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
        Schema::create('order_item_problems', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('order_item_id'); // Clave foránea que hace referencia a 'order_items'
            $table->unsignedBigInteger('problem_id'); // Clave foránea que hace referencia a 'order_items'
            $table->timestamps();

            $table->foreign('order_item_id')->references('id')->on('order_items');
            $table->foreign('problem_id')->references('id')->on('problems');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_item_problems');
    }
};
