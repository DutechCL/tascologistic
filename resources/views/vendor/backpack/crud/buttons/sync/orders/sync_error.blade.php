@php
    use App\Models\LogOrder;
@endphp

@if(LogOrder::existOrdersError())
    <button type="button" class="btn btn-primary" id="export-button" onclick="ajaxSapSync(event, 'sync_error')">
        <i class="nav-icon la la-download"></i> @lang('log_order.crud.buttons.sync_error', ['count' => LogOrder::countOrdersError()])
    </button>
@endif

<script>
    window.appConfig = {
        csrfToken: '{{ csrf_token() }}',
        sapSyncRoute: '{{ route("admin.sap.sync") }}',
    };
</script>
<script src="{{ asset('js/custom/ajaxSapSync.js') }}"></script>
