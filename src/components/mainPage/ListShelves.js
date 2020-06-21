import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CurrentlyReading from './shelves/CurrentlyReading'
import WantToRead from './shelves/WantToRead'
import Read from './shelves/Read'
import * as BooksAPI from '../../BooksAPI'


class ListShelves extends Component{
    state = {
      books: [],
    }

    updateBooks = () => {
      BooksAPI.getAll()
        .then((books) => {this.setState({books: books});});
    }

    componentDidMount(){
      this.updateBooks();
    }

    render(){
        const currentlyReading = [];
        const wantToRead = [];
        const read = [];

        this.state.books.map((book) => {
          if(book.shelf === 'currentlyReading'){
            currentlyReading.push(book);
          }else if(book.shelf === 'wantToRead'){
            wantToRead.push(book);
          }else if(book.shelf === 'read'){
            read.push(book);
          }
        });

        const { onUpdateRemoteShelf } = this.props;
        return(
            <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <CurrentlyReading books={currentlyReading} onUpdateRemoteShelf={onUpdateRemoteShelf} onUpdateBooks={this.updateBooks}/>
              <WantToRead books={wantToRead} onUpdateRemoteShelf={onUpdateRemoteShelf} onUpdateBooks={this.updateBooks}/>
              <Read books={read} onUpdateRemoteShelf={onUpdateRemoteShelf} onUpdateBooks={this.updateBooks}/>
            </div>
          </div>
          <div className="open-search">
            <Link className='add-book' to='/search'>Add a book</Link>
          </div>
        </div>
        );
    }
}

export default ListShelves