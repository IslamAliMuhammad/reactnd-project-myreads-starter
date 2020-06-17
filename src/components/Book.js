import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'

class Book extends Component{
    state = {
      bookShelf: 'none',
    }
    handleChange = (e, bookID) => {
      const selectedShelf = e.target.value;
      
      this.setState({bookShelf: selectedShelf});
      if(selectedShelf === 'currentlyReading'){
        BooksAPI.update({id: bookID}, 'currentlyReading')
          .then((data) => {console.log(data)});
      }else if (selectedShelf === 'wantToRead'){
        BooksAPI.update({id: bookID}, 'wantToRead')
        .then((data) => {console.log(data)});
      }else if(selectedShelf === 'read'){
        BooksAPI.update({id: bookID}, 'read')
        .then((data) => {console.log(data)});
      }else{
        BooksAPI.update({id: bookID}, '')
        .then((data) => {console.log(data)});
      }
    }
    render(){
        const { book } = this.props;
        const { id, authors, title, imageLinks } = book;

        return(
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})`}}></div>
              <div className="book-shelf-changer">
                <select value={this.state.bookShelf} onChange={(e) => {this.handleChange(e, id)}}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">
              <ul className="book-authors-list">
                {authors && authors.map((author) => (<li key={author}>{author}</li>))}
              </ul>
            </div>
          </div>
        );
    }
}

export default Book