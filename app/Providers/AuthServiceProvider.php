<?php

namespace App\Providers;

// use Illuminate\Support\Facades\Gate;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The model to policy mappings for the application.
     *
     * @var array<class-string, class-string>
     */
    protected $policies = [
        //
    ];

    /**
     * Register any authentication / authorization services.
     */
    public function boot(): void
    {
        // $this->registerPermissions();
        // $this->registerRoles();
    }

    // protected function registerPermissions()
    // {
    //     Permission::create(['name' => 'view_users']);
    //     Permission::create(['name' => 'create_users']);
    //     Permission::create(['name' => 'edit_users']);
    //     Permission::create(['name' => 'delete_users']);
    // }

    // protected function registerRoles()
    // {
    //     Role::create(['name' => 'admin'])->givePermissionTo(Permission::all());
    //     Role::create(['name' => 'editor'])->givePermissionTo(['view_users', 'create_users', 'edit_users']);
    // }
}
