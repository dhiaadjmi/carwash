import React, { useState } from 'react';
import './login.css';
import { useAuth } from '../../contexts/authContext';
import { useNavigate } from 'react-router-dom';
import Logo from "../../assests/l.png"
function Login() {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:5000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.status === 200) {
        const data = await response.json();
        const token = data.token;
  
      
  
        login(token);
  
        localStorage.setItem('token', token);
     
  
        navigate('/users');
      } else {
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  
  return (
  <html lang="en">
    <head>
      <title>Sign in
</title>
      <link rel="stylesheet" href="styles.css" />
    </head>
    <body>
      <div className="background"></div>
      <div className="card">
    
      <div className="logo" >
        <img src={Logo} alt="" />
      </div>
        <h2>Se Connecter</h2>
        <form className="form" onSubmit={handleSubmit}>
        <input
          type=""
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
     
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          <button type="submit">Se Connecter</button>
        </form>
        <footer>
Vous n'avez pas un compte ?<br></br> cliquer pour  créer ?         
        </footer>
      </div>
    </body>
  </html>



  );

}

export default Login;