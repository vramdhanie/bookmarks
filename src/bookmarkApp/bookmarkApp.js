import React, { Component } from 'react';
import './bookmarkApp.css';
import BookmarkList from '../bookmarkList/bookmarkList';
import Fab from '../fab/fab';

class BookmarkApp extends Component {
  render() {
    return (
      <div className="bookmarkApp">
        <h2>Bookmarks</h2>
        <BookmarkList bookmarks={this.props.bookmarks}/>
        <Fab showForm={this.props.showForm}/>
      </div>
    );
  }
}

export default BookmarkApp;