

// Class List With Arrow Functions

let classes =(classes) => document.getElementsByClassName(classes);

let errorText =classes('error'),
failureIcon=classes('failure-icon'),
successIcon=classes('success-icon');

errorText.innerHTML='heloososd'

// ++++++++++++++++++++++++++++++++


// ID List With Arrow Functions

let id = (id) => document.getElementById(id);

let username =id('username'),
email =id('email'),
password =id('password'),
form =id('form');

// +++++++++++++++++++++++++++

//  Event Listerner For submit

form.addEventListener('submit', (e) =>{
    e.preventDefault()
    engine(username, 0, "UserName can't be empty")
    engine(email, 1, "Email can't be empty")
    engine(password, 2, "password can't be empty")

})


// Fuction Validation"""""""""""""""""""""

let engine = (id, serial, message) =>{
    if (id.value.trim() === "") {
        errorText[serial].innerHTML = message;
        failureIcon[serial].style.opacity="1"
        successIcon[serial].style.opacity="0"
    }
    else {
        errorText[serial].innerHTML = "";
        failureIcon[serial].style.opacity="0"
        successIcon[serial].style.opacity="1"
    }
  
}




