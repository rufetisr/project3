let btns = document.querySelectorAll(".btns button");
let btns2 = document.querySelectorAll(".btns2 button");

// event buttons 1
function removeColor() {
    btns.forEach(element => {
        element.classList.remove("btn-color");
    });
}

function addColor(ev) {

    removeColor();
    ev.target.classList.add("btn-color");
}

btns.forEach(element => {
   
    element.addEventListener("click",addColor
    );
    
});

// event buttons 2
function removeColor2() {
    btns2.forEach(element => {
        element.classList.remove("btn-color");
    });
}

function addColor2(ev) {    
    removeColor2();
    ev.target.classList.add("btn-color");
}

btns2.forEach(element => {   
    element.addEventListener("click",addColor2
    );
    
});
