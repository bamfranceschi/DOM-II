// Your code goes here

//stop nav code

const stopNav = document.querySelector('nav');

stopNav.addEventListener('click', (event) =>{
    event.preventDefault();
})



// mouseover code

const navScale = document.querySelector('nav');

navScale.addEventListener("mouseover", () => {
    navScale.style.transform ="scale(1.5)";
    navScale.style.transition ="all 0.4s";
})

navScale.addEventListener("mouseleave", () => {
    navScale.style.transform = "scale(1)";
    navScale.style.transition = "all 0.4s";
})


//keydown code

const shipsRock = document.querySelector("header > img");
// console.log(shipsRock);

//keydown needs to be applied to document, specific elements won't be able to register this event.

document.addEventListener('keydown', () => {
    shipsRock.src="img/shipsRock.jpg";
})



//wheel code

const bodyColorChange = document.querySelector('body');

window.addEventListener("wheel", () => {
    bodyColorChange.style.backgroundColor = "#4682B4";
})


//load code

window.addEventListener('load', () => {
    const banner = document.createElement('div');
    banner.textContent = "I've finished loading your webpage, Cap'n!";
    banner.style.color ="rebeccapurple";
    banner.style.fontSize = "2rem";
    banner.style.textAlign = "center";
    banner.style.lineHeight = "4rem";
    bodyColorChange.prepend(banner);
})


//focus code

const contactFocus = document.querySelector('nav :last-child');
// console.log(contactFocus);

contactFocus.addEventListener("focus", () => {
    contactFocus.style.color = "#FF6347";
})

//resize code

const bigFunBus = document.querySelector('.logo-heading');

window.addEventListener("resize", () => {
    bigFunBus.style.color = "#FF6347";
    bigFunBus.style.fontSize = "8rem";
})


//select code

const highlightTitle = document.querySelector('.intro > h2');
// console.log(highlightTitle);

highlightTitle.addEventListener("select", () => {
    highlightTitle.style.color = "#FF6347";
})

//dblclick code

const destinationImg = document.querySelector('.content-destination > img');
// console.log(destinationImg);

destinationImg.addEventListener('dblclick', () => {
    destinationImg.src="img/goldenpuppies.jpg";
})

//click code

const footerChange = document.querySelector("footer");
// console.log(footerChange);

footerChange.addEventListener("click", () =>{
    footerChange.style.backgroundColor = "#FF6347";
})

//contextmenu code

const rightClick = document.querySelector('.mapImg');
// console.log(rightClick);

rightClick.addEventListener('contextmenu', () => {
    rightClick.src="img/bluepuppy.jpeg";
})


//propagation code

const contentPickColor = document.querySelector('.content-pick');

contentPickColor.addEventListener('click', () => {
    contentPickColor.style.backgroundColor = "#FF6347";
})

const middleBtnColor = document.querySelector(".content-pick :nth-child(2) > .btn");
console.log(middleBtnColor);

middleBtnColor.addEventListener('click', (event) => {
    middleBtnColor.style.backgroundColor = "#32CD32";
    event.stopPropagation();
})
