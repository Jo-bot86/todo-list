import React, { Component } from 'react';

import TodoList from './TodoList';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { title: '',  }
  }

  render() {
    return (
      <div>
        <TodoList />
      </div>
    )
  }
}

export default App;