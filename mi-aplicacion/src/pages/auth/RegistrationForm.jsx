import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    usuario: '',
    nombre: '',
    apellidos: '',
    country: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="registration-container">
      <h1 className="register-title">PERSONAL DATA</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="USERNAME"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="NAME"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="surname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="SURNAME"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="COUNTRY"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="EMAIL"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="PHONE"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="PASSWORD"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="CONFIRM PASSWORD"
            required
          />
        </div>
        <button type="submit" className="create-account-button">
          CREATE MI ACCOUNT
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;