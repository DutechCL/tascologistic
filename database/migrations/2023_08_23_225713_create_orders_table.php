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
            $table->unsignedBigInteger('order_status_id')->nullable();

            $table->integer('DocEntry')->unique();
            $table->integer('DocNum')->unique();
            $table->date('DocDate');
            $table->time('DocTime');
            $table->string('DocType')->nullable();
            $table->string('DocTotal');
            $table->string('TaxDate')->nullable();
            $table->string('DocCurrency')->nullable();
            $table->string('DocRate')->nullable();
            $table->string('FederalTaxID')->nullable();
            $table->string('DiscountPercent')->nullable();
            $table->string('ShipToCode')->nullable();
            $table->string('Indicator')->nullable();
            $table->string('CardCode');
            $table->string('Comments')->nullable();
            $table->string('SalesPersonCode');
            $table->string('SalesEmployeeName')->nullable();
            $table->string('U_SBO_FormaEntrega');
            $table->string('U_SBO_FormaPago')->nullable();
            $table->json('DocumentLines')->nullable()->default(null);
            $table->boolean('Confirmed')->nullable();
            $table->boolean('is_managed')->default(false);
            $table->text('observation')->nullable();
            $table->string('HandWritten')->nullable();
            $table->string('Printed')->nullable();
            $table->string('CardName')->nullable();
            $table->text('Address')->nullable();
            $table->string('Reference1')->nullable();
            $table->string('Reference2')->nullable();
            $table->integer('ContactPersonCode')->nullable();
            $table->integer('Series')->nullable();
            $table->string('DocObjectCode')->nullable();
            $table->string('PayToCode')->nullable();
            $table->string('Cancelled')->nullable();
            $table->integer('AttachmentEntry')->nullable();
            
            $table->timestamps();
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
