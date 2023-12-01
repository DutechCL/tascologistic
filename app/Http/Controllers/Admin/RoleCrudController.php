<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\RoleRequest;
use Spatie\Permission\Models\Permission;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use Illuminate\Support\Facades\DB;
use App\Models\Role;


/**
 * Class RoleCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class RoleCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation {
        store as traitStore;
    }
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation {
        update as traitUpdate;
        edit as traitedit;
    }
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     * 
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\Role::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/role');
        CRUD::setEntityNameStrings(__('role.role'), __('role.roles'));

    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        
        CRUD::addColumn([
            'name' => 'name',
            'label' => __('role.crud.name'),
            'type' => 'text',
        ]);
        
        CRUD::addColumn([
            'name' => 'guard_name',
            'label' => __('role.crud.guard_name'),
            'type' => 'text',
        ]);
        
        CRUD::addColumn([
            'name' => 'created_at',
            'label' => __('role.crud.created_at'),
            'type' => 'text',
        ]);
        
        /**
         * Columns can be defined using the fluent syntax or array syntax:
         * - CRUD::column('price')->type('number');
         * - CRUD::addColumn(['name' => 'price', 'type' => 'number']); 
         */
    }

    public function store(RoleRequest $request){
        try {
            DB::beginTransaction();

            $rol = [
                'name' => $request->input('name', ''),
                'guard_name'=> $request->input('guard_name', '')
            ];

            $roleId = DB::table('roles')->insertGetId($rol);

            $permissions = $request->input('permissionIds', []);

            foreach ($permissions as $permission) {
                $permissionRol = [
                    'permission_id' => $permission,
                    'role_id' => $roleId
                ];
                DB::table('role_has_permissions')->insert($permissionRol);
            }

            DB::commit();
            return redirect()->route('role.index')->with('success', 'Los permisos se han creado correctamente.');
        } catch (ValidationException $e) {
            DB::rollback();
            throw $e;
        } catch (\Throwable $th) {
            DB::rollback();
            throw $th;
        }
    }

    public function update(RoleRequest $request)
    {
        try {
            DB::beginTransaction();

            $roleId = $request->input('id', '');

            $permission = Role::findOrFail($roleId);
            $permission->fill($request->only(['name', 'guard_name']));
            $permission->save();

            DB::table('role_has_permissions')
            ->where('role_id', $roleId)
            ->delete();

            $permissions = $request->input('permissionIds', []);

            foreach ($permissions as $permission) {
                $permissionRol = [
                    'permission_id' => $permission,
                    'role_id' => $roleId
                ];
                DB::table('role_has_permissions')->insert($permissionRol);
            }


            DB::commit();
            return redirect()->route('role.index')->with('success', 'Los permisos se han actualizado correctamente.');
        } catch (ValidationException $e) {
            DB::rollback();
            throw $e;
        } catch (\Throwable $th) {
            DB::rollback();
            throw $th;
        }
    }

    /**
     * Define what happens when the Create operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        
        CRUD::setValidation(RoleRequest::class);
        CRUD::addField([
            'name' => 'name',
            'label' => __('role.crud.name'),
            'type' => 'text',
            'wrapper' => ['class' => 'form-group col-md-12'],
        ]);
        
        CRUD::addField([
            'name' => 'guard_name',
            'label' => __('role.crud.guard_name'),
            'type' => 'text',
            'wrapper' => ['class' => 'form-group col-md-12'],
        ]);


        CRUD::addField([
            'name' => 'permissions',
            'type' => 'permissions',
        ]);
        /**
         * Fields can be defined using the fluent syntax or array syntax:
         * - CRUD::field('price')->type('number');
         * - CRUD::addField(['name' => 'price', 'type' => 'number'])); 
         */
    }

    /**
     * Define what happens when the Update operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-update
     * @return void
     */
    protected function setupUpdateOperation()
    {
        $this->setupCreateOperation();
    }
}
