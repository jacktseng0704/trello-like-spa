import React, { useState } from 'react';
import Form from './Form';
import './AddList.css';
import List from './List';

export default function AddList() {
  const [lists, setLists] = useState([]);
  const addList = (title) => {
    setLists([...lists, title]);
    console.log(title);
  };
  const [showForm, setShowForm] = useState(false);
  const onClick = () => setShowForm(true);

  return (
    <div className='AddListComponent'>
      {lists.map((list) => (
        <List title={list} />
      ))}
      <div className='ListComponent'>
        {showForm ? (
          <Form className='HiddenForm' setShowForm={setShowForm} addList={addList} />
        ) : (
          <button onClick={onClick}>+ Add a list</button>
        )}
      </div>
    </div>
  );
}
