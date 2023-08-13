import React, { useState } from 'react';
import '../components/AuthForm.css';
import Button from '../UI/Button';

interface AuthField {
  label: string;
  type: string;
  value: string;
  onChange: (value: string) => void;
}

interface FormData {
  [key: string]: string;
}

interface AuthFormProps {
  title: string;
  successMessage: string;
  onSubmit: (formData: FormData) => void;
  fields: AuthField[];
}

const AuthForm: React.FC<AuthFormProps> = ({ title, successMessage, onSubmit, fields }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleAuth = () => {
    setLoggedIn(true);
    const formData: FormData = {};
    fields.forEach((field) => {
      formData[field.label] = field.value;
    });
    onSubmit(formData);
  };

  return (
    <>
      <div className='containerTitle'>
        <h2>{title}</h2>
      </div>
      <div className='formContainer'>
        {loggedIn ? (
          <p>{successMessage}</p>
        ) : (
          <form onSubmit={handleAuth}>
            {fields.map((field) => (
              <div key={field.label} className='formFieldsContainer'>
                <label>{field.label}:</label>
                <input
                  type={field.type}
                  value={field.value}
                  onChange={(e) => field.onChange(e.target.value)}
                />
              </div>
            ))}
            <Button onClick={handleAuth}>{title}</Button>
          </form>
        )}
      </div>
    </>
  );
};

export default AuthForm;
