import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import currentlyReading from './shelves/CurrentlyReading'
import WantToRead from './shelves/WantToRead'
import Read from './shelves/Read'
import CurrentlyReading from './shelves/CurrentlyReading'

class ListShelves extends Component{
    render(){
        return(
            <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              <CurrentlyReading />
              <WantToRead />
              <Read />
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