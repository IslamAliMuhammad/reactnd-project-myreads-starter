import React, { Component } from 'react'

class Book extends Component{
    state = {
      bookShelf: 'none',
    }
    handleChange = (e, bookID, onUpdateRemoteShelf, onUpdateBooks) => {
      const selectedShelf = e.target.value;
      this.setState({bookShelf: selectedShelf});
      
      
      if(onUpdateBooks){
        onUpdateRemoteShelf(bookID, selectedShelf, onUpdateBooks);
      }else{
        onUpdateRemoteShelf(bookID, selectedShelf);
      }
    }
    
    render(){
        const { id, authors, title, imageLinks, shelf } =  this.props.book;
        return(
          <div className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, background: imageLinks ? `url(${imageLinks.thumbnail})` : '' }}></div>
              <div className="book-shelf-changer">
                <select value={shelf ? shelf : this.state.bookShelf} onChange={(e) => {this.handleChange(e, id, this.props.onUpdateRemoteShelf, this.props.onUpdateBooks)}}>
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