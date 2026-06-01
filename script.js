// Navbar Shadow

window.addEventListener("scroll", () => {

const navbar =
document.querySelector(".navbar");

if(window.scrollY > 50){

navbar.style.boxShadow =
"0 5px 20px rgba(0,0,0,.3)";

}else{

navbar.style.boxShadow = "none";

}

});

// Smooth Scroll

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document
.querySelector(this.getAttribute("href"))
.scrollIntoView({

behavior:"smooth"

});

});

});

// Scroll Reveal

const observer =
new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

document
.querySelectorAll(
".card,.box,.service,.social-icons a"
)
.forEach(el => {

el.classList.add("hidden");

observer.observe(el);

});