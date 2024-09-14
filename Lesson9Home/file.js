/* 1.Створити функцію для додавання нової книги до масиву:
Функція повинна приймати параметри для створення нового об'єкта книги (назва, автор, рік видання, жанр) і додавати його до масиву books.
Після додавання нової книги, список книг на веб-сторінці повинен оновлюватися.

2. Створити функцію для редагування інформації про книгу:
Додайте можливість редагування існуючих книг за індексом або іншим унікальним ідентифікатором.
Вибрана книга повинна відображатися у формі, де користувач може змінити її дані.

3. Створити функцію для видалення книги з масиву:
Реалізуйте можливість видалення книги з масиву books.
Після видалення книги, список книг на веб-сторінці повинен оновлюватися.
Забезпечити динамічне оновлення списку книг на сторінці після кожної операції (додавання, редагування, видалення).
*/


let books = [];

document.getElementById('book-form').addEventListener('submit', function (event) {
    event.preventDefault();
    addBook();
});

function addBook() {
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const year = document.getElementById('year').value;
    const genre = document.getElementById('genre').value;

    const newBook = { title, author, year, genre };
    books.push(newBook);
    updateBookList();
}

function updateBookList() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author} (${book.year}) - ${book.genre}`;
        li.appendChild(createEditButton(index));
        li.appendChild(createDeleteButton(index));
        bookList.appendChild(li);
    });
}

function createEditButton(index) {
    const button = document.createElement('button');
    button.textContent = 'Редагувати';
    button.addEventListener('click', () => editBook(index));
    return button;
}

function createDeleteButton(index) {
    const button = document.createElement('button');
    button.textContent = 'Видалити';
    button.addEventListener('click', () => deleteBook(index));
    return button;
}

function editBook(index) {
    const book = books[index];
    document.getElementById('title').value = book.title;
    document.getElementById('author').value = book.author;
    document.getElementById('year').value = book.year;
    document.getElementById('genre').value = book.genre;

    document.getElementById('book-form').onsubmit = function (event) {
        event.preventDefault();
        books[index] = {
            title: document.getElementById('title').value,
            author: document.getElementById('author').value,
            year: document.getElementById('year').value,
            genre: document.getElementById('genre').value
        };
        updateBookList();
        document.getElementById('book-form').onsubmit = addBook;
    };
}

function deleteBook(index) {
    books.splice(index, 1);
    updateBookList();
}




