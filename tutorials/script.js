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