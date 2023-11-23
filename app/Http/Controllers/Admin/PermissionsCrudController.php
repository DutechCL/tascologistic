<?php

namespace App\Http\Controllers\Admin;

use App\Models\Permission;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\PermissionsRequest;
use App\Http\Requests\PermissionsUpdateRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class PermissionsCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class PermissionsCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation {
        store as traitStore;
    }
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation {
        update as traitUpdate;
    }
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    // use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;


    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     * 
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\Permission::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/permissions');
        CRUD::setEntityNameStrings(__('permission.permissions'), __('permission.permissions'));
    }

    public function store(PermissionsRequest $request){
        try {
            DB::beginTransaction();

            $actions = $request->actions;
            $name = $request->name;

            if (!empty($actions)) {
                $permissions = []; 
            
                foreach ($actions as $action) {
                    $permission = [
                        'name' => $name . '.' . $action['action'],
                        'description' => $action['description'],
                        'url' => $action['url'],
                        'guard_name' => $action['guard_name'],
                        'slug' => $name
                    ];
                    DB::table('permissions')->insert($permission);
                }
            }

            DB::commit();
            return redirect()->route('permissions.index')->with('success', 'Los permisos se han creado correctamente.');
        } catch (ValidationException $e) {
            DB::rollback();
            throw $e;
        } catch (\Throwable $th) {
            DB::rollback();
            throw $th;
        }
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
            'label' => __('permission.crud.name'),
            'type' => 'text',
        ]);
        
        CRUD::addColumn([
            'name' => 'description',
            'label' => __('permission.crud.description'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'url',
            'label' => __('permission.crud.url'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'slug',
            'label' => __('permission.crud.slug'),
            'type' => 'text',
        ]);
    }

    /**
     * Define what happens when the Create operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(PermissionsRequest::class);

        CRUD::addField([
            'name' => 'name',
            'label' => __('permission.crud.name'),
            'type' => 'text',
            'wrapper' => ['class' => 'form-group col-md-12'],
        ]);

        CRUD::field([
            'name' => 'actions',
            'type' => 'repeatable',
            'label' => __('permission.crud.actions'), 
            'subfields' => [
                [
                    'name' => 'action',
                    'label' => __('permission.crud.action'),
                    'type' => 'text',
                    'wrapper' => ['class' => 'form-group col-md-4'],
                ],
                [
                    'name' => 'description',
                    'label' => __('permission.crud.description'),
                    'type' => 'text',
                    'wrapper' => ['class' => 'form-group col-md-4'],
                ],
                [
                    'name' => 'url',
                    'label' => __('permission.crud.url'),
                    'type' => 'text',
                    'wrapper' => ['class' => 'form-group col-md-4'],
                ],
                [
                    'name' => 'guard_name',
                    'type' => 'hidden',
                    'value' => 'web',
                    'wrapper' => ['class' => 'form-group col-md-6'],
                ]
            ],
            'new_item_label' => __('permission.crud.new_item'),
            'reorder' => false,
        ]);
    }

    public function update(PermissionsUpdateRequest $request)
    {
        try {
            DB::beginTransaction();

            $id = $request->input('id', '');
    
            $permission = Permission::findOrFail($id);
    
            $permission->fill($request->only(['slug', 'name', 'description', 'url']));
            $permission->name = $permission->slug . '.' . $permission->name;
    
            $permission->save();

            DB::commit();
            return redirect()->route('permissions.index')->with('success', 'El permiso se ha actualizado correctamente.');
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
        CRUD::setValidation(PermissionsRequest::class);

        CRUD::addField([
            'name' => 'slug',
            'label' => __('permission.crud.slug'),
            'type' => 'text',
            'wrapper' => ['class' => 'form-group col-md-12'],
        ]);

        $slugValue = $this->crud->getCurrentEntry()->slug;
        $nameValue = $this->crud->getCurrentEntry()->name;
        $nameValue = str_replace($slugValue.'.', '', $nameValue);

        CRUD::addField( [
            'name' => 'name',
            'label' => __('permission.crud.name'),
            'type' => 'text',
            'value' => $nameValue,
            'wrapper' => ['class' => 'form-group col-md-4'],
        ]);

        CRUD::addField( [
            'name' => 'description',
            'label' => __('permission.crud.description'),
            'type' => 'text',
            'wrapper' => ['class' => 'form-group col-md-4'],
        ]);

        CRUD::addField( [
            'name' => 'url',
            'label' => __('permission.crud.url'),
            'type' => 'text',
            'wrapper' => ['class' => 'form-group col-md-4'],
        ]);
    }
}
