<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\ProblemRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class ProblemCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class ProblemCrudController extends CrudController
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
        CRUD::setModel(\App\Models\Problem::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/problem');
        CRUD::setEntityNameStrings(__('problem.problem'), __('problem.problems'));
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
            'name' => 'title',
            'label' => __('problem.crud.name'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'description',
            'label' => __('problem.crud.description'),
            'type' => 'text',
        ]);

        CRUD::addColumn([
            'name' => 'type',
            'label' => __('problem.crud.type'),
            'type' => 'select_from_array',
            'options' => [
                'cda' => 'CDA', 
                'picker-reviewer' => 'Picker / Revisor'
            ],
            'wrapper' => ['class' => 'tag-column'],
            'attributes' => [
                'style' => 'width:90px;', // Ajusta el ancho según tus necesidades
            ],
        ]);

        CRUD::addColumn([
            'name' => 'active',
            'label' => __('problem.crud.active'),
            'type' => 'select_from_array',
            'options' => [0 => 'Inactivo', 1 => 'Activo'],
            'wrapper' => ['class' => 'tag-column'],
            'attributes' => [
                'style' => 'width:90px;', // Ajusta el ancho según tus necesidades
            ],
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
        CRUD::setValidation(ProblemRequest::class);
        CRUD::addField([
            'name' => 'title',
            'label' => __('problem.crud.name'),
            'type' => 'text',
        ]);

        CRUD::addField([
            'name' => 'description',
            'label' => __('problem.crud.description'),
            'type' => 'text',
        ]);

        CRUD::addField([
            'name'        => 'type',
            'label'       => __('problem.crud.type'),
            'type'        => 'select_from_array',
            'options'     => [
                'cda' => 'CDA', 
                'picker-reviewer' => 'Picker / Revisor'
            ],
            'allows_null' => false,
            'default'     => 'one',
        ]);

        CRUD::addField([
            'name' => 'active',
            'label' => __('problem.crud.active'),
            'type' => 'switch',
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
