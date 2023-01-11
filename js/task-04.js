// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const counterValueIndicatorElem = document.querySelector('#value');

const decrementBtnElem = document.querySelector('button[data-action="decrement"]');
const incrementBtnElem = document.querySelector('button[data-action="increment"]');

decrementBtnElem.addEventListener('click', () => {
    counterValue -=1;
    counterValueIndicatorElem.textContent = counterValue;
});

incrementBtnElem.addEventListener('click', () =>{
    counterValue +=1;
    counterValueIndicatorElem.textContent = counterValue;
});

