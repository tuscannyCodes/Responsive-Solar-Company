


const hamburger = document.getElementsByClassName("hamburger");

const navBackground = document.getElementById("navBackground");

const hamburgerLines = document.getElementsByClassName("line");
const contentText = document.querySelector(".slide");










//Sliding Text Functionality 
window.addEventListener("scroll",easeContent);

easeContent();

function easeContent(){
const bottomOfPage = window.innerHeight * 0.9;


    const topOfContent= contentText.getBoundingClientRect().top
    if(topOfContent> bottomOfPage){

       contentText.classList.remove("appear")
    }else{

        contentText.classList.add("appear")
    }
}



