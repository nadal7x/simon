const red = document.querySelector(".color-red");
const blue = document.querySelector(".color-blue");
const green = document.querySelector(".color-green");
const yellow = document.querySelector(".color-yellow");
const startbutton = document.querySelector(".start");
const text = document.querySelector(".text p");
let simon = [];
let user = [];

 /// click en cada color ///
red.onclick = function(){
    activered();
    user.push(1);
    check();
};
blue.onclick = function(){
    activeblue();
    user.push(2);
    check();
};
green.onclick = function(){
    activegreen();
    user.push(3);
    check();
};
yellow.onclick = function(){
    activeyellow();
    user.push(4);
    check();
};


function activered(){
    red.classList.add("active");
    setTimeout(function(){
        red.classList.remove("active");  
    }, 500);
}
function activeblue(){
    blue.classList.add("active");
    setTimeout(function(){
        blue.classList.remove("active");  
    }, 500);
}
function activegreen(){
    green.classList.add("active");
    setTimeout(function(){
        green.classList.remove("active");  
    }, 500);
}
function activeyellow(){
    yellow.classList.add("active");
    setTimeout(function(){
        yellow.classList.remove("active");  
    }, 500);
}

/// empezar ///
startbutton.addEventListener("click", start);
function start(){
    let num = Math.floor(Math.random() * (5 - 1)) + 1;
    simon.push(num);
    for(i=0; simon.length>i; i++){
        if (simon[i] == 1){
            setTimeout(activered, (i*1000));
        }
        if (simon[i] == 2){
            setTimeout(activeblue, (i*1000));
        }
        if (simon[i] == 3){
            setTimeout(activegreen, (i*1000));
        }
        if (simon[i] == 4){
            setTimeout(activeyellow, (i*1000));
        }      
    }
    user = [];
    text.innerHTML ="Suerte!";
}

/// comprobar si es correcto ///

function check(){
    for(i=0; user.length>i; i++){
        if(user[i] != simon[i]){
            text.innerHTML ="Fallaste! vuelve a empezar";
            user = [];
            simon = [];
        }
        if(user.length == simon.length){
            text.innerHTML ="Bien! prueba un nivel mas!";
            setTimeout(start, (2000));
            break;
        }
    }
}
