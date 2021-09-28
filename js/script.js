'use strict'

const testimonialsBlocks = document.querySelectorAll('.testimonials_blocks');
const radio = document.getElementsByName('radio');

for(let l = 0; l < radio.length; l++){
   radio[l].addEventListener('click', () => {      
      for(let m = 0; m < radio.length; m++){
         testimonialsBlocks[m].classList.remove('active');
         testimonialsBlocks[l].classList.add('active');
      }
   }); 
}

const ourBlocksClick = document.querySelectorAll('.our_blocks-click');
const aboutBennetOne = document.querySelectorAll('.about_bennet_one');
const aboutBennetOneBlock = document.querySelector('.about_bennet_one_block');

for(let i = 0; i < ourBlocksClick.length; i++){
   ourBlocksClick[i].addEventListener('click', () => {         
        for(let J = 0; J < aboutBennetOne.length; J++){
           aboutBennetOne[J].classList.remove('active');  
           aboutBennetOne[i].classList.add('active'); 
        }
   });
}

const headerNavBurger = document.querySelector('.header_nav-burger');
const headerText = document.querySelectorAll('.header_text');
const headerNav = document.querySelector('.header_nav');

headerNavBurger.addEventListener('click', () => {
   for(let i = 0; i < headerText.length; i++){
      headerText[i].classList.toggle('header_textSize');
   }
   headerNavBurger.classList.toggle('header_nav-burgerForward');
   headerNav.classList.toggle('header_navBlock');
});

