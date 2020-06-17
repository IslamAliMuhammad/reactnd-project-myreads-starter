import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import CurrentlyReading from './shelves/CurrentlyReading'
import WantToRead from './shelves/WantToRead'
import Read from './shelves/Read'

class ListShelves extends Component{
    state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    }
    render(){
        const { books } = this.props;
        books.map((book) => {
          if(book.shelf === 'currentlyReading'){
            this.state.currentlyReading.push(book);
          }else if(book.shelf === 'wantToRead'){
            this.state.wantToRead.push(book);
          }else if(book.shelf === 'read'){
            this.state.read.push(book);
          }
        });
        console.log(books);

        return(
            <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <CurrentlyReading books={this.state.currentlyReading}/>
              <WantToRead books={this.state.wantToRead}/>
              <Read books={this.state.read}/>
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