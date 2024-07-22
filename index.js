const deco = document.querySelector(".deco");
const animationDeco = document.createElement("div");
const texteDeco = document.createElement("h2");
texteDeco.innerText="Hi!";
texteDeco.style.color="white";
texteDeco.style.fontSize="100px";

const animationHi = ()=>{
    animationDeco.style.display="block";
    animationDeco.appendChild(texteDeco);
    deco.appendChild(animationDeco);   
    
    
}
const animationNotHi = ()=>{
    animationDeco.style.display="none";
}
deco.addEventListener("mouseover",animationHi);
deco.addEventListener("mouseout", animationNotHi);


const cardImgContent = document.querySelector(".cardImg_content");
const cardImgTitle = document.querySelector(".cardImg_title");


const animationCardTitle = ()=>{
    cardImgTitle.style.display="none";
}
const animationCardTitleA = ()=>{
    cardImgTitle.style.display="flex";
}
cardImgContent.addEventListener("mouseover",animationCardTitle);
cardImgContent.addEventListener("mouseout",animationCardTitleA);