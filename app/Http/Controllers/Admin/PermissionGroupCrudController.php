<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\PermissionGroupRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class PermissionGroupCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class PermissionGroupCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     * 
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\PermissionGroup::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/permission-group');
        CRUD::setEntityNameStrings('permission group', 'permission groups');
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        

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
        CRUD::setValidation(PermissionGroupRequest::class);

        if ($this->crud->actionIs('edit')) {
            $this->readonly = ['readonly' => 'readonly'];
        }

        CRUD::addField([
            'name' => 'name',
            'type' => 'text',
            'label' => __('Nombre'),
            'wrapper' => ['class' => 'form-group col-md-4'],
            'hint' => 'Nombre mostrado en el menú',
        ]);

        CRUD::addField([
            'name' => 'slug',
            'type' => 'text',
            'label' => __('Codigo'),
            'wrapper' => ['class' => 'form-group col-md-4'],
            'hint' => 'Nombre del permiso',
            'attributes' => ['readonly'],
        ]);

        CRUD::addField([
            'name' => 'url',
            'type' => 'text',
            'label' => __('URL'),
            'wrapper' => ['class' => 'form-group col-md-4'],
        ]);

        // CRUD::addField([
        //     'name' => 'icon',
        //     'type' => 'icon_picker',
        //     'iconset' => 'lineawesome',
        //     'label' => __('menu_item.crud.icon'),
        //     'wrapper' => ['class' => 'form-group col-md-1'],
        // ]);

        // CRUD::addField([
        //     'name' => 'color',
        //     'type' => 'color_picker',
        //     'label' => __('menu_item.crud.color'),
        //     'wrapper' => ['class' => 'form-group col-md-3'],
        // ]);

        // CRUD::addField([
        //     'name' => 'permissions',
        //     'type' => 'checklist',
        //     'label' => __('permission_group.crud.permissions'),
        //     'model' => 'App\Models\Permission',
        //     'attribute' => 'description',
        //     'number_of_columns' => 4,
        // ]);

        CRUD::addField([
            'name' => 'select_permissions_array',
            'type' => 'hidden',
            'wrapper' => ['class' => 'form-group col-md-12'],
        ]);

        CRUD::addField([
            'name' => 'is_active',
            'label' => __('Activa'),
            'type' => 'checkbox',
            'default' => true,
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
