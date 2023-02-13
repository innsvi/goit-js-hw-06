// Напиши скрипт, який під час набору тексту в інпуті input#name-input 
// (подія input), підставляє його поточне значення в span#name-output. 
// Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputName = document.querySelector('#name-input');
const greetName = document.querySelector('#name-output');

const onNameInput = event =>{
    console.log(event.currentTarget.value)

    if(event.currentTarget.value.length !== 0){
        greetName.textContent = event.currentTarget.value
    } 
    else{
        greetName.textContent = "Anonymous"
    }
}

inputName.addEventListener('input',onNameInput)





// inputName.addEventListener('input',(event) =>{
//     const inputText = event.currentTarget.value
//     greetName.textContent = inputText;

//     if(!inputText.length){
//         greetName.textContent = 'Anonymous'
//     }
// })