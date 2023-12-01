<?php

namespace App\Http\Controllers\Admin;

use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class ProductCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class ProductCrudController extends CrudController
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
        CRUD::setModel(\App\Models\Product::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/product');
        CRUD::setEntityNameStrings(__('product.product'), __('product.products'));
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        CRUD::addButtonFromView('top', 'sync.products.index', 'sync.products.index', 'end');

        CRUD::addColumn([
            'name' => 'ItemCode',
            'label' => __('product.crud.item_code'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'ItemName',
            'label' => __('product.crud.item_name'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'QuantityOnStock',
            'label' => __('product.crud.quantity_on_stock'),
            'type' => 'number',
        ]);

        CRUD::addColumn([
            'name' => 'ItemsGroupCode',
            'label' => __('product.crud.item_group_code'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'DefaultWarehouse',
            'label' => __('product.crud.defoult_warehouse'),
            'type' => 'text',
        ]);


        /**
         * Columns can be defined using the fluent syntax:
         * - CRUD::column('price')->type('number');
         */
    }
}
