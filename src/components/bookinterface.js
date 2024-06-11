import React from 'react';
import "../style/bookinterface.css";

const BookInterface = () => {
    const books = [
        { name: 'To Kill a Mockingbird', author: 'Harper Lee' },
        { name: '1984', author: 'George Orwell' },
        { name: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { name: 'The Catcher in the Rye', author: 'J.D. Salinger' },
        { name: 'The Hobbit', author: 'J.R.R. Tolkien' },
        { name: 'Fahrenheit 451', author: 'Ray Bradbury' },
        { name: 'Pride and Prejudice', author: 'Jane Austen' },
        { name: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
        { name: 'Harry Potter and the Sorcerer\'s Stone', author: 'J.K. Rowling' },
        { name: 'Animal Farm', author: 'George Orwell' },
        { name: 'Moby-Dick', author: 'Herman Melville' },
        { name: 'War and Peace', author: 'Leo Tolstoy' },
        { name: 'The Odyssey', author: 'Homer' },
        { name: 'Crime and Punishment', author: 'Fyodor Dostoevsky' },
        { name: 'The Divine Comedy', author: 'Dante Alighieri' },
        { name: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky' },
        { name: 'Jane Eyre', author: 'Charlotte Brontë' },
        { name: 'Wuthering Heights', author: 'Emily Brontë' },
        { name: 'Brave New World', author: 'Aldous Huxley' },
        { name: 'The Iliad', author: 'Homer' },
        { name: "random book ", author:"random person"},
        
    ];
    
    return ( 
        <div className="book-interface-container">
            {
                books.map((book, index) => (
                    <div className="book-item" key={index}>
                        <h3>{book.name}</h3>
                        <h4>{book.author}</h4>
                    </div>
                ))
            }
        </div>
     );
}
 
export default BookInterface;
