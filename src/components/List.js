import React, { useState } from 'react';
import AddCard from './AddCard';
import { nanoid } from 'nanoid';
import './List.css';
import { Draggable } from 'react-beautiful-dnd';

export default function List(props) {
  const id = nanoid();
  console.log(props);
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
      {cards.map((card, index) => (
        <Draggable key={id} Draggable={id} index={index}>
          {(provided) => (
            <div
              {...provided.draggableProps}
              {...provided.dragHandleProps}
              ref={provided.innerRef}
              className='MyCard'
              key={nanoid()}>
              {card}
              {provided.placeholder}
            </div>
          )}
        </Draggable>
      ))}
      <AddCard addCard={addCard} />
    </div>
  );
}
