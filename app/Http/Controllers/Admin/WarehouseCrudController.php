<?php

namespace App\Http\Controllers\Admin;

use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class WarehouseCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class WarehouseCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     * 
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\Warehouse::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/warehouse');
        CRUD::setEntityNameStrings(__('warehouse.warehouse'), __('warehouse.warehouses'));
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        CRUD::addButtonFromView('top', 'sync.warehouses.index', 'sync.warehouses.index', 'end');

        CRUD::addColumn([
            'name' => 'WarehouseCode',
            'label' => __('warehouse.crud.code'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'WarehouseName',
            'label' => __('warehouse.crud.name'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'Street',
            'label' => __('warehouse.crud.street'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'StreetNo',
            'label' => __('warehouse.crud.street_no'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'State',
            'label' => __('warehouse.crud.state'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'City',
            'label' => __('warehouse.crud.city'),
            'type' => 'text',
        ]);

        /**
         * Columns can be defined using the fluent syntax:
         * - CRUD::column('price')->type('number');
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
        CRUD::setValidation(WarehouseRequest::class);
        CRUD::setFromDb(); // set fields from db columns.

        /**
         * Fields can be defined using the fluent syntax:
         * - CRUD::field('price')->type('number');
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
