import React, { Component } from 'react';
import './fab.css';

class Fab extends Component {
  render() {
    return (
      <div className="fab" onClick={e => this.props.showForm(true)}>
        &#43;
      </div>
    );
  }
}

export default Fab;