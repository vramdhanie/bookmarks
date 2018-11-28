import React from 'react';
import ReactDOM from 'react-dom';
import BookmarkApp from './bookmarkApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BookmarkApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
