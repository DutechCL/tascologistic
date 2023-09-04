<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->unsignedBigInteger('method_shipping_id')->default(1); // Agrega la columna y su valor por defecto
            $table->foreign('method_shipping_id')->references('id')->on('method_shippings'); // Agrega la restricción de clave foránea
        });
    }

    public function down()
    {
        Schema::table('orders', function (Blueprint $table) {
            $table->dropForeign(['method_shipping_id']);
            $table->dropColumn('method_shipping_id'); // Elimina el campo en caso de deshacer la migración
        });
    }
};
