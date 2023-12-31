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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('ItemCode')->unique();
            $table->string('ItemName');
            $table->integer('ItemsGroupCode');
            $table->float('QuantityOnStock', 8, 2)->default(0.0);
            $table->string('DefaultWarehouse')->nullable();
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
        Schema::dropIfExists('products');
    }
};
