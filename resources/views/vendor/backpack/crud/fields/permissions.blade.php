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
            <th>
                <div class="custom-control custom-switch d-flex justify-content-center">
                    <input type="checkbox" class="custom-control-input" id="checkAll" onclick="checkboxesAll(this.checked)"/>
                    <label class="custom-control-label" for="checkAll"></label>
                </div>
            </th>
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
                                $isChekedAllLine = true;
                                if(!$isChecked)
                                {
                                    $isChekedAllLine = false;
                                }
                            @endphp
                            @if ($permissionName === $columnName)
                                <div class="custom-control custom-switch d-flex justify-content-center">
                                    <input type="checkbox" class="custom-control-input {{ $permission->slug }} checkall" id="{{ $item->name }}" name="permissionIds[]" value="{{ $item->id }}" {{ $isChecked ? 'checked' : '' }}/>
                                    <label class="custom-control-label {{ $permission->slug }}" for="{{ $item->name }}"></label>
                                </div>
                            @endif
                        @endforeach
                    </td>
                @endforeach
                <td>
                    <div class="custom-control custom-switch d-flex justify-content-center">
                        <input type="checkbox" class="custom-control-input checkall" onchange="checkboxesLine('{{ $permission->slug }}', this.checked)" {{ $isChekedAllLine ? 'checked' : '' }} id="checkall{{ $permission->slug }}"/>
                        <label class="custom-control-label" for="checkall{{ $permission->slug }}"></label>
                    </div>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>

<script>
    function checkboxesLine(slug, check) {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if (checkbox.classList.contains(slug)) {
                checkbox.checked = check;
            }
        });
    }

    function checkboxesAll(check) {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if (checkbox.classList.contains('checkall')) {
                checkbox.checked = check;
            }
        });
    }
</script>