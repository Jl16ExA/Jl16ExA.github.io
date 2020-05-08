
let Message = document.getElementById("GenderTXT").innerHTML;

function men(){
     document.getElementById("GenderTXT").innerHTML = "Nice Style Boy!";  
     document.getElementById("imgMen").style.visibility="visible";
}

function women(){
    document.getElementById("GenderTXT").innerHTML = "Nice Style Girl!"; 
    document.getElementById("imgWomen").style.visibility="visible";
}
   
function menquit(){
    document.getElementById("GenderTXT").innerHTML = "Nice Style Boy!";  
    document.getElementById("imgMen").style.visibility="hidden";
}

function womenquit(){
   document.getElementById("GenderTXT").innerHTML = "Nice Style Girl!"; 
   document.getElementById("imgWomen").style.visibility="hidden";
}
  
