interface Book {
  isbn: string;
  title: string;
  author: string;
}

const bookshelf: Book[] = [
  {
    isbn: '978-1491929483',
    title:
      'Introduction to JavaScript Object Notation: A To-the-Point Guide to JSON',
    author: 'Lindsay Bassett',
  },
  {
    isbn: '978-1484218624',
    title: 'JSON Quick Syntax Reference',
    author: 'Wallace Jackson',
  },
  {
    isbn: '978-0692232699',
    title:
      "Build APIs You Won't Hate: Everyone and their dog wants an API, so you should probably learn how to build them",
    author: 'Phil Sturgeon & Laura Bohill',
  },
];

console.log(
  'author of the second entrty of the bookshelf: ',
  bookshelf[1].author
);

console.log('ISBN of the first book in the bookshelf: ', bookshelf[0].isbn);

console.log('title of the third book in the bookshelf: ', bookshelf[2].title);
