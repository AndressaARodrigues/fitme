import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import RegisterForm from '../components/RegisterForm';

import './Register.css';

const API_URL = "https://parseapi.back4app.com/graphql";

const HEADERS = {
  'X-Parse-Application-Id': 'DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL',
  'X-Parse-Master-Key': '0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9',
  'X-Parse-Client-Key': 'zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V',
  'Content-Type': 'application/json',
};

const Register: React.FC = () => {
  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const navigate = useNavigate();

  const validateForm = () => {
    let valid = true;

    if (username.trim() === '') {
      setUsernameError('Username is required');
      valid = false;
    }

    if (!email.match(/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/)) {
      setEmailError('Invalid email format');
      valid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
      valid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters long');
      valid = false;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      valid = false;
    }

    return valid;
  };

  const handleRegistration = () => {
    if (!validateForm()) {
      return;
    }

    const data = {
      query: `
        mutation SignUp($username: String!, $password: String!) {
          signUp(input: {
            fields: {
              username: $username
              password: $password
            }
          }){
            viewer{
              user{
                id
                createdAt
              }
              sessionToken
            }
          }
        }
      `,
      variables: {
        username: username,
        password: password,
      },
    };

    axios.post(API_URL, data, { headers: HEADERS })
      .then((response) => {
        console.log("GraphQL Response:", response.data);
        alert(`Response registration:\n${JSON.stringify(response.data, null, 2)}`);
        navigate('/login');
      })
      .catch((error) => {
        console.error('Registration error:', error);
        alert(`An error occurred during registration: ${error.response?.data.error}`);
      });
  };

  return (
    <>
      <div className='containerTitle'>
        <h2>Register</h2>
      </div>
      <div className='formContainer'>
        <RegisterForm
          onSubmit={handleRegistration}
          fullname={fullname}
          setFullname={setFullname}
          username={username}
          setUsername={setUsername}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
          usernameError={usernameError}
          emailError={emailError}
          passwordError={passwordError}
          confirmPasswordError={confirmPasswordError}
        />
      </div>
      <p className='register-message'>Dont have and account?<NavLink to="/login">Login</NavLink></p>
      <Footer />
    </>
  );
};

export default Register;
