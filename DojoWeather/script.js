
function removeCookie() {
    var contentMain2 = document.querySelector(".contentMain2");
    contentMain2.remove();
    console.log(contentMain2);
}

function idOptions(element) {
var hightemp1 = document.querySelector(".hightemp1");
var hightemp2 = document.querySelector(".hightemp2");
var hightemp3 = document.querySelector(".hightemp3");
var hightemp4 = document.querySelector(".hightemp4");
var lowtemp1 = document.querySelector(".lowtemp1");
var lowtemp2 = document.querySelector(".lowtemp2");
var lowtemp3 = document.querySelector(".lowtemp3");
var lowtemp4 = document.querySelector(".lowtemp4");
    for (var i = 0; i < element.options.length; i++) { 
    var option = element.options[i];
    if (option.selected) {
        if(option.value === "C"){
            lowtemp1.innerHTML = "18&#176";
            lowtemp2.innerHTML = "19&#176";
            lowtemp3.innerHTML = "16&#176";
            lowtemp4.innerHTML = "17&#176";
            hightemp1.innerHTML = "24&#176";
            hightemp2.innerHTML = "27&#176";
            hightemp3.innerHTML = "23&#176";
            hightemp4.innerHTML = "25&#176";
        }
        else {
            lowtemp1.innerHTML = "64&#176";
            lowtemp2.innerHTML = "66&#176";
            lowtemp3.innerHTML = "61&#176";
            lowtemp4.innerHTML = "63&#176";
            hightemp1.innerHTML = "75&#176";
            hightemp2.innerHTML = "81&#176";
            hightemp3.innerHTML = "73&#176";
            hightemp4.innerHTML = "77&#176";
        }
    } 
    }  
} 