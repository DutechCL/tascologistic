<style>
    .container-mail{
        max-width: 1200px !important;
        margin: auto !important;
        background: #ccc !important;
        padding: 30px 75px !important;
    }
    
    .bg-white{
        background: #fff !important;
    }

    .bg-blue{
        background: #0094d1 !important;
    }

    .text-center{
        text-align: center !important;
    }

    .p-30{
        padding: 30px !important;
    }

    .pt-20{
        padding-top: 20px !important;
    }

    .pb-20{
        padding-bottom: 20px !important;
    }

    .mt-0{
        margin: 0 !important;
    }

    .font-text-generic{
        font-size: 20px;
        font-family: sans-serif;
        line-height: 1.5;
    }

    .border{
        border: 1px solid #ccc;
    }

    .border-x-none{
        border-right: none !important;
        border-left: none !important;
    }

    .text-grey{
        color: #615959;
    }

    .text-white{
        color: #fff;
    }

    .text-blue{
        color: #0094d1;
    }

    .tag{
        background: #0094d14f;
        padding: 5px 15px;
        border-radius: 13px;
    }
    .w-100{
        width: 100% !important;
    }

    .m-auto{
        margin: auto !important;
    }
</style>


{{-- {{ dd($chat->order );}} --}}

@php
    $problemClass = '\App\Models\Problem';
@endphp
<div class="container-mail">
    <div class="bg-white">

        <section>
            <div class="text-center p-30">
                <img class="pt-20" style="width: 350px;" src="{{ asset('images/logo_tasco_negro.png') }}" alt="">
            </div>
            <div class="p-30">
                <p class="font-text-generic text-grey">Hola {{ $notifiable->name }},</p>
                <p class="font-text-generic text-grey">Lamentamos informarte que ha ocurrido un inconveniente con el pedido.</p>
                <ul>
                    @if($chat->order->report_user_responsible == 'cda')
                        @foreach($chat->order->problems as $orderProblem)
                            @if($orderProblem->other == null)
                                <li class="font-text-generic text-grey">{{ $orderProblem->problem->title }}</li> 
                            @else
                                <li class="font-text-generic text-grey">{{ $orderProblem->problem->title }} - {{ strip_tags($orderProblem->other) }}</li>
                            @endif
                        @endforeach
                    @else
                        @foreach($chat->order->orderItems as $item)
                            @if($item->problems->count() > 0)
                                <li class="font-text-generic text-grey pt-20">
                                   <span style="font-weight: 700">{{ $item->ItemDescription }} - SKU: {{ $item->ItemCode }}</span> <br>
                                    <ul>
                                        @foreach($item->problems as $problem)
                                            @if($problem->other == null)
                                                <li>{{ $problemClass::find($problem->problem_id)->title }}</li> 
                                            @else
                                                <li>{{ $problemClass::find($problem->problem_id)->title }} - {{ strip_tags($problem->other) }}</li>
                                            @endif
                                        @endforeach
                                    </ul>
                                </li>
                            @endif
                        @endforeach
                    @endif
                </ul>
            </div>
        </section>
        
        <section class="p-30">
            <table style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr class="bg-blue text-white">
                        <th class="border border-x-none font-text-generic pb-20 pt-20">Nota de venta</th>
                        <th class="border border-x-none font-text-generic pb-20 pt-20">Fecha</th>
                        <th class="border border-x-none font-text-generic pb-20 pt-20">Hora</th>
                        <th class="border border-x-none font-text-generic pb-20 pt-20">Cliente</th>
                        <th class="border border-x-none font-text-generic pb-20 pt-20">Monto total</th>
                        <th class="border border-x-none font-text-generic pb-20 pt-20">Método entrega</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="border border-x-none font-text-generic text-center pb-20 pt-20 text-grey">N° {{ $chat->order->DocNum }}</td>
                        <td class="border border-x-none font-text-generic text-center pb-20 pt-20 text-grey">{{ $chat->order->DocDate }}</td>
                        <td class="border border-x-none font-text-generic text-center pb-20 pt-20 text-grey">{{(new DateTime($chat->order->DocTime))->format('H:i') }}</td>
                        <td class="border border-x-none font-text-generic text-center pb-20 pt-20 text-grey">{{ $chat->order->customer->CardName }}</td>
                        <td class="border border-x-none font-text-generic text-center pb-20 pt-20 text-grey">$ {{ number_format($chat->order->DocTotal, 0, ',', '.') }}</td>
                        <td class="border border-x-none font-text-generic text-center pb-20 pt-20 "><span class="tag text-blue">{{ str_replace( "Cliente" , "" ,$chat->order->U_SBO_FormaEntrega) }}</span></td>
                    </tr>
            </table>
            <div class="p-30" style="padding-left: 0 !important;">
                <a class="font-text-generic text-blue" href="{{ url("/app/chat/show/$chat->id") }}" target="_blank">Haz click aquí para ver los detalles de la nota de venta</a>
            </div>
        </section>
        
        <section class="bg-blue w-100">
            <div class="text-center p-30">  
                <img style="width: 350px;" src="{{ asset('images/logo_tasco_white.png') }}" alt="">
            </div>
            <div class="text-center p-30 m-auto">
                <p class="font-text-generic text-center text-white mt-0">Av. Vicuña Mackenna 1325, Santiago, Chile</p>
                <p class="font-text-generic text-center text-white mt-0">Atención continua desde las 08:15 AM hasta las 17:45 PM hrs</p>
                <p class="font-text-generic text-center text-white mt-0">Teléfono: +569 6666 4706 - (56) 2 2372 7250 - (56) 2 2372 7251e</p>
            </div>
        </section>
    </div>
</div>