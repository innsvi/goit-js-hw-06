// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const inputIdEl = document.querySelector('#validation-input');
const inputLength = Number(inputIdEl.getAttribute('data-length'));

inputIdEl.addEventListener('blur',event =>{
    const text = event.target.value.length;
    
    if(text === inputLength){
        inputIdEl.classList.add('valid');
        inputIdEl.classList.remove('invalid');
    }else{
        inputIdEl.classList.add('invalid');
    }
});


















// ==============================================================

// const inputIdEl = document.querySelector('#validation-input');
// const inputNumber = Number(inputIdEl.dataset.length);

// console.log(inputNumber);

// inputIdEl.addEventListener('blur',blurOnInput);

// function blurOnInput(event){
//     if(event.currentTarget.value.length <= inputNumber){
//         event.currentTarget.classicList.add('valid');
//     }else{
//         event.currentTarget.classicList.add('invalid');
//         event.currentTarget.remove('valid');
//     }
// };


// const inputIdEl = document.querySelector('#validation-input');
// inputIdEl.addEventListener('blur', validation);

// function validation(event){
//     if(event.target.value.length === inputIdEl.dataset.length){
//         inputIdEl.classList.add('valid');
//         inputIdEl.classList.remove('invalid');
//     }else{
//         inputIdEl.classList.add('invalid')
//     };
// };





// ==========================================================



// const inputIdEl = document.querySelector('input');

// inputIdEl.addEventListener('blur', onFormSubmit);

// function onFormSubmit(event){

//     if(inputIdEl.value.length == inputIdEl.dataset.length){
//         inputIdEl.classList = 'valid';
//     }else{
//         inputIdEl.classList = 'invalid';
//     }
// };

// =========================================================


// const inputIdEl = document.querySelector('#validation-input');
// // console.log(inputIdEl);
// // console.log(inputIdEl.dataset.length);

// // inputIdEl.addEventListener('input',event =>{
// //     console.log(event.currentTarget.value)
// // });

// inputIdEl.addEventListener('blur', event =>{
//     inputIdEl.classList.remove('valid','invalid');
//     if(event.target.value.length === Number(inputIdEl.dataset.length)){
//         inputIdEl.classList.add('valid');
//     } else{
//         inputIdEl.classList.add('invalid');
//     }
// });

