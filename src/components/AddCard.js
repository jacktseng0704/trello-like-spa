import React, { useState } from 'react';

export default function AddCard(props) {
  const [showCard, setShowCard] = useState(false);
  const [value, setValue] = useState('');
  const onClick = () => setShowCard(true);

  function handleInput(event) {
    setValue(event.target.value);
  }

  function handleClick() {}

  return (
    <div className='CardComponent'>
      {showCard ? (
        <div className='MyForm'>
          <input style={{ marginTop: '10px' }} value={value} onChange={handleInput} />
          <div className='MyButtons'>
            <button onClick={handleClick}>Add Card</button>
            <button onClick={() => setShowCard(false)}> X </button>
          </div>
        </div>
      ) : (
        <button style={{ marginTop: '10px' }} onClick={onClick}>
          + Add a Card
        </button>
      )}
    </div>
  );
}
