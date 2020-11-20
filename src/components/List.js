import React from 'react';
import AddCard from './AddCard';

export default function List(props) {
  return (
    <div className='ListComponent'>
      <div>{props.title}</div>
      <AddCard />
    </div>
  );
}
