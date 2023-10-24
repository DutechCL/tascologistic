<?php

namespace App\Http\Controllers\Admin;

use App\Models\Role;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\UserStoreRequest;
use App\Http\Requests\UserUpdateRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;


/**
 * Class UserCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class UserCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation {
        store as traitStore;
    }
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation {
        update as traitUpdate;
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
        CRUD::setModel(\App\Models\User::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/user');
        CRUD::setEntityNameStrings(__('user.user'), __('user.users'));
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        // $this->crud->addButtonFromView('top', 'import_button', 'import_button', 'end');
        $this->crud->addButtonFromView('top', 'export_button', 'export_button', 'end');

        CRUD::addColumn([
            'name' => 'name',
            'label' => __('user.crud.name'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'email',
            'label' => __('user.crud.email'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'roles', 
            'label' => __('user.crud.role'),
            'type' => 'select_multiple', 
            'entity' => 'roles', 
            'attribute' => 'name', 
        ]);

        CRUD::addColumn([
            'name' => 'warehouses', 
            'label' => __('user.crud.warehouse'),
            'type' => 'select_multiple', 
            'entity' => 'warehouses',
            'attribute' => 'WarehouseName',
        ]);



        /**
         * Columns can be defined using the fluent syntax or array syntax:
         * - CRUD::column('price')->type('number');
         * - CRUD::addColumn(['name' => 'price', 'type' => 'number']); 
         */
    }

    /**
     * Define what happens when the Create operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(UserStoreRequest::class);

        CRUD::addField([
            'name' => 'name',
            'label' => __('user.crud.name'),
            'type' => 'text',
            'wrapper' => [
                'class' => 'form-group col-sm-6 mb-3'
            ]
        ]);
        CRUD::addField([
            'name' => 'email',
            'label' => __('user.crud.email'),
            'type' => 'text',
            'wrapper' => [
                'class' => 'form-group col-sm-6 mb-3'
            ]
        ]);
        CRUD::addField([
            'name' => 'mobile_phone_number',
            'label' => __('user.crud.phone'),
            'type' => 'text',
            'wrapper' => [
                'class' => 'form-group col-sm-6 mb-3'
            ]
        ]);
        CRUD::addField([
            'name' => 'password',
            'label' =>__('user.crud.password'),
            'type' => 'text',
            'wrapper' => [
                'class' => 'form-group col-sm-6 mb-3'
            ]
        ]);

        CRUD::addField([
            'name' => 'userRoles',
            'label' => __('user.crud.roles'),
            'type' => 'select2_multiple',
            'model' => 'App\Models\Role',
            'attribute' => 'name',
            'wrapper' => [
                'class' => 'form-group col-md-12',
            ],
        ]);

        CRUD::addField([
            'name' => 'userWarehouses',
            'label' => __('user.crud.warehouse'),
            'type' => 'select2_multiple',
            'entity' => 'warehouses',
            'model' => 'App\Models\Warehouse',
            'attribute' => 'WarehouseName',
            'pivot' => true,
            'wrapper' => [
                'class' => 'form-group col-md-12',
            ],
        ]);
        
        /**
         * Fields can be defined using the fluent syntax or array syntax:
         * - CRUD::field('price')->type('number');
         * - CRUD::addField(['name' => 'price', 'type' => 'number'])); 
         */
    }

    public function store(UserStoreRequest $request){
        try {
            DB::beginTransaction();

            $userRoles = $request->input('userRoles', []);

            $user = User::create([
                'name' => $request->input('name'),
                'email' => $request->input('email'),
                'mobile_phone_number' => $request->input('mobile_phone_number'),
                'password' => bcrypt($request->input('password')),
                'email_verified_at' => true
            ]);

            foreach ($userRoles as $roleId) {
                $role = Role::findOrFail($roleId);
                $user->userRoles()->attach($role, ['model_type' => 'App\Models\User']);
            }

            $user->warehouses()->attach($request->input('userWarehouses', []));

            DB::commit();
            return redirect()->route('user.index')->with('success', 'El usuario se ha creado correctamente.');
        } catch (ValidationException $e) {
            DB::rollback();
            throw $e;
        } catch (\Throwable $th) {
            DB::rollback();
            throw $th;
        }
    }

    public function update(UserUpdateRequest $request)
    {
        try {
            DB::beginTransaction();

            $id = $request->input('id', '');
            $user = User::findOrFail($id);
            $userRoles = $request->input('userRoles', []);

            $user->name = $request->input('name');
            $user->email = $request->input('email');
            $user->mobile_phone_number = $request->input('mobile_phone_number');
            if ($request->input('password') !== null) {
                $user->password = bcrypt($request->input('password'));
            }
            
            $user->save();
    
            $user->userRoles()->detach();
    
            foreach ($userRoles as $roleId) {
                $role = Role::findOrFail($roleId);
                $user->userRoles()->attach($role, ['model_type' => 'App\Models\User']);
            }

            $user->warehouses()->sync($request->input('userWarehouses', []));

            DB::commit();
            return redirect()->route('user.index')->with('success', 'Los permisos se han actualizado correctamente.');
        } catch (ValidationException $e) {
            DB::rollback();
            throw $e;
        } catch (\Throwable $th) {
            DB::rollback();
            throw $th;
        }
    }

    /**
     * Define what happens when the Update operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-update
     * @return void
     */
    protected function setupUpdateOperation()
    {
        CRUD::setValidation(UserStoreRequest::class);
        
        CRUD::addField([
            'name' => 'name',
            'label' => __('user.crud.name'),
            'type' => 'text',
            'wrapper' => [
                'class' => 'form-group col-sm-6 mb-3'
            ],
        ]);
        CRUD::addField([
            'name' => 'email',
            'label' => __('user.crud.email'),
            'type' => 'text',
            'wrapper' => [
                'class' => 'form-group col-sm-6 mb-3'
            ],
        ]);
        CRUD::addField([
            'name' => 'mobile_phone_number',
            'label' => __('user.crud.phone'),
            'type' => 'text',
            'wrapper' => [
                'class' => 'form-group col-sm-6 mb-3'
            ]
        ]);
        CRUD::addField([
            'name' => 'password',
            'label' =>__('user.crud.password'),
            'type' => 'text',
            'value' => '',
            'wrapper' => [
                'class' => 'form-group col-sm-6 mb-3'
            ]
        ]);

        $id = request()->route('id');

        CRUD::addField([
            'name' => 'userRoles',
            'label' => __('user.crud.roles'),
            'type' => 'select2_multiple',
            'model' => 'App\Models\Role',
            'attribute' => 'name',
            'wrapper' => [
                'class' => 'form-group col-md-12',
            ],
        ]);

        CRUD::addField([
            'name' => 'userWarehouses',
            'label' => 'Bodegas',
            'type' => 'select2_multiple',
            'entity' => 'warehouses', // Asegúrate de que coincide con el nombre correcto de tu entidad Warehouse
            'model' => 'App\Models\Warehouse',
            'attribute' => 'WarehouseName',
            'pivot' => true, // Indica que es un campo de relación muchos a muchos
            'wrapper' => [
                'class' => 'form-group col-md-12',
            ],
        ]);
    }

}
