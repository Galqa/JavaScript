// файл з бізнес логікою, тобто як дії користувача повинні відображатись в інтерфейсі і на основі цих даних вони повинні змоделюватись

let html = document.querySelector("#contact-list");
let template = document.querySelector("#template").innerHTML;
contactList.render(contactBook.contacts, html);
contactList.renderWithTemplate(contactBook.contacts, html, template);