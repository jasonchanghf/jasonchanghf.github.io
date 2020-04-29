const scroll_to = document.querySelector('.scroll_to')

console.log(scroll_to)
setTimeout(function(){ scroll_to.scrollIntoView({block: 'center', behavior:"smooth"});
}, 250);

const carouselSlide = document.querySelector('.carousel-slide');
const title=document.querySelector('title');


const carouselImages = document.querySelectorAll('.carousel-slide .box');
//Buttons
const previousBtn = document.querySelector('#previousBtn');
const nextBtn = document.querySelector('#nextBtn');
//Counter
let counter = 1;


let rect = carouselSlide.getBoundingClientRect();

let size;
if (rect.width) {
    // `width` is available for IE9+
    size = rect.width;
} else {
    // Calculate width for IE8 and below
    size = rect.right - rect.left;
}



carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.2s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

previousBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.2s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});


carouselSlide.addEventListener('transitionend', () => {
    console.log(counter)
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - 2;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = 'none';
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

    }
});




console.log('hi there why are you even reading this!XD')


const footer=document.querySelector('.footer')
console.log(footer)
footer.innerHTML = "<div style='width:100%; height:80%'></div><a href='./music.html'><div style='width:100%; height:20%'></div></a>"