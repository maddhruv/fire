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

function loader() {
    //$("#boot-screen").hide();
    //$("#mainDesktop").show();
}

/*$("#trash").droppable({
  drop: function( event, ui ) {
    $(this)
      .removeClass("fa-trash-o")
      .addClass("fa-trash");
  }
});*/

/*file save*/
$("#download").click(function() {
    content = $("#fileContent").text();
    filename = $("#filename").val();
    blob = new Blob([content], {
        type: "text/plain;charset=utf-8"
    });
    saveAs(blob, filename);
});
