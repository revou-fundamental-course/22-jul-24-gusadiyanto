// Function Javascript
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#email');
const inputOptInterest = document.querySelector('#optInterest');
const btnSubmitOption = document.querySelector('#btnSubmitOption');
const errorName = inputName.nextElementSibling;
const errorEmail = inputEmail.nextElementSibling;
const errorInterest = inputOptInterest.nextElementSibling;
let valid = false;
//Event slider figure
document.addEventListener('DOMContentLoaded', function () {
    const figures = document.querySelectorAll('#slider figure');
    let currentSlide = 0;
    figures[currentSlide].classList.add('active');

    const autoSlide = setInterval(function () {
        figures[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % figures.length;
        figures[currentSlide].classList.add('active');
    }, 5000);
});
// Event button submit
btnSubmitOption.addEventListener('click', function (e) {
    e.preventDefault();
    emptyError();
    validateName();
    validateEmail();
    validateOptInterest();

    if (valid) {
        emptyError();
        alert('Terima kasih telah mengisi form / Thank you for filling in the form.')
    }
})
//Function validation error
function emptyError() {
    errorName.textContent = '';
    errorEmail.textContent = '';
    errorInterest.textContent = '';

    errorName.classList.remove('error');
    errorEmail.classList.remove('error');
    errorInterest.classList.remove('error');
}
//Function validation name
function validateName() {
    if (inputName.value == '') {
        errorName.textContent = 'Nama tidak boleh kosong / Name cannot be empty.'
        errorName.classList.add('error');
        valid = false;
    }
    else {
        valid = true;
    }
}
//Function validation email
function validateEmail() {
    if (inputEmail.value == '') {
        errorEmail.textContent = 'Email tidak boleh kosong / Email cannot be empty..'
        errorEmail.classList.add('error');
        valid = false;
    }
    else {
        if (!inputEmail.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            errorEmail.textContent = 'Format email tidak valid / Invalid email format.'
            errorEmail.classList.add('error');
            valid = false;
        }
        else {
            valid = true;
        }
    }
}
//Function validation option interest
function validateOptInterest() {
    if (inputOptInterest.value == '') {
        errorInterest.textContent = 'Pilihan interest tidak boleh kosong / The interest option cannot be empty.'
        errorInterest.classList.add('error');
        valid = false;
    }
    else {
        valid = true;
    }
}