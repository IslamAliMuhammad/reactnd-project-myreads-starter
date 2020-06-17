import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Search from './components/searchPage/Search'
import ListShelves from './components/mainPage/ListShelves'

class BooksApp extends React.Component {
  state = {
    
  }
  
  componentDidMount(){
   
  }
  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <Search />
        )}/>
        
        <Route exact path='/' render={() => (
          <ListShelves />
        )}/>
  
      </div>
    )
  }
}

export default BooksApp
