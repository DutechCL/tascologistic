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
        Schema::create('customers', function (Blueprint $table) {
            $table->id();
            $table->string('CardCode')->unique();
            $table->string('CardName')->nullable();
            $table->string('CardType')->nullable(); //new
            $table->string('GroupCode')->nullable(); //new
            $table->string('ContactPerson')->nullable(); //new
            $table->decimal('CreditLimit', 15, 2)->default(0);
            $table->decimal('MaxCommitment', 12, 2)->default(0);
            $table->decimal('CurrentAccountBalance', 15, 2)->default(0);
            $table->string('CardForeignName')->nullable(); //new
            $table->string('ShipToDefault')->nullable(); //new
            $table->string('BilltoDefault')->nullable(); //new
            $table->string('Currency')->nullable(); //new
            $table->longText('BPAddresses')->nullable();//new
            $table->longText('ContactEmployees')->nullable();//new
            $table->string('Address')->nullable();
            $table->string('FederalTaxID')->nullable();
            $table->string('EmailAddress')->nullable();            
            $table->date('CreateDate')->nullable();
            $table->time('CreateTime')->nullable();
            $table->date('UpdateDate')->nullable();
            $table->time('UpdateTime')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('customers');
    }
};
