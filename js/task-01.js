// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль 
// текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).

// ПІДРАХОВУЄМО ЗАГАЛЬНУ КІЛЬКІСТЬ ЕЛЕМЕНТІВ
const itemElem = document.querySelectorAll('.item');
const itemElemQuantity = itemElem.length;

console.log('Number of categories: ', itemElemQuantity);

// ПІДРАХУЄМО КІЛЬКІСТЬ ЕЛЕМЕНТІВ ПО КОЖНІЙ КАТЕГОРІЇ

itemElem.forEach(item =>{
    console.log('Category: ', item.firstElementChild.textContent);
    console.log('Element: ', item.lastElementChild.children.length);
});

