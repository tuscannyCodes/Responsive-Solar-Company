



const navBackground = document.getElementById("navBackground");

const hamburgerLines = document.getElementsByClassName("line");
const contentText = document.querySelector(".slide");

/*-----HIDDEN NavFunction*/


function navFunction (){
  


navBackground.classList.toggle("navClose");

scroll

    
  

   /* if (document.getElementById("navBackground").style.marginLeft="0em") {

        document.getElementById("navBackground").style.marginLeft="30em";
    };*/
  /*const hamburger = document.getElementsByClassName("hamburger");


  hamburger.classlist.toggle("navClose");*/
  
}





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




