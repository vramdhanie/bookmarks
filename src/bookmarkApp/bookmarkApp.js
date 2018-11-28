import React, { Component } from 'react';
import './bookmarkApp.css';
import BookmarkList from '../bookmarkList/bookmarkList';

class BookmarkApp extends Component {
  render() {
    return (
      <div className="bookmarkApp">
        <BookmarkList bookmarks={this.props.bookmarks}/>
      </div>
    );
  }
}

export default BookmarkApp;