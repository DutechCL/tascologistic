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
        Schema::table('users', function (Blueprint $table) {
            $table->integer('internal_key')->unsigned()->nullable(); 
            $table->string('user_code')->nullable(); 
            $table->string('mobile_phone_number')->nullable(); 
            $table->string('defaults')->nullable(); 
            $table->string('branch')->nullable(); 
            $table->string('department')->nullable(); 

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('internal_key');
            $table->dropColumn('user_code');
            $table->dropColumn('mobile_phone_number');
            $table->dropColumn('defaults');
            $table->dropColumn('branch');
            $table->dropColumn('department');

        });
    }
};
