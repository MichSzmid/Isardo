/*Navigation bar*/
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
/* User Panel*/
document.querySelector(".user-panel").addEventListener("click",function(){
    const UserMenu = document.querySelector(".user-panel--max");
    if(UserMenu.style.visibility=="visible"){
        UserMenu.style.visibility=="hidden";
    }else UserMenu.style.visibility=="visible"
});
/* any text field activation on input*/
const Inputs = document.querySelectorAll(".input-class");
for(i=0;i<Inputs.length;i++){
    Inputs[i].addEventListener("input",function(e){
       if(!e.currentTarget.value==""){
           e.currentTarget.classList.add("input-class--active");
        }else e.currentTarget.classList.remove("input-class--active");
    }
);}

/* Overlay for + Add new student" Button*/

const AddStudentOverlay = document.querySelector(".overlay")
document.getElementById("AddStudentButton").addEventListener("click",function(){
    if(AddStudentOverlay.style.display==="block"){
        AddStudentOverlay.style.display="none";
    } else AddStudentOverlay.style.display="block"
    
});
/* overlay exit by X*/
document.querySelector(".overlay>div>a.Exit").addEventListener("click",function(){
    if(AddStudentOverlay.style.display==="block"){
        AddStudentOverlay.style.display="none";
    } else AddStudentOverlay.style.display="block"
});

/* Students sheet */
const StudentsListTable = document.querySelector(".students-table");
const StudentsSheet = document.querySelector(".students-sheet");
const StudentListTablePosition = document.querySelectorAll("tbody>tr");

const StudentListImage = document.querySelectorAll("td>.user-image-circle>img");
const StudentListName = document.querySelectorAll(".student-data--name");
const StudentListMail = document.querySelectorAll(".student-data--email");
StudentsSheet.style.display="none"
for (let i=0;i<StudentListTablePosition.length;++i)
{
    StudentListTablePosition[i].addEventListener("click",function(){
        document.querySelector(".students-sheet--image>img").src=StudentListImage[i].src;
        document.querySelector(".students-sheet--name>a").innerHTML=StudentListName[i].innerHTML;
        document.querySelector(".students-sheet--mail>a").innerHTML=StudentListMail[i].innerHTML;
        if(StudentsSheet.style.display=="none")
        {
        StudentsListTable.classList.remove("students-table--full");
        StudentsSheet.style.display="block";
        }
    });
}

/*close students sheet by X*/
document.querySelector("div.students-sheet>a.Exit").addEventListener("click",function(){
    StudentsSheet.style.display="none";
    StudentsListTable.classList.add("students-table--full");
})
