const submitHandle = document.getElementById("bookForm");
const tbodyList = document.getElementById("bookList");
const clear = document.getElementById("ClearBtn");

submitHandle.addEventListener("submit", (e) => {
  e.preventDefault();
  const titleInput = e.target.title.value;
  const AuthorInput = e.target.author.value;
  const yearInput = e.target.year.value;
  saveBookList(titleInput, AuthorInput, yearInput);
  tableMapint();
});

const getBookLIst = () => {
  const saveBookLIst = localStorage.getItem("booklist");
  let booklist = [];

  if (saveBookLIst) {
    booklist = JSON.parse(saveBookLIst);
  }
  return booklist;
};

const saveBookList = (title, author, year) => {
  let BookListData = getBookLIst();
  BookListData = [...BookListData, {title: title, author: author, year: year}];
  let bookListStringfi = JSON.stringify(BookListData);
  localStorage.setItem("booklist", bookListStringfi);
};

const tableMapint = () => {
  const bookList = document.querySelector("#bookList");
  const localStorageGetDAta = JSON.parse(localStorage.getItem("booklist"));
  const row = document.createElement("tr");

  localStorageGetDAta.map((data) => {
    row.innerHTML = `
       <td>${data.title}</td>
       <td>${data.author}</td>
       <td>${data.year}</td>
       <td><button class="detale">X</button></td>
    `;
    bookList.appendChild(row);
  });
};


clear.addEventListener("click", () => {
  localStorage.clear();
  location.reload();
});

tbodyList.addEventListener("click", function (e) {
  if (e.target.classList.contains("detale")) {
    e.target.parentElement.parentElement.remove();
  }
});