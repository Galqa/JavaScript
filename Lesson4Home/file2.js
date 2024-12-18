/* Завдання 2
Гра: "Математичний квіз"
Опис гри:
Програма генерує випадкові математичні вирази (додавання, віднімання, множення, ділення) та запитує у користувача правильну відповідь.
 Користувач має обмежену кількість спроб, щоб дати правильну відповідь.
 Програма виводить кількість правильних та неправильних відповідей після завершення гри.
Кроки для виконання завдання:
1. Генерація математичних виразів:
    - Використайте Math.random() для генерації двох випадкових чисел і оператора (+, -, *, /).
2. Запит правильних відповідей:
    - Використайте prompt для запиту відповідей у користувача.
3 Перевірка відповідей:
    - Використайте умовні конструкції для перевірки правильності відповідей.
4 Підрахунок результатів:
    - Підрахуйте кількість правильних та неправильних відповідей.
5.Виведення результатів:
    - Використайте alert для виведення підсумкових результатів
*/

function generateExpression() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    const operators = ['+', '-', '*', '/'];
    const operator = operators[Math.floor(Math.random() * operators.length)];

    let expression;
    let correctAnswer;

    switch (operator) {
        case '+':
            expression = `${num1} + ${num2}`;
            correctAnswer = num1 + num2;
            break;
        case '-':
            expression = `${num1} - ${num2}`;
            correctAnswer = num1 - num2;
            break;
        case '*':
            expression = `${num1} * ${num2}`;
            correctAnswer = num1 * num2;
            break;
        case '/':
            expression = `${num1} / ${num2}`;
            correctAnswer = (num1 / num2).toFixed(1); // округлення до двох знаків після коми
            break;
    }
    return { expression, correctAnswer };
}

function playMathGame() {
    let correctCount = 0;
    let incorrectCount = 0;
    const attempts = 5;

    for (let i = 0; i < attempts; i++) {
        const { expression, correctAnswer } = generateExpression();
        const userAnswer = prompt(`Вирішіть: ${expression}`);

        if (parseFloat(userAnswer) === parseFloat(correctAnswer)) {

            alert("Правильно!");
            correctCount++;
        } else {
            alert(`Неправильно! Правильна відповідь: ${correctAnswer}`);
            incorrectCount++;
        }
    }
    alert(`Гра завершена. Правильних відповідей: ${correctCount}, Неправильних відповідей: ${incorrectCount}`);
}
playMathGame();







