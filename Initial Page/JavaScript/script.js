const testimonials = [
    {
        name: "Marvelous Hem",
        job: "Baker, MarvyCakes",
        image:"/Images/Testi-1.jpg",
        testimonial: "I am very pleased with the immaculate, and professional work of the doctors they give utlmost detail and attention to every word.",

    },
    {   
        name: "Emmanuel Ako",
        job: "CEO, Fashionmakers",
        image:"/Images/Testi-2.jpg",
        testimonial:
        "I would like to thank Dr Emmanuel Ako for all the treatment and care he gave me during my medical checkups.",
    },
    {
        name: "Tolani Osunde",
        job: "Accountant, FirstBank NG",
        image:"/Images/Testi-1.jpg",
        testimonial:
            "The doctor that attended to me is an amazing person, thank you for showing how important I am as a patient to you.",
    },
    {
        name: "Bella Owoma",
        job: "Accountant, FirstBank NG",
        image:"/Images/Testi-4.jpg",
        testimonial:
            "Your services are top-notch and I'm glad I wasn't disappointed. Thanks to the consulation with one of your doctors",
    }
];

let i = 0;
let j = testimonials.length;
let testimonialContainer = document.getElementById("testimonial-container");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

// nextBtn
nextBtn.addEventListener("click", ()=> {
    i = (j + i + 1) % j;
    displayTestimonial();
});
// prevBtn
prevBtn.addEventListener("click", ()=> {
    i = (j + i - 1) % j;
    displayTestimonial();
});

let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
    <p>${testimonials[i].testimonial}</p>
    <img src=${testimonials[i].image}>
    <h3>${testimonials[i].name}</h3>
    <h6>${testimonials[i].job}</h6>
    `;
    
}
window.onload = displayTestimonial;

//Hamburger
var hamburger = document.querySelector(".hamb");
var menulist = document.querySelector(".menu");
var list = document.querySelector(".menu li")

hamburger.addEventListener("click", function(){
    this.classList.toggle("click");
    menulist.classList.toggle("open");
});