let main = document.querySelector(".main");
let txt = document.querySelector("#text");
let gen = document.querySelector("#generate");

gen.addEventListener("click",() =>{
    let bg = "#" + Math.ceil(Math.random()*16777215).toString(16);
    console.log(bg);
    txt.innerText = bg;
    main.style.backgroundColor = bg;
});