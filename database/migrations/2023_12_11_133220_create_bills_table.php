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
        Schema::create('bills', function (Blueprint $table) {
            $table->id();

            $table->foreignId('order_id')->constrained();
            $table->foreignId('user_id')->constrained();
            $table->boolean('Creado')->default(false);
            $table->boolean('Facturado')->default(false);
            $table->text('Error')->nullable();
            $table->string('Folio')->nullable();
            $table->string('FebosID')->nullable();
            $table->integer('DocEntry')->nullable();
            $table->string('IndicadorFinanciero')->nullable();
            $table->string('LinkPDF')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bills');
    }
};
