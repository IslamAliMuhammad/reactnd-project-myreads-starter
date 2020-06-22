import React, { Component } from 'react'
import Book from '../Book'
class SearchResults extends Component{

    addShelfPropertyToBook = (booksIDsShelved, book) => {
      if(booksIDsShelved.currentlyReading.includes(book.id)){
        book.shelf = 'currentlyReading';
      }else if(booksIDsShelved.wantToRead.includes(book.id)){
        book.shelf = 'wantToRead';
      }else if(booksIDsShelved.read.includes(book.id)){
        book.shelf = 'read';
      }
    }
    render(){
        const { books, booksIDsShelved } = this.props;

        console.log(booksIDsShelved);
        return(
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  books.map((book) => {
                    booksIDsShelved.currentlyReading && this.addShelfPropertyToBook(booksIDsShelved, book);
                    return(
                      <li key={book.id}>
                      <Book book={book} onUpdateRemoteShelf={this.props.onUpdateRemoteShelf}/>
                    </li>
                    );
                  })
                }
              </ol>
            </div>  
        );
    }
}
export default SearchResults