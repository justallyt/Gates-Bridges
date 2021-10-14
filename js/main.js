//Navigation bar
let hambugerBtn = document.querySelector(".navTrigger");
let navBar = document.querySelector(".secondary-header nav");
let mainHeader = document.querySelector("header");
let topBar = document.querySelector(".top-bar");
let secondaryHeader = document.querySelector(".secondary-header");
let landingContainer = document.querySelector("#landing");

hambugerBtn.addEventListener("click", ()=>{
     hambugerBtn.classList.toggle("active");
     navBar.classList.toggle("show");
});

window.addEventListener("scroll", (e)=>{
    e.preventDefault();
    if(window.scrollY > 250){
        mainHeader.classList.add("hide")
        topBar.classList.add("hide");
        secondaryHeader.classList.add("show");
     
    }else{
     mainHeader.classList.remove("hide")
     topBar.classList.remove("hide");
     secondaryHeader.classList.remove("show");
    }
 });
window.addEventListener('resize', (e)=>{
    e.preventDefault();
    if(window.innerWidth < 850){
        mainHeader.style.display = "none";
        topBar.style.display = "none";
        secondaryHeader.classList.add("show");
        landingContainer.style.marginTop = "90px";
        window.addEventListener("scroll", ()=>{
            if(window.scrollY < 250){
                secondaryHeader.classList.add("show");
            }
        });
     
    }else{
     mainHeader.style.display = "flex";
     topBar.style.display = "block";
     secondaryHeader.classList.remove("show");
     landingContainer.style.marginTop = "0px";
     window.addEventListener("scroll", ()=>{
        if(window.scrollY < 250){
            secondaryHeader.classList.remove("show");
        }
    });
    }
});
if(window.innerWidth < 850){
    mainHeader.style.display = "none";
    topBar.style.display = "none";
    secondaryHeader.classList.add("show");
    landingContainer.style.marginTop = "90px";
    window.addEventListener("scroll", ()=>{
        if(window.scrollY < 250){
            secondaryHeader.classList.add("show");
        }
    });
 
}else{
 mainHeader.style.display = "flex";
 topBar.style.display = "block";
 secondaryHeader.classList.remove("show");
 landingContainer.style.marginTop = "0px";
 window.addEventListener("scroll", ()=>{
    if(window.scrollY < 250){
        secondaryHeader.classList.remove("show");
    }
});
}

//Implementing the slider
let slides = document.querySelectorAll(".landing-slide");
let current = 0;

let showSlide = ()=>{
    for(let i = 0; i < slides.length; i++){
          slides[i].style.display =  "none";
    }
    
    current++;
    if(current > slides.length){
          current = 1;
    }
    
    slides[current-1].style.display = "flex";

    setTimeout(showSlide,10000);
}
showSlide();

let accordions = document.querySelectorAll(".question");
accordions.forEach((touch)=>{
      touch.addEventListener("click",()=>{
        let current = document.querySelector(".question.activator");
        if(current && current !== touch){
              current.classList.toggle("activator");
              current.nextElementSibling.style.maxHeight = 0;
        }
            touch.classList.toggle("activator");
        let answerBody = touch.nextElementSibling;
        if(touch.classList.contains("activator")){
              answerBody.style.maxHeight = answerBody.scrollHeight + "px";
        }
        else{
              answerBody.style.maxHeight = 0;
        }
      });
});

function moveClass(){
    let menuLinks= document.querySelectorAll(".main-nav li");
    
    for(let i = 0; i < menuLinks.length; i++){
        menuLinks[i].onclick = function(){
            let prevActive = document.querySelector(".current");
            prevActive !== null && prevActive.classList.remove("current");
 
            this.classList.add("current");

        }
    
    }
 }
 moveClass();

 window.addEventListener("scroll",function(){
    let sections = ['home','about','services','resources','faqs','contact'];

    let scrollBarLocation = window.scrollY;
    let list = document.querySelectorAll(".main-nav li");
    
    let about= document.getElementById(sections[1]).offsetTop - 200;
    let services = document.getElementById(sections[2]).offsetTop - 200;
    let resources= document.getElementById(sections[3]).offsetTop - 200;
    let faqs = document.getElementById(sections[4]).offsetTop - 200;
    let contact = document.getElementById(sections[5]).offsetTop - 200;

    for(let i = 0; i < list.length; i++){
       if(scrollBarLocation < about){
           list[0].classList.add("current");
       }else{
           list[0].classList.remove("current");
       }
       if(scrollBarLocation > about && scrollBarLocation <= services){
           list[1].classList.add("current");
       }
       else{
           list[1].classList.remove("current");
       }
       if(scrollBarLocation > services && scrollBarLocation <= resources){
           list[2].classList.add("current");
       }else{
           list[2].classList.remove("current");
       }
       if(scrollBarLocation > resources && scrollBarLocation < faqs){
           list[3].classList.add("current");
       }else{
           list[3].classList.remove("current");
       }
       if(scrollBarLocation > faqs && scrollBarLocation < contact){
        list[4].classList.add("current");
       }else{
        list[4].classList.remove("current");
       }   
       if(scrollBarLocation > contact){
           list[5].classList.add("current");
       }else{
           list[5].classList.remove("current");
       }
    }
    
   });
//small jquery for scrolling
$(document).ready(function(){
    $('a').on("click", function(e){
        if (this.hash !== ''){
           e.preventDefault();
          
          let hash = this.hash;
          
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800, function(){
               window.location.hash = hash;
          });
        } 
  });
});