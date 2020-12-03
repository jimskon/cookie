// JavaScript for Pi Demo
// Jim Skon, Kenyon College, 2020



$(document).ready(function () {

    $("#cookie-btn").click(setCookie);
    var value=getCookie('myCookie')
    $('#cookieResult').append(value);
});




function processResults(results) {
    $('#piresults').empty();
    $('#piresults').append(results);
}

function clearResults() {
    $('#searchresults').empty();
}

function setCookie() {
  var value = $("#cookieValue").val();
  console.log("Set cookie to:"+value);
  document.cookie='myCookie='+value;
  $('#cookieResult').text(value);
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
