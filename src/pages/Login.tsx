import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../components/Footer';
import Button from '../UI/Button';
import './Login.css';

const API_URL = "https://parseapi.back4app.com/graphql";

const HEADERS = {
  'X-Parse-Application-Id': 'DSiIkHz2MVbCZutKS7abtgrRVsiLNNGcs0L7VsNL',
  'X-Parse-Master-Key': '0cpnqkSUKVkIDlQrNxameA6OmjxmrA72tsUMqVG9',
  'X-Parse-Client-Key': 'zXOqJ2k44R6xQqqlpPuizAr3rs58RhHXfU7Aj20V',
  'Content-Type': 'application/json',
};

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();
  const buttonText = "Login";

  const validateForm = () => {
    let valid = true;

    if (username.trim() === '') {
      setUsernameError('Username is required');
      valid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
      valid = false;
    }
    return valid;
  };

  const handleSignIn = () => {
    if (!validateForm()) {
      return;
    }

    const data = {
      query: `
        mutation LogIn($username: String!, $password: String!) {
          logIn(input: {
              username: $username
              password: $password
          }){
            viewer{
              user{
                id
                createdAt
                updatedAt
                username
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
        const sessionToken = response.data.data.logIn.viewer.sessionToken;
        localStorage.setItem("sessionToken", sessionToken);
        alert(`Response logIn:\n${JSON.stringify(response.data, null, 2)}`);
        navigate('/');
      })
      .catch((error) => {
        console.error('LogIn error:', error);
        if (error.response) {
          alert(`An error occurred during LogIn: ${error.response.data.error}`);
        } else if (error.request) {
          alert("Request error occurred during LogIn");
        } else {
          alert("An error occurred during LogIn");
        }
      });
  };

  return (
    <>
      <div className='containerTitle'>
        <h2>Login</h2>
      </div>
      <div className='formContainer'>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSignIn();
        }}>
          <div className='formFieldsContainer'>
            <label>Username:</label>
            <input
              type='text'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {usernameError && <p className='error'>{usernameError}</p>}
          </div>
          <div className='formFieldsContainer'>
            <label>Password:</label>
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError && <p className='error'>{passwordError}</p>}
          </div>
          <Button type='submit'>{buttonText}</Button>
        </form>
      </div>
      <p className='register-message'>Dont have an account?<NavLink to="/register">Register</NavLink></p>
      <Footer/>
    </>
  );
};

export default Login;
