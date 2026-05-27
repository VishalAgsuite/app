window.onload = function () {
    ZOHODESK.extension.onload().then(function (App) {

        ZOHODESK.get('ticketForm.subject').then(data => {
            if (data['ticketForm.subject'] === null) {
                $("#onPage").text('addpage');
            } else {
                $("#onPage").text('editpage');
            }
        });

        ZOHODESK.get("department.id").then(function (response) {
            $("#currentDepartmentID").text(response['department.id']);
        }).catch(function (err) {
            console.log(err);
        });

    });
};