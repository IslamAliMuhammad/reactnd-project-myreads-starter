import React, { Component } from 'react'
import Book from '../../Book'

class CurrentlyReading extends Component{
    render(){
        const { books, onUpdateRemoteShelf, onUpdateBooks } = this.props;
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map((book) => (
                      <li key={book.id}>
                        <Book book={book} onUpdateRemoteShelf={onUpdateRemoteShelf} onUpdateBooks={onUpdateBooks}/>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
        );
    }
}

export default CurrentlyReading