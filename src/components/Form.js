import React, { useState } from 'react';
import './Form.css';

export default function Form(props) {
  // console.log(props);
  const [title, setTitle] = useState('');

  function handleClick(event) {
    props.setShowForm(false);
  }

  function handleInputChange(event) {
    setTitle(event.target.value);
  }

  function addList() {
    if (title) {
      props.addList(title);
    }
    setTitle('');
  }

  return (
    <div className='MyForm'>
      <input onChange={handleInputChange} value={title} />
      <div className='MyButtons'>
        <button onClick={addList}>Add List</button>
        <button onClick={handleClick}> X </button>
      </div>
    </div>
  );
}
