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
        Schema::create('role_assignments', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('order_id'); // Referencia a la orden específica
            $table->unsignedBigInteger('user_id'); // Referencia al usuario en particular
            $table->unsignedBigInteger('responsible_role_id'); // Referencia al rol que desempeña el usuario
            $table->timestamps(); // Timestamps para fecha de creación y actualización
        
            // Claves foráneas
            $table->foreign('order_id')->references('id')->on('orders');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('responsible_role_id')->references('id')->on('responsible_roles');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('role_assignments');
    }
};
