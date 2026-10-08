const myLibrary = [
  { title: "Vigil", author: "G. Saunders", pages: 192, read: false, id: "xxx" },
  {
    title: "The Red Winter",
    author: "C. Sullivan",
    pages: 544,
    read: false,
    id: "xxx",
  },
  { title: "Starside", author: "A. Aster", pages: 464, read: false, id: "xxx" },
  {
    title: "The Children",
    author: "M. Albert",
    pages: 398,
    read: false,
    id: "xxx",
  },
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = self.crypto.randomUUID();
}

function addBookToLibrary() {
  const book = new Book("The Children", "M. Albert", 398, false);
  myLibrary.push(book);
}

function createTable() {
  const table = document.createElement("table");

  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  Object.keys(myLibrary[0]).forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    headerRow.appendChild(th);
  });
  thead.appendChild(headerRow);
  table.appendChild(thead);

  const tbody = document.createElement("tbody");
  myLibrary.forEach((item) => {
    const row = document.createElement("tr");
    Object.values(item).forEach((value) => {
      const cell = document.createElement("td");
      cell.textContent = value;
      row.appendChild(cell);
    });
    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  document.body.appendChild(table);
}
addBookToLibrary();
createTable();
