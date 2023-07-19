@php
    $roleId = request()->route('id');
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
        <tr>
            <th>{{ __('role.crud.view') }} </th>
            <th>{{ __('role.crud.permissions') }} </th>
        </tr>
    </thead>
    <tbody>
        @foreach(DB::table('permissions')->distinct('slug')->get(['slug']) as $permission)
            <tr>
                <td>{{ $permission->slug }}</td>
                <td>
                    @foreach(DB::table('permissions')->where('slug', $permission->slug)->get() as $item)
                        @php
                            $isChecked = DB::table('role_has_permissions')
                                ->where('role_id', $roleId) // Reemplaza $roleId con el ID del rol actualmente editado
                                ->where('permission_id', $item->id)
                                ->exists();
                        @endphp
                        <label>
                            <input type="checkbox" name="permissionIds[]" value="{{ $item->id }}" {{ $isChecked ? 'checked' : '' }}>
                            {{ str_replace($permission->slug .'.', '', $item->name) }}
                        </label>
                    @endforeach
                </td>
                <td></td>
            </tr>
        @endforeach
    </tbody>
</table>
