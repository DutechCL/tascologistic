@foreach (\App\Models\MenuItem::getTree(); as $item)
  {{-- <a class="no-underline hover:underline p-3"
     href="{{$item->url()}}">
     {{ $item->name }}
  </a>  --}}

  <li class='nav-item {{ count($item['children']) > 0 ? 'nav-dropdown' : '' }}'>

    {{-- If has children's, render dropdown item --}}
    @if (count($item['children']) > 0)
        {{-- @php
            $display = true;
            $permissions = $item->children->pluck('permission.name')->filter();
            if ($item->children->count()) {
                $display = $permissions->count() ? auth()->user()->canAny($permissions) : true;
            }
        @endphp   --}}

        @if (true)
        <a class="nav-link nav-dropdown-toggle" href="#">
            <i class="{{ $item->icon }}"></i> {{ $item->name }}
        </a>
        @endif
	@else
        {{-- @php
            $display = true;
            if ($item->permission) {
                $display = auth()->user()->can($item->permission->name);
            }
        @endphp   --}}

        @if(true)
            <a class='nav-link' href='{{ $item->url() }}'>
                <i class='{{ $item->icon }}'></i> {{ $item->name }}
            </a>
        @endif
    @endif
    
    {{-- Render children items --}}
    @if (count($item['children']) > 0 && true)
        <ul class="nav-dropdown-items">
        @foreach($item['children'] as $item)
            {{-- @include('partials.menu', $item) --}}
        @endforeach
        </ul>
    @endif
</li>
@endforeach 