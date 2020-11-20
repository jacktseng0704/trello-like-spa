import React, { useState } from 'react';
import AddCard from './AddCard';
import { nanoid } from 'nanoid';
import './List.css';

export default function List(props) {
  const [cards, setCards] = useState([]);
  const addCard = (value) => {
    if (value) {
      setCards([...cards, value]);
      console.log(value);
    }
  };
  return (
    <div className='CardComponent'>
      <div>{props.title}</div>
      {cards.map((card) => (
        <div className='MyCard' key={nanoid()}>
          {card}
        </div>
      ))}
      <AddCard addCard={addCard} />
    </div>
  );
}
