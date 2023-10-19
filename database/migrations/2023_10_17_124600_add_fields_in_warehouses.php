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
        Schema::table('warehouses', function (Blueprint $table) {
            $table->string('WarehouseCodeEncrey')->nullable()->uniqid();
            $table->string('WarehouseCode')->nullable();
            $table->string('WarehouseName')->nullable();
            $table->string('Street')->nullable();
            $table->integer('StreetNo')->nullable();
            $table->string('AllowUseTax')->nullable();
            $table->string('State')->nullable();
            $table->string('City')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('warehouses', function (Blueprint $table) {
            $table->dropColumn('WarehouseCodeEncrey');
            $table->dropColumn('WarehouseCode');
            $table->dropColumn('WarehouseName');
            $table->dropColumn('Street');
            $table->dropColumn('StreetNo');
            $table->dropColumn('AllowUseTax');
            $table->dropColumn('State');
            $table->dropColumn('City');
        });
    }
};
