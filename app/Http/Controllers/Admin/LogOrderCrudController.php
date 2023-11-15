<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\LogOrderRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class LogOrderCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class LogOrderCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    // use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    // use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    // use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ShowOperation;

    /**
     * Configure the CrudPanel object. Apply settings to all operations.
     * 
     * @return void
     */
    public function setup()
    {
        CRUD::setModel(\App\Models\LogOrder::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/log-order');
        CRUD::setEntityNameStrings(__('log_order.log_order'), __('log_order.log_orders'));

        $this->crud->enableExportButtons();
    }

    /**
     * Define what happens when the List operation is loaded.
     * 
     * @see  https://backpackforlaravel.com/docs/crud-operation-list-entries
     * @return void
     */
    private function setupFilters()
    {
        CRUD::addFilter([
            'name' => 'isSynced',
            'type' => 'select2',
            'label' => __('log_order.crud.status'),
        ], function () {
            return [
                0 => __('log_order.crud.filters.is_synced_no'),
                1 => __('log_order.crud.filters.is_synced_yes'),
            ];
        }, function ($value) { // if the filter is active
            CRUD::addClause('where', 'isSynced', $value);
        });

        CRUD::addFilter([
            'name' => 'created_at',
            'type' => 'date_range',
            'label' => __('log_order.crud.date'),
        ], false, function ($value) { // if the filter is active
            $dates = json_decode($value);
            CRUD::addClause('where', 'created_at', '>=', $dates->from);
            CRUD::addClause('where', 'created_at', '<=', $dates->to . ' 23:59:59');
        });
    }

    protected function setupListOperation()
    {
        CRUD::addColumn([
            'name' => 'DocNum',
            'label' => __('log_order.crud.doc_num'),
            'prefix' => 'N° ',
        ]);

        CRUD::addColumn([
            'name' => 'process',
            'label' => __('log_order.crud.process'),
        ]);

        CRUD::addColumn([
            'name' => 'message',
            'label' => __('log_order.crud.message'),
        ]);

        CRUD::addColumn([
            'name' => 'isSynced',
            'label' => __('log_order.crud.status'),
            'type' => 'boolean',
            'options' => [
                0 => __('log_order.crud.filters.is_synced_no'),
                1 => __('log_order.crud.filters.is_synced_yes'),
            ],
            'wrapper' => [
                'element' => 'span', // Puedes cambiar esto según la etiqueta HTML que desees utilizar
                'class' => function ($crud, $column, $entry, $related_key) {
                    return $column['value'] == 1 ? 'badge badge-success p-1' : 'badge badge-error p-1';
                },
            ],

        ]);

        CRUD::addColumn([
            'name' => 'created_at',
            'label' => __('log_order.crud.date'),
            'type' => 'date',
        ]);

        CRUD::addColumn([
            'name' => 'time',
            'label' => __('log_order.crud.time'),
            'type' => 'time',
        ]);

        $this->setupFilters();
    }
}
