let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// function toggleVisibility(){
//     var para = document.getElementById("show");
//     para.style.display = (para.style.display === "none") ? "block" : "none";
//     var readline = document.getElementById("read");
//     readline.style.display = (para.style.display === "block") ? "none" : "inline-block";
// }

// ScrollReveal({
//     // reset:true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200
// });

// ScrollReveal().reveal('.home-content, .heading', {origin:'top'});
// ScrollReveal().reveal('.home-img, .hobby-container, .portfolio-box, .contac-form', {origin:'bottom'});
// ScrollReveal().reveal('.home-content h1, .about-img', {origin:'left'});
// ScrollReveal().reveal('.home-content p, .about-content', {origin:'right'});

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer!', 'Php Developer!'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

// function toggleVisibility(){
//     var content = document.getElementById("content");
//     var read = document.getElementById("read");
//     var show = document.getElementById("show");

//     if(content.style.display === "none"){
//         content.style.display = "inline";
//         read.innerHTML = "Read More";
//         show.style.display = "none";
//     }
//     else{
//         content.style.display = "none";
//         read.innerHTML = "Read Less";
//         show.style.display = "inline";
//     }
// }

function toggle(hobby){

let dots = document.querySelector(`.hobby-box[data-hobby="${hobby}"] #dots`);
let more = document.querySelector(`.hobby-box[data-hobby="${hobby}"] #more`);
let read = document.querySelector(`.hobby-box[data-hobby="${hobby}"] #read`);

    if(dots.style.display === "none"){
        dots.style.display = "inline";
        read.innerHTML = "Read More";
        more.style.display = "none";
    }
    else{
        dots.style.display = "none";
        read.innerHTML = "Read Less";
        more.style.display = "inline";
    }
}
