// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var totalEl = document.querySelector("#total");
var button = document.querySelectorAll("saveBtn");

$( "time" ).wrap( "<div class='pastBox'></div>" );

var today = dayjs();
$('#3a').text(today.format('MMM D, YYYY'));


// save function
var saveBtns = document.querySelectorAll('.saveBtn');
saveBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    var userText = btn.previousElementSibling.value.trim();
    var time = btn.parentElement.id;
    localStorage.setItem(time,userText)
  });
for (let i = 9; i < 17; i++) {
  var userText = localStorage.getItem('hour-$[i]');
    if (userText){
      document.querySelector(``);
    }
}});

