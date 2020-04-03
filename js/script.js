let hamburgerStatus = false;

function navMenu(){
    let getSideNav = document.querySelector(".navbar");
    let line1 = document.querySelector(".hamburger .line1");
    let line2 = document.querySelector(".hamburger .line2");
    let line3 = document.querySelector(".hamburger .line3");


    if(hamburgerStatus === false){

        line1.style.transform = "rotate(-45deg) translate(-3px, 5px)";
        line2.style.opacity = 0;
        line3.style.transform = "rotate(45deg) translate(-4px, -5.5px)";
        getSideNav.style.top = "0%";
        hamburgerStatus = true;
    } else{
        getSideNav.style.top = "-100%";
        line1.style.transform = "rotate(0deg)";
        line2.style.opacity = 1;
        line3.style.transform = "rotate(0deg) ";

        hamburgerStatus = false;
    }
};
