// special countdown


let dayitem = document.querySelector("#days");
let hoursitem = document.querySelector("#hours");
let minitem = document.querySelector("#min");
let secitem = document.querySelector("#sec");


let countDown = () => {
    let futureDate = new Date("30 may 2024");
    let currentDate = new Date();
    let myDate = futureDate - currentDate;

    let days = Math.floor(myDate / 1000 / 60 / 60 / 24);
    let hours = Math.floor(myDate / 1000 / 60) % 24;
    let min = Math.floor(myDate / 1000 / 60) % 60;
    let sec = Math.floor(myDate / 1000) % 60;

    dayitem.innerHTML = days;
    hoursitem.innerHTML = hours;
    minitem.innerHTML = min;
    secitem.innerHTML = sec;


}

countDown()
setInterval(countDown, 1000);






// scroll back to top

// function ScrollTopBack(){
// let scrollTopButton = document.querySelector("#scrollup");
// window.onscroll = function (){
//     let scroll = document.documentElement.scrollTop;
//     if(scroll >= 350){
//         scrollTopButton.classList.add('scrollActive');
//     }
//     else{
//         scrollTopButton.classList.remove('scrollActive');

//     }
// }
// }
// ScrollTopBack();

function scrollTopBack(){
    let scrollTopButton = document.querySelector('#scrollup');
    window.onscroll = function(){
        var scroll = document.documentElement.scrollTop;
        console.log(scroll);
        if(scroll >= 270){
            scrollTopButton.classList.add("scrollActive");
            // console.log('if statement is working properly');

        }else{ 
            scrollTopButton.classList.remove('scrollActive');
            // console.log('else statement is working properly');
        }
    }
}

scrollTopBack();



// nav hide

let navbar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar- collapse.collapse');

navbar.forEach(function(a){
    a.addEventListener("click", function(){
        navCollapse.classList.remove("show");
    })
})