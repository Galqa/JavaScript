/* Завдання 2
Написати програму, яка обчислює площу та периметр різних геометричних фігур (коло, прямокутник, трикутник). 
Кожна геометрична фігура повинна мати свою окрему функцію для обчислення площі та периметру.

Кроки для виконання завдання:
1. Створити функцію для обчислення площі та периметру кола:
   - Функція повинна приймати радіус кола.
   - Використайте формули: площа = π * r², периметр = 2 * π * r.
2. Створити функцію для обчислення площі та периметру прямокутника:
   - Функція повинна приймати довжину і ширину прямокутника.
   - Використайте формули: площа = довжина * ширина, периметр = 2 * (довжина + ширина).
3. Створити функцію для обчислення площі та периметру трикутника:
   - Функція повинна приймати довжини трьох сторін трикутника.
   - Використайте формули: площа = √(p * (p - a) * (p - b) * (p - c)), де p = (a + b + c) / 2, периметр = a + b + c.
4. Запросити користувача вибрати фігуру і ввести відповідні параметри:
   - Використайте `prompt` для запиту типу фігури та відповідних параметрів.
5. Обчислити площу та периметр вибраної фігури:
   - Викликати відповідні функції для обчислення площі та периметру.
6. Вивести результати:
   - Використайте `alert` для виведення результатів обчислень.
 */

// функція для обчислення площі кола
function circleArea(radius) {
    return Math.PI * radius * radius;
}

// функція для обчислення периметру кола
function circlePerimeter(radius) {
    return 2 * Math.PI * radius;
}

// функція для обчислення площі прямокутника
function rectangleArea(length, width) {
    return length * width;
}
// функція для обчислення периметру прямокутника
function rectanglePerimeter(length, width) {
    return 2 * (length + width);
}


// функція для обчислення площі трикутника
function triangleArea(a, b, c) {
    const p = (a + b + c) / 2;
    return Math.sqrt(p * (p - a) * (p - b) * (p - c));
}
// функція для обчислення периметру трикутника
function trianglePerimeter(a, b, c) {
    return a + b + c;
}

// запит користувача на вибір фігури та введення параметрів
const shape = prompt("Виберіть фігуру(коло, прямокутник, трикутник):").toLowerCase();

let area, perimeter;

switch (shape) {
    case "коло":
        const radius = parseFloat(prompt("Введіть радіус кола: "));
        area = circleArea(radius);
        perimeter = circlePerimeter(radius);
        break;
    case "прямокутник":
        const length = parseFloat(prompt("Введіть довжину прямокутника: "));
        area = rectangleArea(length, width);
        perimeter = rectanglePerimeter(length, width);
        break;
    case "трикутник":
        const a = parseFloat(prompt("Введіть довжину першої сторони трикутника: "));
        const b = parseFloat(prompt("Введіть довжину другої сторони трикутника: "));
        const c = parseFloat(prompt("Введіть довжину третьої сторони трикутника:"));
        area = triangleArea(a, b, c);
        perimeter = trianglePerimeter(a, b, c);
        break;
    default:
        alert("Невідома фігура!");
        break;
}
if (area && perimeter) {
    alert(`Площа: ${area.toFixed(1)}, Периметр: ${perimeter.toFixed(1)}`);

}











