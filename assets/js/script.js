// let btn = document.querySelector(".btn")
// let close1 = document.querySelector(".close")
// let sidebar = document.querySelector(".sidebar")


// btn.onclick = function() {
//     sidebar.style.width = "300px";
// }

// close1.onclick = function() {
//     sidebar.style.width = "0px"
// }


// let a = document.querySelector("a[href]");

// let attrValue = a.getAttribute("href");


// let btn = document.querySelector(".yt")

// btn.onclick = function() {
//     a.innerHTML = "Youtube"

//     a.setAttribute("href", "https://www.youtube.com")

//     a.setAttribute("class", "social")
// }

// console.log(attrValue);


// let buttons = document.querySelectorAll(".btn")
// let lastbox;

// buttons.forEach(btn => {
//     btn.onclick = function() {

//         // let boxes = document.querySelectorAll(".box")
//         // boxes.forEach(b => {
//         //     b.style.backgroundColor = "transparent"
//         // })



//         lastbox ? lastbox.style.backgroundColor = "transparent" : null;

//         // lastbox.style.backgroundColor = "transparent";

//         let colorId = btn.getAttribute("data-id")

//         let box = document.getElementById(colorId);

//         lastbox = box;
//         box.style.backgroundColor = colorId;
//     }
// })


let box = document.querySelector(".box")
let btn = document.querySelector(".btn")


//Event object
// window.onscroll = function(e) {
//     console.log(window.scrollY);
// }

// btn.onclick = function(e) {
//     console.log("this is the first");
// }


// btn.onclick = function(e) {
//     console.log("third");
// }

// btn.ondblclick = function(e) {
//     console.log("dbl");
// }

// btn.onmouseover = function(e){

// }

// btn.addEventListener("click", () => {
//     console.log("this is the first ");
// })

// btn.addEventListener("click", () => {
//     console.log("this is the second ");
// })

// btn.addEventListener("click", () => {
//     console.log("this is the third ");
// })

// btn.addEventListener("contextmenu", () => {
//     console.log("menu");
// })

let body = document.querySelector("body")

// window.oncontextmenu = function(e) {
//     e.preventDefault();

//     let element = document.createElement("div");

//     element.style.width = "100px"
//     element.style.height = "150px"
//     element.style.backgroundColor = "blue"
//     element.style.position = "absolute"
//     element.style.top = `${e.clientY}px`
//     element.style.left = `${e.clientX}px`

//     body.append(element);

// }

// body.oncopy = function(e) {
//     e.preventDefault();
//     alert("you cannot copy any text in this website")
// }


let input = document.querySelector(".input")

input.onkeypress = function(e) {
    if (e.keyCode == 13) {
        window.location.href = "https://www.shazam.com"
    }
}




// window.onclick = function(e) {
//     console.log(e);
// }