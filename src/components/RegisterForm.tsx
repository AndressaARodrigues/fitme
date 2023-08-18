import React from 'react';
import Button from '../UI/Button';
import './RegisterForm.css'

interface RegisterFormProps {
  onSubmit: (username: string, password: string) => void;
  fullname: string;
  setFullname: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
  usernameError: string;
  passwordError: string;
  emailError: string;
  confirmPasswordError: string;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  onSubmit,
  fullname,
  setFullname,
  username,
  setUsername,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  usernameError,
  passwordError,
  emailError,
  confirmPasswordError,
}) => {
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSubmit(username, password);
    }}>
      <div className='formFieldsContainer'>
        <label>Fullname:</label>
        <input
          type='text'
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
      </div>
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
        <label>Email:</label>
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailError && <p className='error'>{emailError}</p>}
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
      <div className='formFieldsContainer'>
        <label>Confirm password:</label>
        <input
          type='password'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {confirmPasswordError && <p className='error'>{confirmPasswordError}</p>}
      </div>
      <Button type="submit">Register</Button>
    </form>
  );
};

export default RegisterForm;
