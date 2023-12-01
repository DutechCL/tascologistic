@php
    $number_format = '_($ * #,##0_);_($ * (#,##0);_($ * "-"??_);_(@_)';
    $name = [
        'open' => 'Abierto',
        'close' => 'Cerrado',
    ]
@endphp

<table>
    <tr>
        <td></td>
    </tr>
    <tr>
        <td colspan="5" style="text-align: center; font-weight: bold;font-size: 22px">@lang('chat.export.title', ['status' => $name[$status].'s'])</td>
    </tr>
</table>

<table>
    <tr>
        <td></td>
        <td></td>
        <th style="text-align: center; font-weight: bold;"></th>
        <th style="text-align: center; font-weight: bold;">@lang('chat.export.date_export')</th>
        <th style="text-align: center; font-weight: bold;">@lang('chat.export.user')</th>
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
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('chat.export.fields.doc_num')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('chat.export.fields.customer')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('chat.export.fields.rut')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('chat.export.fields.method_shipping')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('chat.export.fields.origin')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('chat.export.fields.sales_person')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('chat.export.fields.informer')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('chat.export.fields.date_to')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('chat.export.fields.time_to')</th>
            @if($status == 'close')
                <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('chat.export.fields.date_from')</th>
                <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('chat.export.fields.time_from')</th>
                <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('chat.export.fields.time_resolved')</th>
            @endif
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('chat.export.fields.status')</th>
            {{-- <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('user.export.fields.active')</th> --}}
        </tr>
    </thead>
    <tbody>
        @foreach($chats as $chat)
        <tr>
            <td>{{$chat->order->DocNum}} </td>
            <td>{{$chat->order->customer->CardName}} </td>
            <td>{{$chat->order->customer->CardCode}} </td>
            <td>{{$chat->order->U_SBO_FormaEntrega}} </td>
            <td>{{$chat->order->report_user_responsible}} </td>
            <td>{{$chat->order->SalesEmployeeName}} </td>
            <td>{{$chat->order->report_user_name}} </td>
            <td>{{(new \DateTime($chat->created_at))->format('Y/m/d') }}</td>
            <td>{{(new \DateTime($chat->created_at))->format('H:i:s') }}</td>
            @if($status == 'close')
                <td>{{ $chat->resolved_date }}</td>
                <td>{{ $chat->resolved_time }}</td>
                <td> {{$chat->time_resolved}} </td>
            @endif
            <td>{{$name[$status]}} </td>
        </tr>
        @endforeach
    </tbody>
</table>
