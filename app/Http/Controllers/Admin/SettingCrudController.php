<?php

namespace App\Http\Controllers\Admin;

use App\Models\Setting;
use App\Http\Requests\SettingRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

/**
 * Class SettingCrudController
 * @package App\Http\Controllers\Admin
 * @property-read \Backpack\CRUD\app\Library\CrudPanel\CrudPanel $crud
 */
class SettingCrudController extends CrudController
{
    //use \Backpack\CRUD\app\Http\Controllers\Operations\ListOperation;
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
        CRUD::setModel(\App\Models\Setting::class);
        CRUD::setRoute(config('backpack.base.route_prefix') . '/setting');
        CRUD::setEntityNameStrings(__("settings.settings"), __("settings.settings"));
    }

    public function store(SettingRequest $request)
    {
         foreach ($request->all() as $key => $value) {

            if (($key == '_sap_password' || $key == '_biller_password') && is_null($value)) {
                continue;
            }

            Setting::set($key, $value);
         }
         
        return redirect()->back();
    }
    /**
     * Define what happens when the Create operation is loaded.
     * 
     * @see https://backpackforlaravel.com/docs/crud-operation-create
     * @return void
     */
    protected function setupCreateOperation()
    {
        CRUD::setValidation(SettingRequest::class);
        // CRUD::setFromDb(); // set fields from db columns.
        Setting::all()->each(function ($setting) {
            if($setting->active){
                CRUD::addField([
                    'name' => $setting->key,
                    'label' => $setting->label,
                    'type' => $setting->type,
                    'default' => $setting->value,
                    'tab' => __("settings.tab.$setting->section"),
                    'wrapper' => ['class' => $setting->class],
                ]);
            }
        });
        /**
         * Fields can be defined using the fluent syntax:
         * - CRUD::field('price')->type('number');
         */
    }
}
