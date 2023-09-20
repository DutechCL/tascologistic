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
        $this->call(UsersSeeder::class);
        $this->call(PermissionsSeeder::class);
        $this->call(RolesSeeder::class);
        $this->call(RoleHasPermissionsSeeder::class);
        $this->call(ModelHasRolesSeeder::class);
        $this->call(MenuItemsTableSeeder::class);
        $this->call(CustomerSeeder::class);
        $this->call(ProblemsTableSeeder::class);
        $this->call(MethodShippingsTableSeeder::class);
        $this->call(ResponsibleRolesTableSeeder::class);
        $this->call(PaymentMethodsTableSeeder::class);
        $this->call(OrderStatusesTableSeeder::class);
        $this->call(ProductSeeder::class);
        $this->call(OrderSeeder::class);
        $this->call(OrderItemSeeder::class);

    }
}
