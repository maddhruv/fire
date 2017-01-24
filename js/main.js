/*text in the app can be edited*/
$('.content').each(function(){
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

/*$("#trash").droppable({
  drop: function( event, ui ) {
    $(this)
      .removeClass("fa-trash-o")
      .addClass("fa-trash");
  }
});*/
