
let labels = document.getElementsByTagName('label');


for  (let i = 0; i < labels.length; i++) {
    labels[i].style.fontFamily = "Reddit Mono, monospace";
    labels[i].style.fontWeight = 'bold';
} 

const passwordOne = document.querySelector('#password');
const passwordTwo = document.querySelector('#password-confirmation');
const errorMessage = document.querySelector('.error-message');

passwordTwo.addEventListener('input', () => {
if ((passwordOne.value.length >= 6 && passwordTwo.value.length >= 6) && passwordOne.value !== passwordTwo.value) {
    errorMessage.textContent = '* Passwords do not match!'
    passwordOne.style.border = '2px solid red';
    passwordTwo.style.border = '2px solid red';
} else {
    errorMessage.textContent = '';
    passwordOne.style.border = '2px solid green';
    passwordTwo.style.border = '2px solid green';
}

})

//Password reveal logic

const firstEye = document.querySelector('.first-eye');
const secondEye = document.querySelector('.second-eye');

const eyeGroup = document.querySelectorAll('.fa-eye');
const eyes = Array.from(eyeGroup);



function changeType(passwordInput, eye) {
if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eye.style.color = 'blue';
    
} else if (passwordInput.type === 'text') {
    passwordInput.type = 'password';
    eye.style.color = 'gray';

} 

}

eyes.forEach((eye, index) => {
eye.addEventListener('click', function() {
    let eyeIndex = eyes.indexOf(this)

    switch (eyeIndex) {
        case 0:
            changeType(passwordOne, firstEye);
        break;
        
        case 1:
            changeType(passwordTwo, secondEye);
        break;    

    }
}) 
})





/*firstEye.addEventListener('click', () => {
    changeType(passwordOne, firstEye);
}) 

secondEye.addEventListener('click', () => {
    changeType(passwordTwo, secondEye);
}) */