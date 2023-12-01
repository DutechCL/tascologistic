<?php

namespace App\Http\Controllers\Admin;

use App\Models\Customer;
use App\Services\SAP\SyncService;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class CustomerCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class CustomerCrudController extends CrudController
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
        CRUD::setModel(\App\Models\Customer::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/customer');
        CRUD::setEntityNameStrings(__('customer.customer'), __('customer.customers'));
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    protected function setupListOperation()
    {
        CRUD::addButtonFromView('top', 'sync.customers.sync', 'sync.customers.sync', 'end');

        CRUD::addColumn([
            'name' => 'CardName',
            'label' => __('customer.crud.name'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'CardCode',
            'label' => __('customer.crud.code'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'Address',
            'label' => __('customer.crud.address'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'FederalTaxID',
            'label' => __('customer.crud.federal_tax'),
            'type' => 'text',
        ]);
    }
}
