<table>
    <thead style="">
        <tr>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('orders_distpatch.export.fields.num_doc')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('orders_distpatch.export.fields.vaichle')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('orders_distpatch.export.fields.name_item')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('orders_distpatch.export.fields.quantity')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('orders_distpatch.export.fields.code_item')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('orders_distpatch.export.fields.identificator_contact')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('orders_distpatch.export.fields.name_contact')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('orders_distpatch.export.fields.phone_contact')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('orders_distpatch.export.fields.email_contact')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('orders_distpatch.export.fields.address')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('orders_distpatch.export.fields.lat')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('orders_distpatch.export.fields.long')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('orders_distpatch.export.fields.date_min')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('orders_distpatch.export.fields.date_max')</th>
            <th style="text-align: center; font-weight: bold; background: #3b5edd; color:aliceblue">@lang('orders_distpatch.export.fields.ct_dest')</th>
        </tr>
    </thead>
    <tbody>
        @foreach($orders as $order)
            @php
            // dd($order);
               $docEntry = $order->bill ? $order->bill->DocEntry : null;
               $itenCount = $order->orderItems ? $order->orderItems->count() : null;
               $itenCode = $order->orderItems ? $order->orderItems->first()->ItemCode : null;
               $cardCode = $order->CardCode ? str_replace('C', '', $order->CardCode) : null;
               $cardName = $order->customer ? $order->customer->CardName : null;
               $emailAddress = $order->customer ? $order->customer->EmailAddress : null;
            @endphp
        <tr>
            <td>{{ $docEntry }} </td>
            <td></td>
            <td> </td>
            <td>{{ $itenCount }} </td>
            <td>{{ $itenCode }} </td>
            <td>{{ $cardCode }} </td>
            <td>{{ $cardName }} </td>
            <td>Telefono </td>
            <td>{{ $emailAddress }} </td>
            <td>direccion </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
        @endforeach
    </tbody>
</table>
