const debounce = function(func,wait,immediate) {
    let timeout;
    return function(...args) {
        const context = this;
        const later = function(){
            timeout = null;
            if(!immediate) func.apply(context,args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later,wait);
        if(callNow) func.apply(context,args);
    };
};
window.addEventListener("scroll",debounce(function(){
    var header  =   document.querySelector("header");
    header.classList.toggle("stiky",window.scrollY),200
}))
const target = document.querySelectorAll('[data-animacion]');
const animationclass = 'animate';
function animateCard(){
     const windowY = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(e ){
        if((windowY) > e.offsetTop){
            e.classList.add(animationclass);
        }else{
            e.classList.remove(animationclass);
        }
    })    
}
animateCard();
if( target.length ){
window.addEventListener('scroll', debounce(function(){
    animateCard();
},200));
}