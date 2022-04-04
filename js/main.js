$('.popular-category__slider').owlCarousel({
    loop:true,
    margin:17,
    navText:["<img src='img/main-prev.svg'>", "<img src='img/main-next.svg'>"],
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1.5
        },
        768:{
            items:2
        },
        992:{
            items:1.5
        },
        1200:{
            items:2
        },
        1600:{
            items:2.5
        },
        1700:{
            items:3
        }
    }
})

$('.popular-category-service__slider').owlCarousel({
    loop:false,
    margin:19,
    navText:["<img src='img/main-prev.svg'>", "<img src='img/main-next.svg'>"],
    nav:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        576:{
            items:1.5
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        },
        1600:{
            items:4
        },
        1700:{
            items:4
        }
    }
})



$('.vacancy__request_file .link').click(function(){
   $("#input-resume").trigger('click');
})

$("input[type='file']").change(function(){
   $('#val').text(this.value.replace(/C:\\fakepath\\/i, ''))
})



$('div.input-check').click(function(){
   $("#input-check").trigger('click');
   $('div.input-check').toggleClass('checked');
})

$('label.input-check').click(function(){
   $("#input-check").trigger('click');
   $('div.input-check').toggleClass('checked');
})


$('div.input-check-1').click(function(){
   $("#input-check-1").trigger('click');
   $('div.input-check-1').toggleClass('checked');
})

$('label.input-check-1').click(function(){
   $("#input-check-1").trigger('click');
   $('div.input-check-1').toggleClass('checked');
})


$('div.input-check-2').click(function(){
   $("#input-check-2").trigger('click');
   $('div.input-check-2').toggleClass('checked');
})

$('label.input-check-2').click(function(){
   $("#input-check-2").trigger('click');
   $('div.input-check-2').toggleClass('checked');
})


$('div.input-check-3').click(function(){
   $("#input-check-3").trigger('click');
   $('div.input-check-3').toggleClass('checked');
})

$('label.input-check-3').click(function(){
   $("#input-check-3").trigger('click');
   $('div.input-check-3').toggleClass('checked');
})


$('div.input-check-4').click(function(){
   $("#input-check-4").trigger('click');
   $('div.input-check-4').toggleClass('checked');
})

$('label.input-check-4').click(function(){
   $("#input-check-4").trigger('click');
   $('div.input-check-4').toggleClass('checked');
})


$('div.input-check-5').click(function(){
   $("#input-check-5").trigger('click');
   $('div.input-check-5').toggleClass('checked');
})

$('label.input-check-5').click(function(){
   $("#input-check-5").trigger('click');
   $('div.input-check-5').toggleClass('checked');
})


/* Бургерное меню */

const mobileMenu = document.querySelector('.mobile-menu__container');
const mobileMenuOverlay = document.querySelector('.mobile-menu__overlay');
const openBurgerBtn = document.querySelector('.header__burger');
const closeBurgerBtn = document.querySelector('.mobile-menu__close');

const closeMobileMenu = () => {
    mobileMenu.classList.remove('active');
    mobileMenuOverlay.classList.remove('active');
}

mobileMenuOverlay.addEventListener('click', closeMobileMenu);
closeBurgerBtn.addEventListener('click', closeMobileMenu);


openBurgerBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    mobileMenuOverlay.classList.add('active');
})

/* Главный слайдер */

const mainSlider = document.querySelectorAll('.main-slider-ellipse');
const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');
let activeDot = document.querySelector('.active-dot');
let allDot = document.querySelector('.all-dot');
let index = 0;



const activeSlide = n => {
    for(i = 0; i < mainSlider.length; i++) {
        mainSlider[i].classList.remove('active');
    }
    mainSlider[n].classList.add('active');
    activeDot.innerHTML = n + 1;
}

const slideNext = () => {
    if(index == mainSlider.length - 1) {
        index = 0;
        activeSlide(index);
    } else {
        index++;
        activeSlide(index);
    }
}

const slidePrev = () => {
if(index == 0) {
    index = mainSlider.length - 1;
    activeSlide(index);
    } else {
        index--;
        activeSlide(index);
    }
}



/* Пользовательское меню */

const userMenu = document.querySelector('.user-menu');
const btnUserMenu = document.querySelector('.header__input .user');

const userMenuMobile = document.querySelector('.user-menu.mobile');
const btnUserMenuMobile = document.querySelector('.header__input.mobile .user');

btnUserMenu.addEventListener('click', () => {
    userMenu.classList.toggle('active');
})

btnUserMenuMobile.addEventListener('click', () => {
    userMenuMobile.classList.toggle('active');
}) 


/* Оценка службы поддержки */

const appr = document.querySelector('.support__appraisal');
const stars = document.querySelectorAll('.support__appraisal_star');



const activeStar = (appraisal) => {
    for (let i = 0; i < stars.length; i += 1) {
        stars[i].classList.remove('active');
      }
    for(let i = 0; i < appraisal; i++) {
        stars[i].classList.add('active');
    }
}

appr.addEventListener('click', e => {
    console.log(e.target.dataset.appraisal);
    activeStar(e.target.dataset.appraisal);
})






