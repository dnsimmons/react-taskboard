import React from 'react';

/**
 * TodoItem
 * Functional based React component for a TodoItem
 */
function TodoItem(props){
  return (
    <div className={props.item.completed === true ? 'card bg-info text-white mb-4 shadow' : 'card bg-light mb-4 shadow'}>
      <div className="card-body">
        <label className="custom-control custom-checkbox">
          <input 
            type="checkbox" 
            className="custom-control-input" 
            checked={props.item.completed} 
            onChange={() => props.handleChange(props.item.id)} 
          />
          <span className="custom-control-indicator"></span>
          <span className="custom-control-label">{props.item.text}</span>
        </label>
      </div>
    </div>
  );
}

export default TodoItem;