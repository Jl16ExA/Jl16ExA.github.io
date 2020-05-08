

var Message = document.getElementById("GenderTXT").innerHTML;

function show_men() {
    var img = document.createElement("img");
    img.src = "https://i.pinimg.com/736x/c4/97/63/c49763b3a3ad042a429520c03703d67e.jpg";
    // This next line will just add it to the <body> tag
    document.body.appendChild(img);
}

function show_women() {
    var img = document.createElement("img");
    img.src = "https://i.pinimg.com/564x/e3/4a/a9/e34aa9f77c34b668d214d9ee76115735.jpg";
    document.body.appendChild(img);
}

function men(){
     Message = "Nice Style";  
     show_men()   
}

function women(){
    Message = "Nice Style";
    show_women()      
}