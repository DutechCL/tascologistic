<?php

namespace App\Http\Controllers\Admin;

use App\Models\User;
use App\Models\MenuItem;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Requests\MenuItemRequest;
use Backpack\CRUD\app\Http\Controllers\CrudController;
use Backpack\CRUD\app\Library\CrudPanel\CrudPanelFacade as CRUD;

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
        CRUD::setEntityNameStrings(__('menu_items.item'), __('menu_items.items'));
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
            'label' => __('menu_items.crud.name'),
        ]);

        CRUD::addColumn([
            'label' => __('menu_items.crud.parent'),
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
            'label' => __('menu_items.crud.tag'),
            'wrapper' => [
                'class' => 'form-group col-sm-4 mb-3'
            ]
        ]);

        CRUD::addField([
            'label' =>  __('menu_items.crud.parent'),
            'type' => 'select',
            'name' => 'parent_id',
            'entity' => 'parent',
            'attribute' => 'name',
            'model' => '\App\Models\MenuItem',
            'wrapper' => [
                'class' => 'form-group col-sm-4 mb-3'
            ]
        ]);

        CRUD::field([
            'name'  => 'is_external',
            'label' =>  __('menu_items.crud.external'),
            'type'  => 'switch',
            'onLabel' => '✓',
            'offLabel' => '✕',
            'wrapper' => [
                'class' => 'form-group col-sm-4 mb-3 mt-4'
            ]
        ]);

        $permissions = DB::table('permissions')->distinct('slug')->pluck('slug')->toArray();
        $options = array_combine($permissions, $permissions);

        CRUD::addField([
            'name' => 'view',
            'label' => __('menu_items.crud.view'),
            'type' => 'view',
            'wrapper' => [
                'class' => 'form-group col-sm-4 mb-3'
            ]
        ]);

        CRUD::addField([
            'name' => 'order',
            'label' => __('menu_items.crud.order'),
            'type' => 'number',
            'wrapper' => [
                'class' => 'form-group col-sm-4 mb-3'
            ]
        ]);

        CRUD::addField([
            'name'    => 'icon',
            'type'    => 'icon_picker',
            'label'   => __('menu_items.crud.icon'),
            'iconset' => 'nav-icon',
            'wrapper' => [
                'class' => 'form-group col-sm-4 mb-3'
            ]

        ]);

    }

    public function store(){
        try {
            DB::beginTransaction();
            $request = $this->crud->getRequest();

            $user = MenuItem::create([
                'name' => $request->input('name'),
                'parent_id' => $request->input('parent_id') ?? null,
                'permission_id' => $request->input('permisions') ?? null,
                'link' => $request->input('url') ?? null,
                'order' => $request->input('order') ?? null,
                'icon' => $request->input('icon') ?? null,
                'is_external' => $request->input('is_external'),
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
            'label' => __('menu_items.crud.tag'),
            'wrapper' => [
                'class' => 'form-group col-sm-4 mb-3'
            ]
        ]);

        CRUD::addField([
            'label' =>  __('menu_items.crud.parent'),
            'type' => 'select',
            'name' => 'parent_id',
            'entity' => 'parent',
            'attribute' => 'name',
            'model' => '\App\Models\MenuItem',
            'wrapper' => [
                'class' => 'form-group col-sm-4 mb-3'
            ]
        ]);

        CRUD::field([
            'name'  => 'is_external',
            'label' =>  __('menu_items.crud.external'),
            'type'  => 'switch',
            'onLabel' => '✓',
            'offLabel' => '✕',
            'wrapper' => [
                'class' => 'form-group col-sm-4 mb-3 mt-4'
            ]
        ]);
        $permissions = DB::table('permissions')->distinct('slug')->pluck('slug')->toArray();
        $options = array_combine($permissions, $permissions);

        
        CRUD::addField([
            'name' => 'view',
            'label' => __('menu_items.crud.view'),
            'type' => 'view',
            'wrapper' => [
                'class' => 'form-group col-sm-4 mb-3'
            ]
        ]);

        CRUD::addField([
            'name' => 'order',
            'label' => __('menu_items.crud.order'),
            'type' => 'number',
            'wrapper' => [
                'class' => 'form-group col-sm-4 mb-3'
            ]
        ]);

        CRUD::addField([
            'name'    => 'icon',
            'type'    => 'icon_picker',
            'label'   => __('menu_items.crud.icon'),
            'iconset' => 'nav-icon',
            'wrapper' => [
                'class' => 'form-group col-sm-4 mb-3'
            ]

        ]);

    }

    public function update($id)
    {
        try {
            DB::beginTransaction();
            $request = $this->crud->getRequest();
    
            $menuItem = MenuItem::findOrFail($id);
    
            $menuItem->update([
                'name' => $request->input('name'),
                'parent_id' => $request->input('parent_id'),
                'permission_id' => $request->input('permisions'),
                'link' => $request->input('url'),
                'order' => $request->input('order'),
                'icon' => $request->input('icon'),
                'is_external' => $request->input('is_external'),
            ]);
    
            DB::commit();
            return redirect()->route('menu-item.index')->with('success', 'Los permisos se han actualizado correctamente.');
        } catch (ValidationException $e) {
            DB::rollback();
            throw $e;
        } catch (\Throwable $th) {
            DB::rollback();
            throw $th;
        }
    }

    public function getMenuItems()
    {
        $domain = config('app.url');
    
        $usuario = Auth::user() ?? User::find(1);
    
        $menuItems = MenuItem::with('children')->whereNull('parent_id')->orderBy('lft')->get();
    
        $menuArray = $menuItems->filter(function ($menuItem) use ($usuario, $domain) {
            if ($menuItem->children->count() > 0) {
                $menuItem->children = $menuItem->children->filter(function ($menuHijo) use ($usuario) {
                    return $usuario->can($menuHijo->permission->name);
                })->map(function ($menuHijo) use ($domain) {
                    return [
                        'label' => $menuHijo->name,
                        'url' => $domain . $menuHijo->link,
                    ];
                })->toArray();
    
                return count($menuItem->children) > 0;
            }
    
            return $usuario->can($menuItem->permission ? $menuItem->permission->name : null);
        })->map(function ($menuItem) use ($domain) {
            $itemArray = [
                'label' => $menuItem->name,
            ];
    
            if (count($menuItem->children) > 0) {
                $itemArray['items'] = $menuItem->children;
            } else {
                $itemArray['url'] = $domain . $menuItem->link;
            }
    
            return $itemArray;
        })->toArray();
    
        return response()->json([
            'status' => 'success',
            'data' => $menuArray,
        ]);
    }

}
