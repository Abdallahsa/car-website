/*=============== SHOW MENU ===============*/


/*=============== REMOVE MENU MOBILE ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/
var audio = document.getElementById("audio");
        
function playAudio() {
  audio.play();
}

function pauseAudio() {
  audio.pause();
}
function scrollHeader(){
  const nav = document.getElementById('header')
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if(this.scrollY >= 50) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')

}

/*=============== POPULAR SWIPER ===============*/

let swiperpopular = new Swiper(".popular__container",{
    loop: true,
    spaceBetween: 24,
    grabCursor: true,
    slidesperview:'auto',

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
    breakpoints: {
       
        768: {
          slidesPerView: 3,
        },
        1024: {
          spaceBetween:48,
        },
      },
  });
  
/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup(".featured__content", {
  selectors: {
      target: '.featured__card'
  },
  animation: {
      duration: 300
  }
});

/* Link active featured */ 
const linkFeatured =document.querySelectorAll('.featured__item')

function activeFeatured(){
  linkFeatured.forEach(L=>L.classList.remove('active-featured'))
  this.classList.add('active-featured')
}

linkFeatured.forEach(L=>L.addEventListener('click',activeFeatured))

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
