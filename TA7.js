function getTheTitles(books) {
    const titles = books.map(book => book.title);
    console.log(titles);
}

const books = [
    {
        title: 'Book',
        author: 'Name'
    },
    {
        title: 'Book2',
        author: 'Name2'
    },
    {
        title: 'Pride and prejudice',
        author: 'Jane Austen'
    }
];

getTheTitles(books); 