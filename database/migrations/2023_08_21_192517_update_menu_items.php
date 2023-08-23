<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class UpdateMenuItems extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('menu_items', function (Blueprint $table) {
            $table->boolean('is_external')->default(false);
            $table->unsignedBigInteger('permission_id')->nullable()->change(); // Modificación de campo existente
            $table->foreign('permission_id', 'fk_menu_items_permissions') // Cambia el nombre de la restricción
                  ->references('id')
                  ->on('permissions')
                  ->onDelete('set null'); // Mantener relación con permissions
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('menu_items', function (Blueprint $table) {
            $table->dropColumn('is_external');
            $table->dropForeign('fk_menu_items_permissions'); // Especificar el nombre de la restricción
            $table->unsignedBigInteger('permission_id')->nullable(false)->change();
            $table->foreign('permission_id')->references('id')->on('permissions');
        });
    }
};
