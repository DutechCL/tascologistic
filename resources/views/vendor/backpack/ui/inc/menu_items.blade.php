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
