import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
//import Axios from 'axios'; 
import AuthForm from '../components/AuthForm';
import Footer from '../components/Footer';
import './Register.css';

const Register: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async() => {
    // Lógica de registro com os dados do formulário
    
  };

  const fields = [
    {
      label: 'Fullname',
      type: 'text',
      value: fullName,
      onChange: setFullName,
    },
    {
      label: 'Username',
      type: 'text',
      value: username,
      onChange: setUsername,
    },
    {
      label: 'E-mail',
      type: 'email',
      value: email,
      onChange: setEmail,
    },
    {
      label: 'Password',
      type: 'password',
      value: password,
      onChange: setPassword,
    },
    {
      label: 'Confirm Password',
      type: 'password',
      value: confirmPassword,
      onChange: setConfirmPassword,
    },
  ];

  return (
    <div>
      <AuthForm
        title="Register"
        successMessage="Usuário registrado com sucesso!"
        onSubmit={handleRegister}
        fields={fields}
      />
      <p className='login-message'>Already have an account? <NavLink to="/login">Login</NavLink></p>
      <Footer />
    </div>
  );
};

export default Register;
