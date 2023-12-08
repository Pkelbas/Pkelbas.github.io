const bookForm = document.getElementById('bookForm');
const bookTable = document.getElementById('bookTable');

bookForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const culture = bookForm.elements.culture.value;
    const yearFrom = bookForm.elements.yearFrom.value;
    const yearTo = bookForm.elements.yearTO.value;

    // Генерация таблицы на основе введенных параметров
    const table = generateTable(culture, Number(yearFrom), Number(yearTo));

    bookTable.innerHTML = '';
    bookTable.appendChild(table);
});

// Функция для генерации таблицы на основе введенных параметров
function generateTable(culture, minYear, maxYear) {

    const books = [
        {name: "The Life of Metjen", culture: "Египет", year: 2600},
        {name: "Instructions of Shuruppak", culture: "Шумер", year: 2600},
        {name: "Diary of Merer", culture: "Египет", year: 2500},
        {name: "Hymn to Enlil", culture: "Шумер", year: 2500},
        {name: "Code of Urukagina", culture: "Шумер", year: 2400},
        {name: "Pyramid Texts", culture: "Египет", year: 2400},
        {name: "The Maxims of Ptahhotep", culture: "Египет", year: 2375},
        {name: "Palermo Stone", culture: "Египет", year: 2283},
        {name: "Enheduanna's Hymns", culture: "Шумер", year: 2270},
        {name: "Autobiography of Weni", culture: "Египет", year: 2250},
        {name: "Epic of Gilgamesh[", culture: "Шумер", year: 2250},
        {name: "Autobiography of Harkhuf", culture: "Египет", year: 2200},
        {name: "Building of Ningirsu's Temple", culture: "Шумер", year: 2125},
        {name: "Code of Ur-Nammu", culture: "Шумер", year: 2100},
        {name: "Sumerian King List", culture: "Шумер", year: 2084},
        {name: "Namburbi", culture: "Аккад", year: 1900},
        {name: "Anitta text", culture: "Хетты", year: 1750},
    ];


    const filteredBooks = books.filter(book => {
        if (culture === "" && !minYear && !maxYear) {
            return;
        }
        return (
            (culture === "" || book.culture === culture) &&
            (!minYear || book.year <= minYear) &&
            (!maxYear || book.year >= maxYear)
        );
    });


    const filteredBook = filteredBooks;
    if (filteredBooks.length === 0) {
        return;
    }
    const table = document.createElement('table');
    table.classList.add('table');
    const headerRow = table.insertRow();
    addCell(headerRow, "Название");
    addCell(headerRow, "Культура");
    addCell(headerRow, "Год");

    filteredBooks.forEach(book => {
        const row = table.insertRow();
        addCell(row, book.name);
        addCell(row, book.culture);
        addCell(row, book.year);
    });

    return table;
}

function addCell(row, text) {
    const cell = row.insertCell();
    const textNode = document.createTextNode(text);
    cell.appendChild(textNode);
}

function save() {
    localStorage.setItem('table', document.getElementById('bookTable').innerHTML)
}

function load() {
    document.getElementById('bookTable').innerHTML = localStorage.getItem('table')
}