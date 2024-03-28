function handelEvent(e){
    var spanInput  = document.getElementById("span");
    spanInput.innerText = e.keyCode;
    console.log(e);

    var keySpan = document.getElementById('keyName');
    keySpan.innerText = e.key;
}


document.addEventListener("keypress", handelEvent);
