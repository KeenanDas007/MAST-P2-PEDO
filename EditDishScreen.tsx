import React, { useState } from 'react';

interface EditDishScreenProps {
  onBack: () => void;
}

const EditDishScreen: React.FC<EditDishScreenProps> = ({ onBack }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Save logic would go here
    onBack();
  };

  return (
    <div className="screen">
      <div className="screen-header">
        <button onClick={onBack} className="back-button">BACK TO DASHBOARD</button>
        <h2>EDIT DISH</h2>
      </div>

      <form onSubmit={handleSave} className="edit-form">
        <div className="input-group">
          <label>DISH NAME</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>DESCRIPTION</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>CATEGORY</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>PRICE</label>
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            step="0.01"
            required
          />
        </div>

        <div className="input-group">
          <label>UPLOAD IMAGE</label>
          <input type="file" accept="image/*" />
        </div>

        <div className="form-actions">
          <button type="submit" className="save-button">SAVE</button>
        </div>
      </form>
    </div>
  );
};

export default EditDishScreen;