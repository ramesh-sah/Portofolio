// custom cursor
const root = document.querySelector('html')

// Real cursor element
const cursor = document.createElement('div')
cursor.classList.add('cursor')
root.appendChild(cursor)

// Following extra cursor element
const follower = document.createElement('div')
follower.classList.add('cursor', 'cursor__follower')
root.appendChild(follower)


root.addEventListener('mousemove', (e) => {
  setPosition(follower, e)
  setPosition(cursor, e)
})

function setPosition(element, e) {
  element.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`
}

// toggle icon navbar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

//scroll section
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active section for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else{
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    //animation footer on scroll
    let footer=document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);

} 

//read more sections 
let read_more=document.getElementById("read-more-btn");
let read_more_popup=document.querySelector(".read-more-popup");
let popup_animate=document.querySelector('.popup-animate');
let close_btn=document.getElementById("close-icon");

read_more.addEventListener("click",()=>{
    read_more_popup.classList.add('popup')
    //popup_animate.classList.add('popup');

});

close_btn.addEventListener("click",()=>{

    read_more_popup.classList.remove('popup');
    //popup_animate.classList.remove('popup');
});

// disable right click
document.addEventListener("contextmenu", function (e){
    e.preventDefault();
}, false);

