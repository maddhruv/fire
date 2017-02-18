/* UI */
/*text in the app can be edited*/
$('.content').each(function() {
    this.contentEditable = true;
});

/*app and icons draggable*/
$(".app").draggable({
    handle: ".top",
    scroll: false
});

$(".files").draggable({
    scroll: false,
    cancel: false
});

/*file save*/
$("#download").click(function() {
    content = $("#codeeditor").text();
    filename = $("#filename").val();
    blob = new Blob([content], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(blob, filename);
});
