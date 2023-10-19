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
        Schema::create('sales_persons', function (Blueprint $table) {
            $table->id();
            $table->integer('SalesEmployeeCode')->unique();
            $table->string('SalesEmployeeName', 100);
            $table->float('CommissionForSalesEmployee', 8, 2)->unsigned()->default(0.0);
            $table->float('CommissionGroup', 8, 2)->unsigned()->default(0.0);
            $table->string('Locked', 20)->nullable();
            $table->integer('EmployeeID')->nullable();
            $table->boolean('Active');
            $table->string('Telephone')->nullable();
            $table->string('Mobile')->nullable();
            $table->string('Email')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
    */
    public function down(): void
    {
        Schema::dropIfExists('sales_persoms');
    }
};
