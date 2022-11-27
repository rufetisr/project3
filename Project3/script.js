let a = document.querySelectorAll("a");
a.forEach(element => {
    element.addEventListener("click", (event) => {
        event.preventDefault();
    })
});


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
let lbl1 = document.getElementById("lbl1");
let lbl2 = document.getElementById("lbl2");

request(base, rate);


async function request(base, rate) {
    let url = `https://api.exchangerate.host/latest?base=${base}&symbols=${rate}`
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    lbl1.innerHTML = `1 ${base} = ${data.rates[`${rate}`]} ${rate}`

    let url1 = `https://api.exchangerate.host/latest?base=${rate}&symbols=${base}`
    let res1 = await fetch(url1);
    let data1 = await res1.json();
    lbl2.innerHTML = `1 ${rate} = ${data1.rates[`${base}`]} ${base}`

    Convert(data, rate);
}



function Convert(data, rate) {
    // console.log(data);
    // let lbl1 = document.getElementById("lbl1");
    let input2 = document.querySelector(".rate");
    let value = data.rates[`${rate}`]
    console.log(value);
    let result = 0;
    let input1 = document.querySelector(".base");
    result = Number(input1.value) * Number(value);
    input2.value = result;
    let input = document.querySelector(".base");
    input.addEventListener("keyup", () => {
        let input1 = document.querySelector(".base");
        console.log(input1.innerHTML);
        result = Number(input1.value) * Number(value);
        console.log(result);
        input2.value = result;
    })
}