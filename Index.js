'use strict'

const email = document.querySelector('#mail');
const pass = document.querySelector('#pass');

email.addEventListener('blur', emailValidation);
pass.addEventListener('blur', passValidation);

function emailValidation ({target : {value}}){
    
    if(value.includes('@', '.')){
        email.style.borderColor = 'green';
    } else {
        email.style.borderColor = 'red';
    } 

    if(value.indexOf('@') > value.indexOf('.')){
        email.style.borderColor = 'red';
    }
}

function passValidation ({target : {value}}) {
   // const specElem = ['`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
    if (value.length < 5) {
        pass.style.borderColor = 'red';
    } else {
        pass.style.borderColor = 'green';
    }
}

