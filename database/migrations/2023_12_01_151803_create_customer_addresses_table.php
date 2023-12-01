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
        Schema::create('customer_addresses', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('customer_id');
            $table->string('AddressName');
            $table->string('Street')->nullable();
            $table->string('Block')->nullable();
            $table->string('ZipCode')->nullable();
            $table->string('City')->nullable();
            $table->string('County')->nullable();
            $table->string('Country')->nullable();
            $table->string('State')->nullable();
            $table->string('FederalTaxID');
            $table->string('TaxCode')->nullable();
            $table->string('BuildingFloorRoom')->nullable();
            $table->string('AddressType')->nullable();
            $table->string('AddressName2')->nullable();
            $table->string('AddressName3')->nullable();
            $table->string('TypeOfAddress')->nullable();
            $table->string('StreetNo')->nullable();
            $table->string('BPCode')->nullable();
            $table->integer('RowNum')->nullable();
            $table->string('GlobalLocationNumber')->nullable();
            $table->string('Nationality')->nullable();
            $table->string('TaxOffice')->nullable();
            $table->string('GSTIN')->nullable();
            $table->string('GstType')->nullable();
            $table->date('CreateDate')->nullable();
            $table->time('CreateTime')->nullable();
            $table->string('MYFType')->nullable();
            $table->string('TaasEnabled')->nullable();
            $table->timestamps();

            $table->foreign('customer_id')->references('id')->on('customers')->onDelete('cascade');

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customer_addresses');
    }
};
