function getClock() {
//convert to 12, missing 0
  var today = new Date();
  today = today.toLocaleTimeString();
  $('#clock').html(today);
  var t = setTimeout(getClock, 1000);
}

function searchOnEnter(){
  if (event.keyCode == 13 || event.which == 13) {
    location='https://duckduckgo.com/?q=' + encodeURIComponent(document.getElementById('textbox').value);
    document.getElementById('textbox').value = '';
  }
}

$(document).ready(function(){
  getClock();

  $(".category").click(function() {
    $category = $(this);
    $content = $category.next();
    $content.slideToggle(300);
  });
});
