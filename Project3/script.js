let btns = document.querySelectorAll(".btns button");
let btns2 = document.querySelectorAll(".btns2 button");
let base = "";
let rate = "";

// event buttons 1
function removeColor() {
    btns.forEach(element => {
        element.classList.remove("btn-color");
    });
}

function addColor(ev) {
    removeColor();
    ev.target.classList.add("btn-color");
    base = ev.target.innerHTML;
    console.log(base);
    request(base, rate);
}

btns.forEach(element => {
    element.addEventListener("click", addColor
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
    rate = ev.target.innerHTML;
    console.log(rate);
    request(base, rate)
}

btns2.forEach(element => {
    element.addEventListener("click", addColor2
    );
});

// default option1
let defBtn = document.querySelector(".btns button:first-child");
// console.log(defBtn.innerHTML);
defBtn.classList.add("btn-color");
base = defBtn.innerHTML;
console.log(base);


// default option2
let defBtn2 = document.querySelector(".btns2 button:nth-child(2)");
defBtn2.classList.add("btn-color");
defBtn2.classList.add("btn-color");
rate = defBtn2.innerHTML;
console.log(rate);
////
let lbl = document.querySelector("label");


// async function getData() {

// }
async function request(base, rate) {
    let url = `https://api.exchangerate.host/latest?base=${base}&symbols=${rate}`
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    rate = data.rates;
    console.log(rate.value);
    lbl.innerHTML = `1 ${base} = ${data.rates}`
}

request(base, rate)