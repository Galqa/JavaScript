function getNumericValue(message) { // повідомлення від користувача
    while (true) {
        let value = prompt(message);
        let isValid = !isNaN(value) && value !== "" && value !== null; // перевірка на число: якщо це не число і value не є порожнім рядком і якщо value не є null - то це значення валідне
        if (isValid) return Number(value);
    }
} 