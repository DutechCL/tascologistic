function ajaxSapSync(event, endpoint, model) {

    $(event.target).addClass('btn-sync-disabled');

    const data = {
        _token: window.appConfig.csrfToken,
        model: `\\App\\Models\\${model}`,
        endpoint: endpoint,
    };

    $.ajax({
        url: window.appConfig.sapSyncRoute,
        type: 'POST',
        data: data,
        complete: function () {
            $(event.target).removeClass('btn-sync-disabled');
        },
        success: function(response) {
            console.log(response)
            // crud.table.ajax.reload()
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