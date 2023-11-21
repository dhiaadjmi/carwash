import React, { useState } from 'react';
import axios from 'axios';
import './register.css';
import Logo from "../../assests/l.png"
export const Register = () => {
    const [formData, setFormData] = useState({
          email: '',
        password: '',
        name: '',
        date_of_birth: '',
        address: {
          country: '',
          city: '',
          postal_code: '',
          street: '',
        },
        phone: '',
        profile_photo: '',
      
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
                email: '',
                password: '',
                name: '',
        date_of_birth: '',
        address: {
          country: '',
          city: '',
          street: '',
          postal_code: '',
        },
        phone: '',
        profile_photo: '',
       
              
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
      <title>S'inscrire
</title>
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
      <div className="background"></div>
      <div className="card">
      <div className="logo" >
        <img src={Logo} alt="" />
      </div>
      <h2 style={{ color: '#143d81', fontWeight: 'bold' }}>S'inscrire</h2>

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


            <label>Photo de profil </label>
            <input
              type="text"
              name="profile_photo"
              value={formData.profile_photo}
              onChange={handleChange}
              className="form-input" 
            />

          <button type="submit">SIGN UP</button>
        </form>
        <footer>
Already have an account ? login          
        </footer>
      </div>
    </body>
  </html>

        </div>
    )
}
export default Register;
