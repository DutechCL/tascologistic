
@push('after_scripts')

    <script>
        jQuery(document).ready(function () {
            jQuery('[bp-field-name="sales_person_id"]').css('display', 'none');
            
            jQuery('select[name="userRoles[]"]').on('change', function () {
                var selectedValues = jQuery(this).val();

                if (selectedValues && selectedValues.includes('5')) {
                    jQuery('[bp-field-name="sales_person_id"]').css('display', 'block');
                }else{
                    jQuery('[bp-field-name="sales_person_id"]').css('display', 'none');
                }
            });
        });
    </script>

@endpush