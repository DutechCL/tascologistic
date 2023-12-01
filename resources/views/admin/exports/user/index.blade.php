@php
    $number_format = '_($ * #,##0_);_($ * (#,##0);_($ * "-"??_);_(@_)';
@endphp

<table>
    <tr>
        <td></td>
    </tr>
    <tr>
        <td colspan="5" style="text-align: center; font-weight: bold;font-size: 22px">@lang('user.export.title')</td>
    </tr>
</table>

<table>
    <tr>
        <td></td>
        <td></td>
        <th style="text-align: center; font-weight: bold;"></th>
        <th style="text-align: center; font-weight: bold;">@lang('user.export.date_export')</th>
        <th style="text-align: center; font-weight: bold;">@lang('user.export.user')</th>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td style="text-align: center"></td>
        <td style="text-align: center"><?PHP echo date('d-m-Y h:m A',strtotime($date));?></td>
        <td style="text-align: center">{{ Auth::user()->name }}</td>
    </tr>
</table>
<table>
    <thead style="">
        <tr>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('user.export.fields.name')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('user.export.fields.email')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('user.export.fields.phone')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('user.export.fields.role')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('user.export.fields.warehouse')</th>
            {{-- <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('user.export.fields.active')</th> --}}
        </tr>
    </thead>
    <tbody>
        @foreach($users as $user)
            <tr>
                <td>{{$user->name}} </td>
                <td>{{$user->email}} </td>
                <td>{{$user->mobile_phone_number}} </td>
                <td>
                    @if(count($user->userRoles) > 0)
                        @foreach($user->userRoles as $role)
                            {{$role->name}} @unless($loop->last),@endunless
                        @endforeach    
                    @endif
                </td>
                <td> 
                    @if(count($user->warehouses) > 0)
                        @foreach($user->warehouses as $warehouse)
                            {{$warehouse->WarehouseName}} @unless($loop->last),@endunless
                        @endforeach    
                    @endif
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
