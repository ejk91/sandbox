import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './searchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <div>Welcome, Chris!</div>
        <SearchBar />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));