import React from 'react';
import './Form.css';

export default function Form(props) {
  console.log(props);

  function handleClick(event) {
    props.setShowForm(false);
  }

  return (
    <div className='MyForm'>
      <input />
      <button onClick={handleClick}> X </button>
    </div>
  );
}
