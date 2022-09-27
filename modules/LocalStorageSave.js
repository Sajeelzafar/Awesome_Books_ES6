export function saveToLocal(book) {
    let arrBooks;

    if (localStorage.getItem('books') === null) {
      arrBooks = [];
    } else {
      arrBooks = JSON.parse(localStorage.getItem('books'));
    }
    arrBooks.push(book);
    localStorage.setItem('books', JSON.stringify(arrBooks));
  }