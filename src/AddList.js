import React, { useState } from 'react';
import Form from './Form';
import './AddList.css';

export default function AddList() {
  const [showForm, setShowForm] = useState(false);
  const onClick = () => setShowForm(true);

  return (
    <div className='AddListComponent'>
      <button onClick={onClick}>+ Add a list</button>
      {showForm ? (
        <Form className='HiddenForm' setShowForm={setShowForm} showForm={showForm} />
      ) : null}
    </div>
  );
}
