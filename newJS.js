var home = document.getElementById("home");
var description = document.getElementById("background-description");
var title = document.getElementById("background-title");
var homelist = [
    {
        back: "images/bg4.jpg",
        desc: "Inspiring the next generation of innovators",
        title: "Where learning meets robotics"
    },

    {
        back: "images/bg2.jpg",
        desc: "Unlock your child's potential with robotics",
        title: "The Futur of Robotics!"
    }
    ,
    {
        back: "images/bg3.jpg",
        desc: "Building confidence and skills through robotics",
        title: "ELLabs"
    }
    ,
    {
        back: "images/bg1.jpg",
        desc: "Unlock your child's potential with robotics",
        title: "The Futur of Robotics!"
    }
]
i = 0;
var diapo = setInterval(slideshow, 2000);

function homebackground(Dir) {
    if (Dir === 1) {
        if (i === homelist.length - 1) {
            i = 0;
        } else if (i != homelist.length - 1) {
            i++;
        }
    }

    else if (Dir === 0) {
        if (i === 0) {
            i = homelist.length - 1;
        } else if (i != 0) {
            i--;
        }
    }
    description.textContent = homelist[i].desc;
    title.textContent = homelist[i].title;
    home.style.backgroundImage = `url("${homelist[i].back}")`;
    console.log("i from homebackground : " + i);
    clearInterval(diapo);
    diapo = setInterval(slideshow, 2000);
}


function slideshow() {
    description.textContent = homelist[i].desc;
    title.textContent = homelist[i].title;
    home.style.backgroundImage = `url("${homelist[i].back}")`;

    if (i < homelist.length - 1) {
        i++;
    }
    else {
        i = 0;
    }
}
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 200;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


$(document).ready(function () {
    $(".counter").each(function () {
        var count = $(this);
        var countTo = count.attr('data-count');
        $({ countNum: count.text() }).animate({
            countNum: countTo,
        },
            {
                duration: 3000,
                easing: 'linear',
                step: function () {
                    count.text(Math.floor(this.countNum));
                },
                complete: function () {
                    count.text(this.countNum);
                }
            });
    });
});
function scrolltogallery() {
    let windowViewElement = document.querySelector('#section-id');
    windowViewElement.scrollIntoView({ behavior: 'smooth' });
}

function scrolltotalktous() {
    let windowViewElement = document.querySelector('#ar');
    windowViewElement.scrollIntoView({ behavior: 'smooth' });
}
function scrolltoourcourses() {
    let windowViewElement = document.querySelector('#section-id');
    windowViewElement.scrollIntoView({ behavior: 'smooth' });
}
function scrolltoourcourses() {
    let windowViewElement = document.querySelector('.our-courses-container');
    windowViewElement.scrollIntoView({ behavior: 'smooth' });
}
function scrolltocomingsoon() {
    let windowViewElement = document.querySelector('.comingsoon-container');
    windowViewElement.scrollIntoView({ behavior: 'smooth' });
}
var state1 = 0;
var state2 = 0;
var state3 = 0;
var state4 = 0;
function card1clicked() {
    console.log(state1);
    var container = document.querySelector(".course-info-container");
    if (state1 === 1) {
        console.log("if state1 = 1");
        container.style.display = "none";
        state1 = 0;
    }
    else {
        container.style.display = "flex";
        state1 = 1;
        state2 = 0;
        state3 = 0;
        state4 = 0;
        var element = document.querySelector(".course-title");
        element.textContent = "LEVEL 0";
        var element = document.querySelector(".course-desc");
        element.textContent = "Description of Level 0 The course deepens students' understanding of robotics through applied projects and exposure to other programming languages..";
        var element = document.querySelector("#course-pic");
        element.src = "/images/Album1/images/img1.jpg";
        var element = document.querySelector(".course-price");
        element.textContent = "8500 DA";
        var element = document.querySelector(".courseinfo");
        element.style.backgroundColor = "rgb(245, 229, 14)";
    }
    let windowViewElement = document.querySelector('.pricediv');
    windowViewElement.scrollIntoView({ behavior: 'smooth' });
}
function card2clicked() {
    console.log(state2);
    var container = document.querySelector(".course-info-container");
    if (state2 === 1) {
        console.log("if state2 = 1");
        container.style.display = "none";
        state2 = 0;
    }
    else {
        container.style.display = "flex";
        state1 = 0;
        state2 = 1;
        state3 = 0;
        state4 = 0;
        var element = document.querySelector(".course-title");
        element.textContent = "LEVEL 1";
        var element = document.querySelector(".course-desc");
        element.textContent = "Description of Level 1 The course deepens students' understanding of robotics through applied projects and exposure to other programming languages..";
        var element = document.querySelector("#course-pic");
        element.src = "/images/Album1/images/img2.jpg";
        var element = document.querySelector(".course-price");
        element.textContent = "8500 DA";
        var element = document.querySelector(".courseinfo");
        element.style.backgroundColor = "orange";
    }
    let windowViewElement = document.querySelector('.pricediv');
    windowViewElement.scrollIntoView({ behavior: 'smooth' });
}


function card3clicked() {
    console.log(state3);
    var container = document.querySelector(".course-info-container");
    if (state3 === 1) {
        console.log("if state3 = 1");
        container.style.display = "none";
        state3 = 0;
    }
    else {
        container.style.display = "flex";
        state1 = 0;
        state2 = 0;
        state3 = 1;
        state4 = 0;
        var element = document.querySelector(".course-title");
        element.textContent = "LEVEL 2";
        var element = document.querySelector(".course-desc");
        element.textContent = "Description of Level 2 The course deepens students' understanding of robotics through applied projects and exposure to other programming languages..";
        var element = document.querySelector("#course-pic");
        element.src = "/images/Album1/images/img3.jpg";
        var element = document.querySelector(".course-price");
        element.textContent = "12500 DA";
        var element = document.querySelector(".courseinfo");
        element.style.backgroundColor = "blueviolet";
    }
    let windowViewElement = document.querySelector('.pricediv');
    windowViewElement.scrollIntoView({ behavior: 'smooth' });
}
function card4clicked() {
    console.log(state4);
    var container = document.querySelector(".course-info-container");
    if (state4 === 1) {
        console.log("if state4 = 1");
        container.style.display = "none";
        state4 = 0;
    }
    else {
        container.style.display = "flex";
        state1 = 0;
        state2 = 0;
        state3 = 0;
        state4 = 1;
        var element = document.querySelector(".course-title");
        element.textContent = "LEVEL 3";
        var element = document.querySelector(".course-desc");
        element.textContent = "Description of Level 3 The course deepens students' understanding of robotics through applied projects and exposure to other programming languages..";
        var element = document.querySelector("#course-pic");
        element.src = "/images/Album1/images/img5.jpg";
        var element = document.querySelector(".course-price");
        element.textContent = "12500 DA";
        var element = document.querySelector(".courseinfo");
        element.style.backgroundColor = "blue";

    }
    let windowViewElement = document.querySelector('.pricediv');
    windowViewElement.scrollIntoView({ behavior: 'smooth' });
}
window.addEventListener("load", function () {
    var titleElement = document.querySelector(".animated-title");
    titleElement.classList.add("animated-title");
});