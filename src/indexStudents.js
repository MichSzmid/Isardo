const NavButtons = document.querySelectorAll(".navigation-button");
const NavButtonIndicator =  document.querySelectorAll(".navigation-button__indicator");

for (let i=0;i<NavButtons.length;i++) {
    NavButtons[i].addEventListener("mouseover",function(){
        NavButtons[i].classList.add("navigation-button--hover");
    });
    NavButtons[i].addEventListener("mouseleave",function(){
        NavButtons[i].classList.remove("navigation-button--hover");
    });
    NavButtons[i].addEventListener("click",function(){
        if(!NavButtons[i].classList.contains("navigation-button--active")){
        NavButtons[i].classList.add("navigation-button--active");
        NavButtons[i+1].classList.remove("navigation-button--active")
        NavButtonIndicator[i].style.display="block";
        } else
            {NavButtons[i].classList.remove("navigation-button--active");
            NavButtonIndicator[i].style.display="none";}
    });
}