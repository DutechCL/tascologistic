@php
    $roleId = request()->route('id');
    $columnNames = [];

    $permissions = DB::table('permissions')->distinct('slug')->get(['slug', 'name']);
    foreach ($permissions as $permission) {
        $columnName = str_replace($permission->slug . '.', '', $permission->name);
        if (!in_array($columnName, $columnNames)) {
            $columnNames[] = $columnName;
        }
    }
@endphp

<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th, td {
        border: 1px solid #ddd;
        padding: 8px;
    }

    th {
        background-color: #f2f2f2;
    }

    label {
        display: block;
        margin-bottom: 5px;
    }
</style>
<table>
    <thead>
        <tr >
            <th>
                <div class="d-flex justify-content-center">
                    {{ __('role.crud.view') }} 
                </div>
            </th>
            @foreach($columnNames as $columnName)
                <th>
                    <div class="d-flex justify-content-center">
                        {{ $columnName }}
                    </div>
                </th>
            @endforeach
        </tr>
    </thead>
    <tbody>
        @foreach(DB::table('permissions')->distinct('slug')->get(['slug']) as $permission)
            <tr>
                <td>{{ $permission->slug }}</td>
                @foreach($columnNames as $columnName)
                    <td>
                        @foreach(DB::table('permissions')->where('slug', $permission->slug)->get() as $item)
                            @php
                                $permissionName = str_replace($permission->slug . '.', '', $item->name);
                                $isChecked = DB::table('role_has_permissions')
                                    ->where('role_id', $roleId)
                                    ->where('permission_id', $item->id)
                                    ->exists();
                            @endphp
                            @if ($permissionName === $columnName)
                                <div class="custom-control custom-switch d-flex justify-content-center">
                                    <input type="checkbox" class="custom-control-input" id="{{ $item->name }}" name="permissionIds[]" value="{{ $item->id }}" {{ $isChecked ? 'checked' : '' }}/>
                                    <label class="custom-control-label" for="{{ $item->name }}"></label>
                                </div>
                            @endif
                        @endforeach
                    </td>
                @endforeach
            </tr>
        @endforeach
    </tbody>
</table>