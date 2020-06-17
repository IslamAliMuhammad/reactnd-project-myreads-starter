import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Search from './components/searchPage/Search'
import ListShelves from './components/mainPage/ListShelves'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  
  componentDidMount(){
    BooksAPI.getAll()
      .then((books) => {this.setState({books: books});});
  }
  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <Search />
        )}/>
        
        <Route exact path='/' render={() => (
          <ListShelves books={this.state.books}/>
        )}/>
  
      </div>
    )
  }
}

export default BooksApp
