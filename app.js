




let navCounter = 0;


const navBackground = document.getElementById("navBackground");

const hamburgerLines = document.getElementsByClassName("line");
const contentText = document.querySelector(".slide");

/*-----HIDDEN NavFunction*/


function navFunction (){
  
navCounter ++;

navBackground.classList.toggle("navClose");

/* Prevent scroll */

function disableScrolling(){
  var x=window.scrollX;
  var y=window.scrollY;
  window.onscroll=function(){window.scrollTo(x, y);};
}

disableScrolling();

function enableScrolling(){
  window.onscroll=function(){};
}

if(navCounter % 2 == 0){

  enableScrolling();
}

    
  

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
