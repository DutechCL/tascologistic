<?php

namespace App\Http\Controllers\Admin;

use App\Models\OrderStatus;
use App\Http\Requests\OrderStatusRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class OrderStatusCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class OrderStatusCrudController extends CrudController
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
        CRUD::setModel(OrderStatus::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/order-status');
        CRUD::setEntityNameStrings(__('order_status.order_status'), __('order_status.order_statuses'),);
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        // CRUD::setFromDb(); // set columns from db columns.
        CRUD::addColumn([
            'name' => 'name',
            'label' => __('order_status.crud.name'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'description',
            'label' => __('order_status.crud.description'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'color',
            'label' => __('order_status.crud.color'),
            'type' => 'color', 
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
        CRUD::setValidation(OrderStatusRequest::class);
        // CRUD::setFromDb(); // set fields from db columns.
        CRUD::addField([
            'name' => 'name',
            'label' => __('order_status.crud.name'),
            'type' => 'text',
            'wrapper' => [
                'class' => 'form-group col-sm-6 mb-3'
            ],
        ]);
        CRUD::addField([
            'name' => 'description',
            'label' => __('order_status.crud.description'),
            'type' => 'text',
            'wrapper' => [
                'class' => 'form-group col-sm-6 mb-3'
            ],
        ]);
        CRUD::addField([
            'name' => 'color',
            'label' => __('order_status.crud.color'),
            'type' => 'color',
        ]);
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
