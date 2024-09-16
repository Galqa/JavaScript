let books = [];
document.getElementById('book-form').addEventListener('submit', function (event) {
    event.preventDefault();
    addBook();
});

function addBook() {
    const title = document.getElementById('title').value.trim();
    const author = document.getElementById('author').value.trim();
    const year = document.getElementById('year').value.trim();
    const genre = document.getElementById('genre').value.trim();
    const currentYear = new Date().getFullYear();

    // Перевірка на порожнє значення
    if (!title) {
        alert('Назва книги не повинна бути порожньою.');
        return;
    }

    // Перевірка на дублікати
    if (books.some(book => book.title === title)) {
        alert('Книга з такою назвою вже існує.');
        return;
    }

    if (!author) {
        alert('Ім\'я автора не повинно бути порожнім.');
        return;
    }

    if (!year) {
        alert('Рік видання повинен бути вказаний.');
        return;
    }

    if (isNaN(year) || year < 1450 || year > currentYear) {
        alert(`Рік видання повинен бути числом між 1450 і ${currentYear}.`);
        return;
    }

    if (!genre) {
        alert('Жанр не повинен бути порожнім.');
        return;
    }

    const newBook = { title, author, year: parseInt(year), genre };
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