import React from 'react';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import TodoItem from './TodoItem';
import sampleData from '../data/Sample';

// Add imported Fontawesome icons to the SVG core library
library.add(faTasks);
library.add(faPlus);
library.add(faCheck);
library.add(faTimes);

/**
 * App
 * Class based React component for a App
 */
class App extends React.Component{

  /**
   * constructor
   */
  constructor(){
    super();
    this.state = {
      isLoading: true,
      todos: sampleData
    };

    // Bind the handleChange class method to this
    this.handleChange = this.handleChange.bind(this);

  }

  componentDidMount(){

    // Just a demo so lets fake an API call that took 1500ms so we can show the loading SVG
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500);
  }

  /**
   * handleChange
   * Toggles completed state of a TodoItem.
   * 
   * @param   id TodoItem id property value
   * @return  object
   */
  handleChange(id){
    this.setState(prevState => {
      
      // Map an array of todos to a function toggling the completed state
      const updatedTodos = prevState.todos.map(todo => {
        if(todo.id === id){
          todo.completed = !todo.completed;
        }
        return todo;
      });

      return {
        todos: updatedTodos
      };

    });
  }

  /**
   * render
   * Returns rendered JSX markup.
   *
   * @return string
   */
  render(){

    // Check the loading state and if true then return the loading SVG
    if(this.state.isLoading === true){
      return <img src="loading.svg" className="loading" alt="Loading" />
    }

    // Map the sample data loaded into state to individal item components
    const todoItems = this.state.todos.map(item => 
      <TodoItem key={item.id} item={item} handleChange={this.handleChange} />
    );
    
    // Return JSX markup
    return (
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">
            <FontAwesomeIcon icon="tasks" /> Taskboard
          </h1>
          <hr />     
          {todoItems}
        </div>
      </div>
    );

  }

}

export default App;