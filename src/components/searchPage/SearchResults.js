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
                    <Book book={book}/>
                  ))
                }
              </ol>
            </div>  
        );
    }
}
export default SearchResults