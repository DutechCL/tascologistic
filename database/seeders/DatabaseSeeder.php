<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call(RolesTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(ModelHasRolesTableSeeder::class);
        $this->call(CustomerSeeder::class);
        $this->call(SalesPersonSeeder::class);
        $this->call(ProblemsTableSeeder::class);
        $this->call(MethodShippingsTableSeeder::class);
        $this->call(PaymentMethodsTableSeeder::class);
        $this->call(OrderStatusesTableSeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(OrderSeeder::class);
        $this->call(OrderItemSeeder::class);
        
        $this->call(PermissionsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(RoleHasPermissionsTableSeeder::class);
        $this->call(MenuItemsTableSeeder::class);
    }
}
