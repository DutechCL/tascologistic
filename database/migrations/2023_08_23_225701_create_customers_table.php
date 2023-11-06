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
            $table->string('CardName');
            $table->string('Address')->nullable();
            $table->string('FederalTaxID')->nullable();
            $table->string('EmailAddress')->nullable();
            $table->float('CreditLimit', 12, 2)->nullable();
            $table->float('MaxCommitment', 12, 2)->nullable();
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
