 <li class="nav-item {{ count($childItem['children']) > 0 ? 'nav-dropdown' : '' }}">

        {{-- If has children's, render dropdown childItem --}}
        @if (count($childItem['children']) > 0)
            @php
                $display = true;
                $permissions = $childItem->children->pluck('permission.name')->filter();
                if ($childItem->children->count() && auth()->check()) {
                    $display = $permissions->count() ? auth()->user()->canAny($permissions) : true;
                }
            @endphp

            @if ($display)
                <a class="nav-link nav-dropdown-toggle" href="#">
                    <i class="{{ $childItem->icon }}"></i> {{ $childItem->name }}
                </a>
            @endif
        @else
            @php
                $display = true;
                if ($childItem->permission && auth()->check()) {
                    $display = auth()->user()->can($childItem->permission->name);
                }
            @endphp

            @if ($display)
                @if($childItem->is_external)
                    <a class="nav-link" target="_blank" href="{{ $childItem->url() }}">
                        <i class="{{ $childItem->icon }}"></i> {{ $childItem->name }}
                    </a>
                @else
                    <a class="nav-link" href="{{ $childItem->url() }}">
                        <i class="{{ $childItem->icon }}"></i> {{ $childItem->name }}
                    </a>
                @endif
            @endif
        @endif

        {{-- Render children childItems --}}
        @if (count($childItem['children']) > 0 && $display)
            <ul class="nav-dropdown-items">
                @foreach ($childItem['children'] as $childItem3)
                    @include('partials.menu_item', ['childItem' => $childItem3]) 
                @endforeach
            </ul>
        @endif
    </li>