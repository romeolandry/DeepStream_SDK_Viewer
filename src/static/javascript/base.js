'use strict'

document.addEventListener("DOMContentLoaded", () => {

    // toggeled side bar menu with JQuery
    $("#button-toggle-id").click(function () {
        $('.viewer-grid-content').toggleClass('viewer-grid-content-slided')
        $('.sidebare').toggleClass('sidebare-hidden')
    });

    // content of sidebar
    const sideContentItems = document.getElementsByClassName("side-items")
    const sideBtnItems = document.querySelectorAll('.side-items .sidebare-btn-content .sidebare-btn-item')
      

    for (const sideContentItem of sideContentItems) {

        // make all header clickable
        const itemHeader = sideContentItem.querySelector('.sidebare-btn-header')
        const itemContent = sideContentItem.querySelector('.sidebare-btn-content')
        const itemChevron = itemHeader.childNodes[5]
        // add effek after click event on Header 
        itemHeader.addEventListener('click', (event) =>{
            // check if toggled 
            if (itemHeader.classList.contains('toggled')){
                // mask this sidebare-btn-content
                itemHeader.classList.remove('toggled')
                itemContent.classList.add('d-none')

                // replace chevron up to down                
                itemChevron.classList.remove('fa-chevron-up')
                itemChevron.classList.add('fa-chevron-down')               

            }
            else{
                // show this sidebare-btn-content 
                itemHeader.classList.add('toggled')
                itemContent.classList.remove('d-none')

                // replace chevron down to up
                itemChevron.classList.remove('fa-chevron-dow')
                itemChevron.classList.add('fa-chevron-up')
            }
        })
    }
});
