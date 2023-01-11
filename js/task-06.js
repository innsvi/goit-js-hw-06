// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputIdEl = document.querySelector('#validation-input');
console.log(inputIdEl);
console.log(inputIdEl.dataset.length);

inputIdEl.addEventListener('input',event =>{
    console.log(event.currentTarget.value)
});

inputIdEl.addEventListener('blur', event =>{
    if(event.currentTarget.value.length === inputIdEl.dataset.length){
        inputIdEl.classList = 'invalid';
    } else{
        inputIdEl.classList = 'valid';
    }
});