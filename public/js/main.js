$(function () {
  var editor = new MediumEditor('.editable');
  var editor2 = new MediumEditor('.editable2');
  $('.editable').mediumInsert({
      editor: editor
  });
  $('.editable2').mediumInsert({
      editor: editor2
  });
  $( ".checkContent" ).click( function( event ) {
    event.preventDefault();
    var content = editor.serialize();
    var content2 = editor2.serialize();
    console.log(content);
    console.log(content2);
  } );
});
