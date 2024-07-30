/* Завдання 2
Написати програму, яка визначає, який сьогодні день тижня, і виводить відповідне повідомлення. */

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const today = new Date();
const dayIndex = today.getDay();

const dayOfWeek = daysOfWeek[dayIndex];
console.log(`Today is ${dayOfWeek}.`);
