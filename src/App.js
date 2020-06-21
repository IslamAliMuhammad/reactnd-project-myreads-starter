import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Search from './components/searchPage/Search'
import ListShelves from './components/mainPage/ListShelves'

class BooksApp extends React.Component {
  state = {
    booksIDS: {} 
  }
  

  updateRemoteShelf = (bookID, shelf) => {
    if(shelf === 'currentlyReading'){
      return BooksAPI.update({id: bookID}, 'currentlyReading');
    }else if (shelf === 'wantToRead'){
      return BooksAPI.update({id: bookID}, 'wantToRead');
    }else if(shelf === 'read'){
      return BooksAPI.update({id: bookID}, 'read');
    }
  }
  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <Search onUpdateRemoteShelf={this.updateRemoteShelf}/>
        )}/>
        
        <Route exact path='/' render={() => (
          <ListShelves books={this.state.books} onUpdateRemoteShelf={this.updateRemoteShelf}/>
        )}/>
  
      </div>
    )
  }
}

export default BooksApp
