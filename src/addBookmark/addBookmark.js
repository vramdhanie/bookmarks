import React, { Component } from  'react';
import './addBookmark.css';

class AddBookmark extends Component {
  render() {
    return (
      <div className="addbookmark">
        <h2>Add Bookmark</h2>
        <form className="addbookmark__form">
          <input type="text" name="title" id="title" placeholder="Title"/>
          <input type="text" name="url" id="url" placeholder="url"/>
          <textarea name="description" id="description" placeholder="description"/>
          <label htmlFor="rating">Rating: </label>
          <input 
            type="number" 
            name="rating" 
            id="rating" 
            min="1"
            max="5"/>

          <div className="addbookmark__buttons">
            <button>Cancel</button>
            <button type="submit" >Save</button>
          </div>  
        </form>
      </div>
    );
  }
}

export default AddBookmark;