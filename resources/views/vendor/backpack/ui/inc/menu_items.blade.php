<div class="p-3">
    <img class="mb-4 mt-4 w-100" src="{{url('/images/logo_tasco_white.png')}}" alt="logo_tasco" title="logo blanco tasco">
</div>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css?f8e5313a2311" rel="stylesheet" type="text/css">

@php
    $menuTree = \App\Models\MenuItem::getTree();
@endphp
 
@each('partials.menu_item', $menuTree, 'childItem')

<a style="position: absolute; bottom: 15px; left: 15px;" href="{{ route('backpack.auth.logout') }}"> <i class=" fas fa-arrow-circle-right"></i> Salir</a>