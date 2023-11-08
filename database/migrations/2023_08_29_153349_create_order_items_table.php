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
        Schema::create('order_items', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('order_id'); // Clave foránea para la tabla orders
            $table->unsignedBigInteger('product_id'); // Clave foránea para la tabla products
            $table->string('ItemCode'); // Precio del producto en el momento de la orden
            $table->decimal('Price',12, 4)->nullable(); // Precio del producto en el momento de la orden
            $table->integer('Quantity')->default(0); // Precio del producto en el momento de la orden
            $table->string('WarehouseCode')->nullable();
            $table->string('VatGroup')->nullable();
            $table->string('TaxLiable')->nullable();
            $table->string('PickStatus')->nullable();
            $table->string('DeferredTax')->nullable();
            $table->float('EqualizationTaxPercent')->nullable();
            $table->decimal('TotalEqualizationTaxFC',12, 4)->nullable();
            $table->decimal('TotalEqualizationTaxSC',12, 4)->nullable();
            $table->decimal('NetTaxAmount',12, 4)->nullable();
            $table->decimal('NetTaxAmountFC',12, 4)->nullable();
            $table->decimal('NetTaxAmountSC',12, 4)->nullable();
            $table->decimal('Price',12, 4)->nullable();
            $table->decimal('TaxPercentagePerRow',12, 4)->nullable();
            $table->decimal('TaxTotal',12, 4)->nullable();
            $table->timestamps();
    
            // Definir las claves foráneas
            $table->foreign('order_id')->references('id')->on('orders');
            $table->foreign('product_id')->references('id')->on('products');
        });
    }
    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};
