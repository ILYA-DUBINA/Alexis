"use strict";const testimonialsBlocks=document.querySelectorAll(".testimonials_blocks"),radio=document.getElementsByName("radio");for(let e=0;e<radio.length;e++)radio[e].addEventListener("click",(()=>{for(let t=0;t<radio.length;t++)testimonialsBlocks[t].classList.remove("active"),testimonialsBlocks[e].classList.add("active")}));const ourBlocksClick=document.querySelectorAll(".our_blocks-click"),aboutBennetOne=document.querySelectorAll(".about_bennet_one"),aboutBennetOneBlock=document.querySelector(".about_bennet_one_block");for(let e=0;e<ourBlocksClick.length;e++)ourBlocksClick[e].addEventListener("click",(()=>{for(let t=0;t<aboutBennetOne.length;t++)aboutBennetOne[t].classList.remove("active"),aboutBennetOne[e].classList.add("active")}));const headerNavBurger=document.querySelector(".header_nav-burger"),headerText=document.querySelectorAll(".header_text"),headerNav=document.querySelector(".header_nav");headerNavBurger.addEventListener("click",(()=>{for(let e=0;e<headerText.length;e++)headerText[e].classList.toggle("header_textSize");headerNavBurger.classList.toggle("header_nav-burgerForward"),headerNav.classList.toggle("header_navBlock")}));