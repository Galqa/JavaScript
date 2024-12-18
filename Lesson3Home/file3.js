/* Завдання 3
Написати програму, яка перевіряє, чи є введений рік високосним. */

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const inputYear = parseInt(prompt('Введіть рік: '));

if (isLeapYear(inputYear)) {
    console.log('Рік є високосним.');
} else {
    console.log('Рік не є високосним.');
}