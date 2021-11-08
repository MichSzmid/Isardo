const html = document.documentElement;

const LoginForm = document.querySelector("#LoginMain")

/*creation of modal whowing up after register*/
var modal = document.createElement('div'); 
modal.textContent="New account has been created!/n Check Your email.";
modal.setAttribute('class','modal visible');

function RegisteredModal(){
    LoginForm.appendChild(modal);
   setTimeout(function(){LoginForm.removeChild(modal)},5000);
};
/* input handling method */
const Inputs = document.querySelectorAll(".input-class");
for(i=0;i<Inputs.length;i++){
    Inputs[i].addEventListener("input",function(e){
       if(!e.currentTarget.value==""){
           e.currentTarget.classList.add("input-class--active");
           e.currentTarget.classList.remove("input-class--error");
        }else e.currentTarget.classList.remove("input-class--active");
    }
);}

LoginForm.addEventListener("submit", function(e){
        e.preventDefault();
        if(e.currentTarget.login1Name.value &&
             e.currentTarget.login2Last.value &&
              e.currentTarget.login3Email.value &&
               e.currentTarget.login4Password.value){
            console.log("Name: "+e.currentTarget.login1Name.value+'\n'
            +"Lastname:"+e.currentTarget.login2Last.value+'\n'
            +"email:"+e.currentTarget.login3Email.value+'\n'
            +"Password:"+e.currentTarget.login4Password.value
            );
            RegisteredModal();
        }/*collect input data and simulate (just by console logging it) sending it to database server and showing dialog/popup/modal*/
        if(e.currentTarget.login1Name.value===""){
            e.currentTarget.login1Name.classList.add('input-class--error');
        }
            if(e.currentTarget.login2Last.value===""){
            e.currentTarget.login2Last.classList.add('input-class--error');
        }
        if(e.currentTarget.login3Email.value===""){
            e.currentTarget.login3Email.classList.add('input-class--error');
        }
        if(e.currentTarget.login4Password.value===""){
            e.currentTarget.login4Password.classList.add('input-class--error');
        }/*Checks if input is corrent and not empty then adds error class specified in styles*/
});