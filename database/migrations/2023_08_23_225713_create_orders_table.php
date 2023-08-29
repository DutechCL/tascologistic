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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('customer_id'); 
            $table->integer('DocEntry')->unique();
            $table->integer('DocNum');
            $table->date('DocDate');
            $table->string('DocTotal');
            $table->string('Comments');
            $table->string('SalesPersonCode');
            $table->string('U_SBO_FormaEntrega');
            $table->timestamps();

             //clave foránea
            $table->foreign('customer_id')->references('id')->on('customers');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
