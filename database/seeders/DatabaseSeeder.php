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
        // $this->call(CustomersTableSeeder::class);
        // $this->call(SalesPersonsTableSeeder::class);
        // $this->call(WarehousesTableSeeder::class);
        // $this->call(ProductsTableSeeder::class);
        $this->call(ProblemsTableSeeder::class);
        $this->call(MethodShippingsTableSeeder::class);
        $this->call(PaymentMethodsTableSeeder::class);
        $this->call(OrderStatusesTableSeeder::class);
        $this->call(ProcessesTableSeeder::class);
        // $this->call(OrdersTableSeeder::class);
        // $this->call(OrderItemsTableSeeder::class);
        $this->call(PermissionsTableSeeder::class);
        $this->call(UsersTableSeeder::class);
        $this->call(RoleHasPermissionsTableSeeder::class);
        $this->call(MenuItemsTableSeeder::class);
        // $this->call(UserWarehouseTableSeeder::class);
        $this->call(SettingsTableSeeder::class);
    }
}
