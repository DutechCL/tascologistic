function ajaxSapSync(event, type) {

    $(event.target).addClass('btn-sync-disabled');

    const data = {
        _token: window.appConfig.csrfToken,
        case: type,
    };

    $.ajax({
        url: window.appConfig.sapSyncRoute,
        type: 'POST',
        data: data,
        complete: function () {
            $(event.target).removeClass('btn-sync-disabled');
        },
        success: function(response) {
            crud.table.ajax.reload()
            new Noty({
                text: response.message,
                type: 'success',
                timer: 4000,
            }).show();
        },
        error: function(error) {
            new Noty({
                text: error.responseJSON.message,
                type: 'error',
                timer: 4000,
            }).show();
        }
    });
}