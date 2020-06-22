import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Search from './components/searchPage/Search'
import ListShelves from './components/mainPage/ListShelves'

class BooksApp extends React.Component {
  state = {
    booksIDsShelved: {} 
  }
  
  updateRemoteShelf = async (bookID, shelf, callback) => {
    if(shelf === 'currentlyReading'){
      BooksAPI.update({id: bookID}, 'currentlyReading')
      .then((booksIDS) => {this.setState({booksIDsShelved: booksIDS}, callback);});
    }else if (shelf === 'wantToRead'){
      BooksAPI.update({id: bookID}, 'wantToRead')
      .then((booksIDS) => {this.setState({booksIDsShelved: booksIDS}, callback);});
    }else if(shelf === 'read'){
      BooksAPI.update({id: bookID}, 'read')
      .then((booksIDS) => {this.setState({booksIDsShelved: booksIDS}, callback);});
    }
  }

  componentDidMount(){
    BooksAPI.update({}, 'currentlyReading')
      .then((booksIDS) => {this.setState({booksIDsShelved: booksIDS});});
  }
  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <Search onUpdateRemoteShelf={this.updateRemoteShelf} booksIDsShelved={this.state.booksIDsShelved}/>
        )}/>
        
        <Route exact path='/' render={() => (
          <ListShelves books={this.state.books} onUpdateRemoteShelf={this.updateRemoteShelf}/>
        )}/>
  
      </div>
    )
  }
}

export default BooksApp
