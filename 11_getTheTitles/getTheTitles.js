const getTheTitles = function(books) {
    const bookTitles = [];

    books.map(book => {
        bookTitles.push(book.title);
    });
    
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
