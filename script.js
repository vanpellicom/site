let menuKnop = document.querySelector(".menu");
let navMenu = document.querySelector("nav");
let mainGedeelte = document.querySelector("main");
function verbergMenu() {
	navMenu.classList.add("onzichtbaar");
}
mainGedeelte.addEventListener("click",verbergMenu);
function toonMenu() {
	navMenu.classList.remove("onzichtbaar");
}
menuKnop.addEventListener("click",toonMenu);


let darkLink = document.querySelectorAll("nav a")[1];
let lightLink = document.querySelectorAll("nav a")[0];
let mijnBody = document.querySelector("body");
function switchToDark() {
	mijnBody.classList.add("dark");
}
function switchToLight() {
	mijnBody.classList.remove("dark");
}
lightLink.addEventListener("click",switchToLight);
darkLink.addEventListener("click",switchToDark);
