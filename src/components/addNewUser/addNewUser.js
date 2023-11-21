import React, { useState } from 'react';
import './addNewUser.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'; 
import Logo from "../../assests/l.png"
const AddNewUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        date_of_birth: '',
        address: {
          street: '',
          country: '',
          city: '',
          postal_code: '',
        },
        phone: '',
        profile_photo: '',
        email: '',
        password: '',
        role: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
      
        if (name.startsWith("address.")) {
          const addressField = name.split(".")[1];
      
          setFormData((prevData) => ({
            ...prevData,
            address: {
              ...prevData.address,
              [addressField]: value,
            },
          }));
        } else {
          setFormData((prevData) => ({
            ...prevData,
            [name]: value,
          }));
        }
      };
      
      
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Effectuez l'appel à l'API POST pour ajouter l'utilisateur ici
        axios.post('http://localhost:5000/users/create', formData)
          .then((response) => {
         
            console.log('Utilisateur ajouté avec succès :', response.data);
     
            setFormData({
                name: '',
        date_of_birth: '',
        address: {
          street: '',
          country: '',
          city: '',
          postal_code: '',
        },
        phone: '',
        profile_photo: '',
        email: '',
        password: '',
        role: '',
              
            });
          })
          .catch((error) => {
            console.error('Erreur lors de l\'ajout de l\'utilisateur :', error);
          });
      };
      return (
        <div>
       

       <html lang="en">
    <head>
      <title>Ajouter un utilisateur
</title>
    
    </head>
    <body>
      <div className="background"></div>
      <div className="card"  >
      <div className="logo" >
        <img src={Logo} alt="" />
      </div>
        <h2>Ajouter un utilisateur</h2>
        <form className="form" onSubmit={handleSubmit}>
   
            <label>Email</label>
            <input
              type=""
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="form-input" 
            />
       

            <label>Mot de passe</label>
            <input 
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="form-input" 

            />

        <label>Nom</label>
            <input 
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input" 
            />
     
     <label>Date de Naissance</label>
            <input
            
              type="date"
              name="date_of_birth"
              value={formData.date_of_birth}
              onChange={handleChange}
              className="form-input" 
            />



<label>Adresse</label>
           
<input
  type="text"
  name="address.country"
  placeholder="Pays"
  value={formData.address.country}
  onChange={handleChange}
  className="form-input" 
/>
<input
  type="text"
  name="address.city"
  placeholder="Ville"
  value={formData.address.city}
  onChange={handleChange}
  className="form-input" 
/>
<input
  type="text"
  name="address.postal_code"
  placeholder="Code Postal"
  value={formData.address.postal_code}
  onChange={handleChange}
  className="form-input" 
/>
<input
  type="text"
  name="address.street"
  placeholder="Rue"
  value={formData.address.street}
  onChange={handleChange}
  className="form-input" 
/>
            <label>Téléphone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input" 
            />


            <label>Role</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="form-input" 
            />
   <button type="submit" >
  Enregistrer l'utilisateur  <FontAwesomeIcon icon={faUser} />
</button>       

        </form>
     
      </div>
    </body>
  </html>
        </div>
      );
    };

export default AddNewUser;
