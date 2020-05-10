let Message = document.getElementById("GenderTXT").innerHTML;

function men() {
  document.getElementById("GenderTXT").innerHTML = "NICE STYLE MAN";
  document.getElementById("imgMen").style.visibility = "visible";
}

function women() {
  document.getElementById("GenderTXT").innerHTML = "NICE STYLE GIRL";
  document.getElementById("imgWomen").style.visibility = "visible";
}

function menquit() {
  document.getElementById("imgMen").style.visibility = "hidden";
}

function womenquit() {
  document.getElementById("imgWomen").style.visibility = "hidden";
}
