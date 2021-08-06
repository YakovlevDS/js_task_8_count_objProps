// ? Task:Напишите функцию count(obj), которая возвращает количество свойств объекта.

// Solution
let user = {
  name: 'John',
  age: 30,
  tel: 304958886,
  adress:'Sev st/23/3'
};
const count = obj => Object.keys(obj).length;
console.log( count(user) ); // 4


// ! Explanation:

// Для простых объектов доступны следующие методы:

// Object.keys(obj) – возвращает массив ключей.
// Object.values(obj) – возвращает массив значений.
// Object.entries(obj) – возвращает массив пар [ключ, значение].



