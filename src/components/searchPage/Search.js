import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import SearchResults from './SearchResults'
import * as BooksAPI from '../../BooksAPI'


class Search extends Component{
    state = {
      query: '',
      books: [],
    }

    searchBook = (query) => {
      BooksAPI.search(query)
        .then((books) => {
          this.setState(() => ({books: books}));
          console.log(this.state.books)
        });
    }
    handleChange = (e) => {
      this.setState({query: e.target.value});
      if(e.target.value.length > 0){
        this.searchBook(e.target.value);
      }else{
        // clear all books
      }
    }
 
    render(){
        return(
            <div className="search-books">
            <div className="search-books-bar">
              <Link className='close-search' to='/'>Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
  
                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author" onChange={this.handleChange} value={this.state.query} />
  
              </div>
            </div>
            {this.state.books.length > 0 && <SearchResults books={this.state.books}/>}
          </div>
        );
    }
}

export default Search