<?php

namespace App\Http\Controllers\Admin;

use App\Http\Requests\MenuItemRequest;
use Illuminate\Support\Facades\Route;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;
use Illuminate\Support\Facades\DB;
use App\Models\MenuItem;

class MenuItemCrudController extends CrudController
{
    use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\CreateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\UpdateOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\DeleteOperation;
    use \Backpack\CRUD\app\Http\Controllers\Operations\ReorderOperation;


    public function setup()
    {
        CRUD::setModel(\App\Models\MenuItem::class);
        CRUD::setRoute(config('backpack.base.route_prefix').'/menu-item');
        CRUD::setEntityNameStrings('menu item', 'menu items');
    }

    protected function setupReorderOperation()
    {
        CRUD::set('reorder.label', 'name');
        CRUD::set('reorder.max_level', 3);
    }


    protected function setupListOperation()
    {
        CRUD::enableReorder('name', 3);

        CRUD::addColumn([
            'name' => 'name',
            'label' => 'Label',
        ]);

        CRUD::addColumn([
            'label' => 'Parent',
            'type' => 'select',
            'name' => 'parent_id',
            'entity' => 'parent',
            'attribute' => 'name',
            'model' => "\App\Models\MenuItem",
        ]);
      
    }

    protected function setupCreateOperation()
    {
        CRUD::setValidation(MenuItemRequest::class);

        CRUD::addField([
            'name' => 'name',
            'label' => 'Etiqueta',
        ]);

        CRUD::addField([
            'label' => 'Padre',
            'type' => 'select',
            'name' => 'parent_id',
            'entity' => 'parent',
            'attribute' => 'name',
            'model' => '\App\Models\MenuItem',
        ]);

        $permissions = DB::table('permissions')->distinct('slug')->pluck('slug')->toArray();
        $options = array_combine($permissions, $permissions);

        CRUD::addField([
            'name' => 'view',
            'label' => 'Etiqueta del Campo',
            'type' => 'select_from_array',
            'attribute' => 'slug',
            'options' => $options
        ]);

        CRUD::addField([
            'label'                   => "permissions", // Table column heading
            'type'                    => 'select2_from_ajax',
            'name'                    => 'permission', // the column that contains the ID of that connected entity;
            'model'                   => '\App\Models\Permission',
            // 'entity'                  => 'permissions', // the method that defines the relationship in your Model
            // 'attribute'               => 'title', // foreign key attribute that is shown to user
            'data_source'             => url('api/v1/permission'), // url to controller search function (with /{id} should return model)
            'placeholder'             => 'Select an article', // placeholder for the select
            'include_all_form_fields' => true, //sends the other form fields along with the request so it can be filtered.
            'minimum_input_length'    => 0, // minimum characters to type before querying results
            'dependencies'            => ['view'], // when a dependency changes, this select2 is reset to null
            'method'               => 'POST', // optional - HTTP method to use for the AJAX call (GET, POST)
            'attribute' => 'name',
        ]);

        CRUD::addField([
            'name' => 'link',
            'label' => 'link',
            'type' => 'text',
        ]);

        CRUD::addField([
            'name' => 'order',
            'label' => 'order',
            'type' => 'number',
        ]);

        CRUD::addField([
            'name'    => 'icon',
            'type'    => 'icon_picker',
            'label'   => 'Icon Picker',
            'iconset' => 'nav-icon',
            'value'   => 'nav-icon-home',
        ]);

    }

    public function store(){
        try {
            DB::beginTransaction();
            $request = $this->crud->getRequest();
            dd($request->input('icon'));

            $user = MenuItem::create([
                'name' => $request->input('name'),
                'parent_id' => $request->input('parent_id'),
                'permission_id' => $request->input('permission'),
                'link' => $request->input('link'),
                'order' => $request->input('order'),
                'icon' => $request->input('icon'),
            ]);
           
            DB::commit();
            return redirect()->route('menu-item.index')->with('success', 'Los permisos se han creado correctamente.');
        } catch (ValidationException $e) {
            DB::rollback();
            throw $e;
        } catch (\Throwable $th) {
            DB::rollback();
            throw $th;
        }
    }

    protected function setupUpdateOperation()
    {
        CRUD::setValidation(MenuItemRequest::class);

        CRUD::addField([
            'name' => 'name',
            'label' => 'Etiqueta',
        ]);

        CRUD::addField([
            'label' => 'Padre',
            'type' => 'select',
            'name' => 'parent_id',
            'entity' => 'parent',
            'attribute' => 'name',
            'model' => '\App\Models\MenuItem',
        ]);

        $permissions = DB::table('permissions')->distinct('slug')->pluck('slug')->toArray();
        $options = array_combine($permissions, $permissions);

        CRUD::addField([
            'name' => 'view',
            'label' => 'Etiqueta del Campo',
            'type' => 'select_from_array',
            'attribute' => 'slug',
            'options' => $options
        ]);

        CRUD::addField([
            'label'                   => "permissions", // Table column heading
            'type'                    => 'select2_from_ajax',
            'name'                    => 'permission', // the column that contains the ID of that connected entity;
            'model'                   => '\App\Models\Permission',
            // 'entity'                  => 'permissions', // the method that defines the relationship in your Model
            // 'attribute'               => 'title', // foreign key attribute that is shown to user
            'data_source'             => url('api/v1/permission'), // url to controller search function (with /{id} should return model)
            'placeholder'             => 'Select an article', // placeholder for the select
            'include_all_form_fields' => true, //sends the other form fields along with the request so it can be filtered.
            'minimum_input_length'    => 0, // minimum characters to type before querying results
            'dependencies'            => ['view'], // when a dependency changes, this select2 is reset to null
            'method'               => 'POST', // optional - HTTP method to use for the AJAX call (GET, POST)
            'attribute' => 'name',
        ]);

        CRUD::addField([
            'name' => 'link',
            'label' => 'link',
            'type' => 'text',
        ]);

        CRUD::addField([
            'name' => 'order',
            'label' => 'order',
            'type' => 'number',
        ]);

        CRUD::addField([
            'name'    => 'icon',
            'type'    => 'icon_picker',
            'label'   => 'Icon Picker',
            'iconset' => 'fontawesome' // options: fontawesome, lineawesome, glyphicon, ionicon, weathericon, mapicon, octicon, typicon, elusiveicon, materialdesign
        ]);
    }
}
