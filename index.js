let navChange=document.querySelector(".icon-img");
navChange.addEventListener('click',()=>{
    document.querySelector(".test").style.display="block";
    document.querySelector(".desktop-view").style.filter="brightness(30%)"
    document.body.style.backgroundColor="#807e89"
})

let navClose=document.querySelector(".close-icon");
navClose.addEventListener('click',()=>{
    document.querySelector(".test").style.display="none";
    document.querySelector(".desktop-view").style.filter="brightness(100%)"
    document.body.style.backgroundColor="hsl(36, 100%, 99%)"
})