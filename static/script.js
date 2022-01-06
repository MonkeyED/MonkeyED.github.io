// function showMoreTutorials() {
//   tutorials = document.getElementById("moretut");
//   tutorials.innerHtml = "<p>Unfortunately, this website is still under development and we currently only have the listed four languages.</p>";
//   togglemore = document.getElementById("togglebutton");
//   togglemore.innerHtml = '<button onClick="showLessTutorials()" id="togglebutton">Show Less Programming Languages</button>';
// }

// function showLessTutorials() {
//   tutorials = document.getElementById("moretut");
//   tutorials.innerHtml = "<p></p>";
//   togglemore = document.getElementById("togglebutton");
//   togglemore.innerHtml = '<button onClick="showMoreTutorials()" id="togglebutton">Show More Programming Languages</button>';
// }

function lowerUrl() {
	if(window.location.href != window.location.href.toLowerCase()){
		window.location.href = window.location.href.toLowerCase();
	}
}

// Convert Requested URL To Lowercase, Doesn't Work For Replit Though As It Has Its Own 404 Page
window.addEventListener('load', (event) => {
  lowerUrl()
});



var acc = document.getElementsByClassName("accordiontrans");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activeactrans");
		document.getElementById("seemore").innerText = "See Less... 💻";
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
			document.getElementById("seemore").innerText = "See More... 💻"
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

// Get the modal
var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close-modal")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function() {
  
// }

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}