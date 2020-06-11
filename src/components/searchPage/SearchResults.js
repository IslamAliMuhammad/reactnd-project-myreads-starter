import React, { Component } from 'react'
import Book from '../Book'
class SearchResults extends Component{
    render(){
        const {books} = this.props;
        return(
            <div className="search-books-results">
              <ol className="books-grid">
                {
                  books.map((book) => (
                    <Book key={book.id} title={book.title} authors={book.authors} backgroundImage={book.imageLinks.smallThumbnail}/>
                  ))
                }
              </ol>
            </div>  
        );
    }
}
export default SearchResults