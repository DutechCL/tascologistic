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
            $table->string('VatGroup')->nullable();
            $table->string('TaxLiable')->nullable();
            $table->string('PickStatus')->nullable();
            $table->string('DeferredTax')->nullable();
            $table->float('EqualizationTaxPercent')->nullable();
            $table->float('TotalEqualizationTaxFC')->nullable();
            $table->float('TotalEqualizationTaxSC')->nullable();
            $table->float('NetTaxAmount')->nullable();
            $table->float('NetTaxAmountFC')->nullable();
            $table->float('NetTaxAmountSC')->nullable();
            $table->float('LineTotal')->nullable();
            $table->float('TaxPercentagePerRow')->nullable();
            $table->float('TaxTotal')->nullable();
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
