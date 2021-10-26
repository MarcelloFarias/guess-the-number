let inputNumber = document.querySelector('.input-number'),
    display = document.querySelector('.display');
const btnSubmit = document.querySelector('.btn-submit');
let number = Math.floor(Math.random() * 20 + 1);

btnSubmit.addEventListener('click', function() {
    if(inputNumber.value > 20) {
        inputNumber.value = '';
        display.innerHTML = 'The number can not be bigger then 20 ! Please, try agin.';
    }
    else if(inputNumber.value < 0) {
        inputNumber.value = '';
        display.innerHTML = 'The number can not be less then 0 ! Please, try agin.';
    }
    else if(inputNumber.value != number) {
        if(inputNumber.value > number) {
            inputNumber.value = '';
            display.innerHTML = 'The number typed is bigger then the number raffled ! Try agin';
        }
        else {
            inputNumber.value = '';
            display.innerHTML = 'The number typed is smaller then the number raffled ! Try agin';
        }
    }
    else {
        inputNumber.value = '';
        display.innerHTML = `The number raffled is ${number} ! You won 🎉`;
    }   
});