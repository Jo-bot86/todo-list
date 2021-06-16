import React, { Component } from 'react';

import Todo from './Todo';
import './TodoList.css';



export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { inputText: "", tasks: [] }
  }

  onDelete = (id) => {
    
    this.setState(currState => ({ tasks: currState.tasks.filter(task => task.id !== id) }))
  }

  handleClick = (id) => {
    this.onDelete(id);
  }

  addTask = () => {
    let timestamp = new Date().valueOf()
    this.setState(currState => ({ tasks: [...currState.tasks, { id: timestamp, title: currState.textInput }] }));
  }

  onChange = (e) => {
    this.setState({ textInput: e.target.value });
  }


  handleChange = (e) => {
    this.setState({ title: e.target.value })
  }

  render() {
    let input = document.querySelector('input');
    input.value = this.state.tile;
    input.onblur = input.value; 
    

    return (
      <div className="TodoList">
        <h1 className="TodoList-header"><input type="text" onChange={this.handleChange} placeholder="enter title" value={this.state.title || ''} /> </h1>
        <ul>
          <Todo
            todo={this.state.tasks.map(({ id, title }) => {
              return (
                <li key={id}>
                  {title}
                  <button onClick={() => this.handleClick(id)}>DELETE</button>
                </li>)
            }
            )}
          />
          <div>
            <input  type="text" onChange={this.onChange} value={this.state.textInput || ''} placeholder="add new task" />
            <button onClick={this.addTask}>ADD TASK</button> 
          </div>
        </ul>
      </div>
    )
  }
}

export default TodoList;
