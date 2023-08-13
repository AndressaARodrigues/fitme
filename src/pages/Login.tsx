import { useState } from 'react';
import { NavLink } from 'react-router-dom'; 
import AuthForm from '../components/AuthForm';
import Footer from '../components/Footer';
import './Login.css';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    // Lógica de autenticação para login
  };

  const fields = [
    {
      label: 'Usuário',
      type: 'text',
      value: username, 
      onChange: setUsername, 
    },
    {
      label: 'Senha',
      type: 'password',
      value: password, 
      onChange: setPassword, 
    },
  ];

  return (
    <>
    <AuthForm
      title="Login"
      successMessage="Usuário logado com sucesso!"
      onSubmit={handleLogin}
      fields={fields}
    />
    <p className='register-message'>Dont have and account?<NavLink to="/register">Register</NavLink></p>
    <Footer/>
    </>
  );
};

export default Login;
