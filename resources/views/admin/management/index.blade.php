@extends(backpack_view('blank'))

<style>

    .tab-container {
    display: flex;
    }

    .tab-position {
        transform: translate(-45px, 0px);
        position: relative;
    }

    .tab-button {
    background: #fff;
    padding: 10px 20px;
    width: 300px;
    color: #259bd7;
    font-size: 18px;
    border-radius: 25px;
    cursor: pointer;
    outline: inherit;
    border: 2px solid #259bd7;
    }

    .tab-button.active {
    background: #259bd7;
    font-size: 18px;
    color: #fff;
    outline: inherit;
    border: 2px solid #259bd7;
    z-index: 9999;
    }

    .tab-content {
    display: none;
    margin-top: 20px;
    border-radius: 0 !important;
    border: none !important;
    box-shadow: none !important;
    }

    .tab-content.active {
        display: block;
    }
    .boder-card{
        box-shadow: 0px 5px 6px 1px rgb(161 159 159 / 33%);
        border-radius: 10px;
    }
    a:hover{
        text-decoration: none !important;
    }
</style>

@section('content')
  <div class="tab-container p-5">
    <div style="display: flex" class="w-100 justify-content-center">
        <button class="tab-button active" data-tab="bodegas">Bodegas</button>
        <button class="tab-button tab-position" data-tab="sala-de-ventas">Sala de Ventas</button>
    </div>
  </div>

  <div class="tab-content active" id="bodegas">
    <p class="font-3xl font-weight-bold text-primary">
        Selecciona una bodega para monitorear
    </p>
    <div>
        <ul class="d-flex list-inline">
            @foreach ($user->warehouses as $warehouse)
            <li class="mt-4 mr-4">
                <a href="{{ url('/app/autorizador/pickeo-revision', $warehouse->WarehouseCode) }}">
                    <div class="align-items-center boder-card d-flex flex-column justify-content-center mr-4 pb-3 pt-4 px-5" style="width: 245px;     height: 240px;">
                        <!-- Aquí puedes usar la información de cada bodega -->
                        <img src="{{ asset('images/bodega.png') }}" alt="">
                        <p class="font-xl pt-4 text-center w-100">{{ $warehouse->WarehouseName }}</p>
                    </div>
                </a>
            </li>
        @endforeach
        </ul>
    </div>
  </div>
  <div class="tab-content" id="sala-de-ventas">
    <p class="font-3xl font-weight-bold text-primary">
         Selecciona una sala para monitorear
    </p>
    <div>
        <ul class="d-flex list-inline">
            <li class="mt-4 mr-4">
                <a href="/app/tracking/ordenes" >
                    <div class="align-items-center boder-card d-flex flex-column justify-content-center mr-4 pb-3 pt-4 px-5" style="width: 245px; height: 240px;">
                        <img src="{{ asset('images/bodega.png') }}" alt="" style="width: 100px">
                        <p class=" font-xl pt-4 text-center">Pantalla salas <br> de venta</p>
                    </div>
                </a>
            </li>
            <li class="mt-4 mr-4">
                <a href="/app/tracking/retiro-despacho" >
                    <div class="align-items-center boder-card d-flex flex-column justify-content-center mr-4 pb-3 pt-4 px-5" style="width: 245px; height: 240px;">
                        <img src="{{ asset('images/bodega.png') }}" alt="" style="width: 100px">
                        <p class=" font-xl pt-4 text-center">Pantalla bodega</p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
  </div>
@endsection

@push('after_scripts')

<script>
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Ocultar todos los contenidos de las pestañas
        tabContents.forEach(content => {
        content.classList.remove('active');
        });

        // Desactivar todos los botones de pestañas
        tabButtons.forEach(btn => {
        btn.classList.remove('active');
        });

        const tabId = button.getAttribute('data-tab');
        const tabContent = document.getElementById(tabId);

        // Mostrar el contenido de la pestaña seleccionada y activar el botón correspondiente
        if (tabContent) {
        tabContent.classList.add('active');
        button.classList.add('active');
        }
    });
    });
</script>
@endpush