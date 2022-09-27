function deleteInStorage (book) {
  let arrBooks;

  if (localStorage.getItem('books') === null) {
    arrBooks = [];
  } else {
    arrBooks = JSON.parse(localStorage.getItem('books'));
  }
  const elementText = book.children[0].children[0].innerText;
  const spliceBook = arrBooks.map((element) => element.title).indexOf(elementText);
  arrBooks.splice(spliceBook, 1);
  localStorage.setItem('books', JSON.stringify(arrBooks));
}

export function deleteFromDom(e) {
  const item = e.target;
  const parent = item.parentElement;

  if (e.target.nodeName === 'BUTTON') {
    parent.remove();
    deleteInStorage(parent);
  }
}