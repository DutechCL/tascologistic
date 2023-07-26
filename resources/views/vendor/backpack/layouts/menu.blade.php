<li class='nav-item {{ count($menuItem['children']) > 0 ? 'nav-dropdown' : '' }}'>

    {{-- If has children's, render dropdown item --}}
    @if (count($menuItem['children']) > 0)
        @php
            $display = true;
            $permissions = $menuItem->children->pluck('permission.name')->filter();
            if ($menuItem->children->count()) {
                $display = $permissions->count() ? auth()->user()->canAny($permissions) : true;
            }
        @endphp  

        @if ($display)
        <a class="nav-link nav-dropdown-toggle" href="#">
            <i class="nav-icon la la-th-list"></i> {{ $menuItem->name }}
        </a>
        @endif
	@else
        @php
            $display = true;
            if ($menuItem->permission) {
                $display = auth()->user()->can($menuItem->permission->name);
            }
        @endphp  

        @if($display)
            <a class='nav-link' href='{{ $menuItem->url() }}'>
                <i class='nav-icon la la-money-check-alt'></i> {{ $menuItem->name }}
            </a>
        @endif
    @endif
    
    {{-- Render children items --}}
    @if (count($menuItem['children']) > 0 && $display)
        <ul class="nav-dropdown-items">
        @foreach($menuItem['children'] as $menuItem)
            @include('partials.menu', $menuItem)
        @endforeach
        </ul>
    @endif
</li>