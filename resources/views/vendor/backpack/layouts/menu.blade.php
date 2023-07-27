@foreach (\App\Models\item::getTree(); as $item)
    <li class='nav-item {{ count($item['children']) > 0 ? 'nav-dropdown' : '' }}'>

        {{-- If has children's, render dropdown item --}}
        @if (count($item['children']) > 0)
            @php
                $display = true;
                $permissions = $item->children->pluck('permission.name')->filter();
                if ($item->children->count()) {
                    $display = $permissions->count() ? auth()->user()->canAny($permissions) : true;
                }
            @endphp  

            @if ($display)
            <a class="nav-link nav-dropdown-toggle" href="#">
                <i class="nav-icon la la-th-list"></i> {{ $item->name }}
            </a>
            @endif
        @else
            @php
                $display = true;
                if ($item->permission) {
                    $display = auth()->user()->can($item->permission->name);
                }
            @endphp  

            @if($display)
                <a class='nav-link' href='{{ $item->url() }}'>
                    <i class='nav-icon la la-money-check-alt'></i> {{ $item->name }}
                </a>
            @endif
        @endif
        
        {{-- Render children items --}}
        @if (count($item['children']) > 0 && $display)
            <ul class="nav-dropdown-items">
            @foreach($item['children'] as $item)
                @include('partials.menu', $item)
            @endforeach
            </ul>
        @endif
    </li>
@endforeach 