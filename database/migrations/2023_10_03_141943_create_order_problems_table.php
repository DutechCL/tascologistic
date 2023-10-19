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
        Schema::create('order_problems', function (Blueprint $table) {
            $table->unsignedBigInteger('order_id'); // Clave foránea que hace referencia a 'orders'
            $table->unsignedBigInteger('problem_id'); // Clave foránea que hace referencia a 'orders'
            $table->timestamps();

            $table->foreign('order_id')->references('id')->on('orders');
            $table->foreign('problem_id')->references('id')->on('problems');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_problems');
    }
};
