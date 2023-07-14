<?php

namespace App\Http\Controllers\Admin;

use App\Models\Permissions;
use App\Http\Requests\PermissionsRequest;
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
        CRUD::setModel(\App\Models\Permissions::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/permissions');
        CRUD::setEntityNameStrings('permissions', 'permissions');


    }



    public function store(){
        $actions = $this->crud->getRequest()->input('actions', []);
        $name = $this->crud->getRequest()->input('name', '');

        foreach ($actions as $key => $action) {

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
        CRUD::column('name');
        CRUD::column('description');
        CRUD::column('guard_name');
        CRUD::column('created_at');
        CRUD::column('updated_at');

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
        CRUD::setValidation(PermissionsRequest::class);

        CRUD::addField([
            'name' => 'name',
            'label' => 'Nombre',
            'type' => 'text',
            'wrapper' => ['class' => 'form-group col-md-12'],
        ]);

        CRUD::addField([
            'name' => 'guard_name',
            'type' => 'hidden',
            'value' => 'web',
            'wrapper' => ['class' => 'form-group col-md-6'],
            
        ]);

        CRUD::field([
            'name' => 'actions',
            'type' => 'repeatable',
            'label' => 'Acciones', // Agregar la clave 'label' con su respectivo valor
            'subfields' => [
                [
                    'name' => 'accion',
                    'label' => 'Accion',
                    'type' => 'text',
                    'wrapper' => ['class' => 'form-group col-md-4'],
                ],
                [
                    'name' => 'description',
                    'label' => 'Descripcion',
                    'type' => 'text',
                    'wrapper' => ['class' => 'form-group col-md-4'],
                ],
                [
                    'name' => 'url',
                    'label' => 'Enlace',
                    'type' => 'text',
                    'wrapper' => ['class' => 'form-group col-md-4'],
                ],
            ],
            'new_item_label' => 'New Item',
            'reorder' => false,
        ]);
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
