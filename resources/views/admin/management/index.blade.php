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
            <li class="mt-4 mr-4">
                <a href="/app/autorizador/pickeo-revision" target="_blank" >
                    <div class="px-5 pt-4 pb-3 boder-card mr-4">
                        <img src="{{ asset('images/bodega.png') }}" alt="">
                        <p class=" font-xl pt-4 text-center">Bodega 1</p>
                    </div>
                </a>
            </li>
            <li class="mt-4 mr-4">
                <a href="/app/autorizador/pickeo-revision" target="_blank" >
                    <div class="px-5 pt-4 pb-3 boder-card mr-4">
                        <img src="{{ asset('images/bodega.png') }}" alt="">
                        <p class=" font-xl pt-4 text-center">Bodega 2</p>
                    </div>
                </a>
            </li>
            <li class="mt-4 mr-4">
                <a href="/app/autorizador/pickeo-revision" target="_blank" >
                    <div class="px-5 pt-4 pb-3 boder-card mr-4">
                        <img src="{{ asset('images/bodega.png') }}" alt="">
                        <p class=" font-xl pt-4 text-center">Bodega 3</p>
                    </div>
                </a>
            </li>
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
                <a href="/app/tracking/ordenes" target="_blank" >
                    <div class="boder-card d-flex flex-column justify-content-center align-items-center mr-4 pb-3 pt-4 px-5">
                        <img src="{{ asset('images/bodega.png') }}" alt="" style="width: 100px">
                        <p class=" font-xl pt-4 text-center">Sala de venta  <br>  aqui</p>
                    </div>
                </a>
            </li>
            <li class="mt-4 mr-4">
                <a href="/app/tracking/retiro-despacho" target="_blank" >
                    <div class="boder-card d-flex flex-column justify-content-center align-items-center mr-4 pb-3 pt-4 px-5">
                        <img src="{{ asset('images/bodega.png') }}" alt="" style="width: 100px">
                        <p class=" font-xl pt-4 text-center">Sala de venta <br> retito - despacho</p>
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