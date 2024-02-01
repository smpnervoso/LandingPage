const accordions = document.querySelectorAll ('.accordion');

accordions.forEach(accordion => {
    accordion.addEventListener ('click', () =>{
        const body = accordion.querySelector ('.accordion-more');
        body.classList.toggle('active');
    })
})


window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 0)
})