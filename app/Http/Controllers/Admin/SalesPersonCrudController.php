<?php

namespace App\Http\Controllers\Admin;

use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class ProductCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class SalesPersonCrudController extends CrudController
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
        CRUD::setModel(\App\Models\SalesPerson::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/sales-person');
        CRUD::setEntityNameStrings(__('sales_person.sales_person'), __('sales_person.sales_persons'));
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
                'name' => 'Locked',
                'type' => 'select2',
                'label' => __('sales_person.crud.locked'),
            ], function () {
                return [
                    'tNO' => __('sales_person.crud.tno'),
                    'tYES' => __('sales_person.crud.tyes'),
                ];
            }, function ($value) { 
                CRUD::addClause('where', 'Locked', $value);
            });

            CRUD::addFilter([
                'name' => 'Active',
                'type' => 'select2',
                'label' => __('sales_person.crud.status'),
            ], function () {
                return [
                    0 => __('sales_person.crud.inactive'),
                    1 => __('sales_person.crud.active'),
                ];
            }, function ($value) {
                CRUD::addClause('where', 'Active', $value);
            });
     }

    protected function setupListOperation()
    {
        CRUD::addButtonFromView('top', 'sync.sales_persons.index', 'sync.sales_persons.index', 'end');

        CRUD::addColumn([
            'name' => 'SalesEmployeeName',
            'label' => __('sales_person.crud.sales_employee_name'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'SalesEmployeeCode',
            'label' => __('sales_person.crud.sales_employee_code'),
            'type' => 'text',
        ]);

        // CRUD::addColumn([
        //     'name' => 'CommissionForSalesEmployee',
        //     'label' => __('sales_person.crud.commission_for_sales_employee'),
        //     'type' => 'number',
        // ]);

        // CRUD::addColumn([
        //     'name' => 'CommissionGroup',
        //     'label' => __('sales_person.crud.commission_group'),
        //     'type' => 'text',
        // ]);

        CRUD::addColumn([
            'name' => 'Locked',
            'label' => __('sales_person.crud.locked'),
            'type' => 'text',
            'value' => function ($value) {
                return $value['Locked'] == 'tNO' ? __('sales_person.crud.tno') : __('sales_person.crud.tyes');
            },
            'wrapper' => [
                'element' => 'span', // Puedes cambiar esto según la etiqueta HTML que desees utilizar
                'class' => function ($crud, $column, $entry, $related_key) {
                    return $column['value'] == 'No' ? 'badge badge-success p-1' : 'badge badge-error p-1';
                }
            ],
        ]);

        CRUD::addColumn([
            'name' => 'Active',
            'label' => __('sales_person.crud.status'),
            'type' => 'boolean',
            'options' => [
                0 => __('sales_person.crud.inactive'),
                1 => __('sales_person.crud.active'),
            ],
            'wrapper' => [
                'element' => 'span', // Puedes cambiar esto según la etiqueta HTML que desees utilizar
                'class' => function ($crud, $column, $entry, $related_key) {
                    return $column['value'] == 1 ? 'badge badge-success p-1' : 'badge badge-error p-1';
                },
            ],
        ]);

        CRUD::addColumn([
            'name' => 'Telephone',
            'label' => __('sales_person.crud.telephone'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'Mobile',
            'label' => __('sales_person.crud.mobile'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'Email',
            'label' => __('sales_person.crud.email'),
            'type' => 'text',
        ]);

        $this->setupFilters();
    }
}
