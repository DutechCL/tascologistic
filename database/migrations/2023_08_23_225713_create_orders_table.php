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
            $table->unsignedBigInteger('process_id')->nullable();
            $table->unsignedBigInteger('customer_id');
            $table->unsignedBigInteger('order_status_id')->defoult(1);
            $table->integer('DocEntry')->unique();
            $table->integer('DocNum')->unique();
            $table->date('DocDate');
            $table->time('DocTime');
            $table->string('DocType')->nullable();
            $table->string('DocTotal');
            $table->string('Comments')->nullable();
            $table->string('SalesPersonCode');
            $table->string('SalesEmployeeName')->nullable();
            $table->string('U_SBO_FormaEntrega');
            $table->string('U_SBO_FormaPago')->nullable();
            $table->json('DocumentLines')->nullable()->default(null);
            $table->boolean('Confirmed')->nullable();
            $table->boolean('is_managed')->default(false);
            $table->text('observation')->nullable();
            $table->timestamps();
        
            // Clave foránea
            $table->foreign('process_id')->references('id')->on('processes');
            $table->foreign('customer_id')->references('id')->on('customers');
            $table->foreign('order_status_id')->references('id')->on('order_statuses');
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
