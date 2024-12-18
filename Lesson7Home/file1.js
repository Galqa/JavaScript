/* Завдання: Написати програму для управління інформацією про студентів у групі. Програма повинна дозволяти додавати нових студентів, видаляти студентів і виводити інформацію про всіх студентів.

Кроки для виконання завдання:

Створити конструктор або фабричну функцію для створення об'єктів студентів:
Кожен об'єкт студента повинен містити наступні властивості: ім'я, прізвище, вік, ідентифікаційний номер, середній бал.
Створити об'єкт для управління групою студентів:
Цей об'єкт повинен містити масив студентів та методи для додавання, видалення і виведення інформації про студентів.
Додати метод для додавання нового студента:
Метод повинен приймати параметри для створення нового об'єкта студента і додавати його до масиву.
Додати метод для видалення студента:
Метод повинен видаляти студента за його ідентифікаційним номером.
Додати метод для виведення списку всіх студентів:
Метод повинен виводити на екран список студентів із зазначенням всіх їхніх властивостей.
Додати функціонал для пошуку студента за його ідентифікаційним номером:
Метод повинен шукати студента в масиві і повертати всю інформацію про нього.
*/


// клас для створення об'єктів студентів
class Student {
    constructor(firstName, lastName, age, id, averageGrade) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.id = id;
        this.averageGrade = averageGrade;
    }
}

// клас для управління групою студентів
class StudentGroup {
    constructor() {
        this.students = [];
    }

    // метод для додавання нового студента
    addStudent(firstName, lastName, age, id, averageGrade) {
        const newStudent = new Student(firstName, lastName, age, id, averageGrade);
        this.students.push(newStudent);
    }

    // метод для видалення студента за ідентифікаційним номером
    removeStudent(id) {
        this.students = this.students.filter(student => student.id !== id);
    }

    // метод для виведення списку всіх студентів
    listStudents() {
        this.students.forEach(student => {
            console.log(`Ім'я: ${student.firstName}, Прізвище: ${student.lastName}, Вік: ${student.age}, ID: ${student.id}, Середній бал: ${student.averageGrade}`);
        });
    }

    // метод для пошуку студента за ідентифікаційним номером
    findStudentById(id) {
        const student = this.students.find(student => student.id === id);
        if (student) {
            console.log(`Ім'я: ${student.firstName}, Прізвище: ${student.lastName}, Вік: ${student.age}, ID: ${student.id}, Середній бал: ${student.averageGrade}`);
        } else {
            console.log(`Студента з ID ${id} не знайдено.`);
        }
    }
}

// Приклади використання
const studentGroup = new StudentGroup();
studentGroup.addStudent('Richi', 'Gim', 18, 1, 4.5);
studentGroup.addStudent('Marta', 'Petrova', 20, 2, 5);
studentGroup.listStudents();
studentGroup.findStudentById(1);
studentGroup.removeStudent(1);
studentGroup.listStudents();
