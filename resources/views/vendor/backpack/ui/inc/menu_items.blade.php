<div class="p-3">
    <img class="mb-4 mt-4 w-100" src="{{url('/images/logo_tasco_white.png')}}" alt="logo_tasco" title="logo blanco tasco">
</div>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css?f8e5313a2311" rel="stylesheet" type="text/css">
@foreach (\App\Models\MenuItem::getTree(); as $item)
    <li class="nav-item {{ count($item['children']) > 0 ? 'nav-dropdown' : '' }}">

        {{-- If has children's, render dropdown item --}}
        @if (count($item['children']) > 0)
            @php
                $display = true;
                $permissions = $item->children->pluck('permission.name')->filter();
                if ($item->children->count() && auth()->check()) {
                    $display = $permissions->count() ? auth()->user()->canAny($permissions) : true;
                }
            @endphp

            @if ($display)
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="{{ $item->icon }}"></i> {{ $item->name }}
                </a>
            @endif
        @else
            @php
                $display = true;
                if ($item->permission && auth()->check()) {
                    $display = auth()->user()->can($item->permission->name);
                }
            @endphp

            @if ($display)
                <a class="nav-link" href="{{ $item->url() }}">
                    <i class="{{ $item->icon }}"></i> {{ $item->name }}
                </a>
            @endif
        @endif

        {{-- Render children items --}}
        @if (count($item['children']) > 0 && $display)
            <ul class="nav-dropdown-items">
                @foreach ($item['children'] as $childItem)
                    @include('partials.menu_item', ['childItem' => $childItem]) 
                @endforeach
            </ul>
        @endif
    </li>
@endforeach

<x-backpack::menu-item title="Order statuses" icon="la la-question" :link="backpack_url('order-status')" />
<x-backpack::menu-item title="Problems" icon="la la-question" :link="backpack_url('problem')" />