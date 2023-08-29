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
            $table->string('ItemDescription');
            $table->integer('Quantity');
            $table->float('Price');
            $table->float('PriceAfterVAT');
            $table->string('Currency');
            $table->string('WarehouseCode');
            $table->string('Height1');
            $table->string('Hight1Unit');
            $table->string('Height2');
            $table->string('Height2Unit');
            $table->string('Lengh1');
            $table->string('Lengh1Unit');
            $table->string('Lengh2');
            $table->string('Lengh2Unit');
            $table->string('Weight1');
            $table->string('Weight1Unit');
            $table->string('Weight2');
            $table->string('Weight2Unit');
            $table->string('Factor1');
            $table->string('Factor2');
            $table->string('Factor3');
            $table->string('Factor4');
            $table->string('TaxCode');
            $table->string('TaxType');
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
