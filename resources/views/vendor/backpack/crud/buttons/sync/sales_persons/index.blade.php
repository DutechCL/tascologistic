<button type="button" class="btn btn-primary" id="export-button" onclick="ajaxSapSync(event, 'sales_persons.get','SalesPerson')">
    <i class="nav-icon la la-download"></i> @lang('sales_person.crud.button.sync')
</button>

<script>
    window.appConfig = {
        csrfToken: '{{ csrf_token() }}',
        sapSyncRoute: '{{ route("admin.sap.sync") }}',
    };
</script>
<script src="{{ asset('js/custom/ajaxSapSync.js') }}"></script>