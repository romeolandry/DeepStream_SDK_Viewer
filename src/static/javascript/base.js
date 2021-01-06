'use strict'

document.addEventListener("DOMContentLoaded", () =>{

        
    const btnToggled = document.getElementById("button-toggle-id")
    const sideContent = document.getElementById("sidebare-id")
    const footerContent = document.getElementById("footer-content-id")

    // toggeled side bar menu with JQuery
    $("#button-toggle-id").click(function(){
        $('.sidebare').toggleClass('sidebare-hidden')
        $('.footer-content').toggleClass('footer-content-hidden')        
    });

    // hauptButton menue sidebare
    const btnSidebareHeader = document.getElementById("sidebare-btn-header-id")
    
    btnSidebareHeader.addEventListener('click', (event) =>{
        console.log("load home!")
    });

    // content button 
    const btnSidebareContents = document.getElementsByClassName("sidebare-btn")

    for (const btnSidebareContent in btnSidebareContents) {
        
    }



});
