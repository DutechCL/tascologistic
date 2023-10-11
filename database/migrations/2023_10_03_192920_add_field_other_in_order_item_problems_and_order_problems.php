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
        Schema::table('order_item_problems', function (Blueprint $table) {
           $table->text('other')->nullable()->after('problem_id');
        });
        Schema::table('order_problems', function (Blueprint $table) {
           $table->text('other')->nullable()->after('problem_id');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('order_item_problems', function (Blueprint $table) {
            $table->dropColumn('other');
        });
        Schema::table('order_problems', function (Blueprint $table) {
            $table->dropColumn('other');
        });
    }
};
