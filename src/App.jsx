// src/App.js
import React, { useState } from 'react';
import Card from './components/Card';
import image from './assets/Bret.svg'

import initialData from './data/data'

const App = () => {
  const [data, setData] = useState(initialData);

  const handleEditSave = (editedData) => {
    // Update the state with the edited data
    const updatedData = data.map((item) =>
      item.id === editedData.id ? editedData : item
    );
    setData(updatedData);
  };

  const handleDelete = (id) => {
    // Remove the item with the specified id from the state
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      {data.map((item) => (
        <Card 
          key={item.id} 
          data={item} 
          onEditSave={handleEditSave} 
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default App;
