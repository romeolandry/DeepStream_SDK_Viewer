'use strict'

document.addEventListener("DOMContentLoaded", () =>{

        
    const btnToggled = document.getElementById("button-toggle-id")
    const sideContent = document.getElementById("sidebare-id")
    const footerContent = document.getElementById("footer-content-id")

    $("#button-toggle-id").click(function(){
        $('.sidebare').toggleClass('sidebare-hidden')
        $('.footer-content').toggleClass('footer-content-hidden')        
    });

    btnToggled.addEventListener('click', (event) =>{
        // if (sideContent.classList.contains("showed")){

        //     sideContent.classList.remove("sidebare")
        //     sideContent.classList.add("sidebare-hidden")
        //     footerContent.classList.add("ml-0")
        //     sideContent.classList.remove("showed")
        // }
        // else{
        //     sideContent.classList.remove("sidebare-hidden")
        //     sideContent.classList.add("sidebare")
        //     footerContent.classList.remove("ml-0")
        //     sideContent.classList.add("showed")
        // }
                        
    });
});
