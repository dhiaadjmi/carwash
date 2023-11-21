import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faTimes } from '@fortawesome/free-solid-svg-icons';
import './editStation.css'; 
const EditStation = ({ station, onClose, onSubmit }) => {
  const [editFormData, setEditFormData] = useState({
    name: station.name,
    phones: {
      phone1: station.phones.phone1,
      phone2: station.phones.phone2,
    },
    email: station.email,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name.startsWith("phones.")) {
      const phoneField = name.split(".")[1];

      setEditFormData((prevData) => ({
        ...prevData,
        phones: {
          ...prevData.phones,
          [phoneField]: value,
        },
      }));
    } else {
      setEditFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = () => {
    onSubmit(editFormData);
  };

  return (
    <div className="form-container">
      <div className="edit-station-modal">
        <h2>Modifier la station de service</h2>
        <form>
          <div>
            <label>Nom:</label>
            <input
              type="text"
              name="name"
              value={editFormData.name}
              onChange={handleInputChange}
              className="edit-input"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <label>Téléphone 1:</label>
            <input
              type="text"
              name="phones.phone1"
              value={editFormData.phones.phone1}
              onChange={handleInputChange}
              className="edit-input"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <label>Téléphone 2:</label>
            <input
              type="text"
              name="phones.phone2"
              value={editFormData.phones.phone2}
              onChange={handleInputChange}
              className="edit-input"
              style={{ width: '100%' }}
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={editFormData.email}
              onChange={handleInputChange}
              className="edit-input"
              style={{ width: '100%' }}
            />
          </div>
          <button type="button" onClick={handleSubmit} className="action-button">
            Enregistrer <FontAwesomeIcon icon={faGasPump} />
          </button>
          <button type="button" onClick={onClose} className="action-button annuler">
            Annuler <FontAwesomeIcon icon={faTimes} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditStation;
