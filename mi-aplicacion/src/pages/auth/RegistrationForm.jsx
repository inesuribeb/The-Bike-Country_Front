import React, { useState } from 'react';
import './RegistrationForm.css';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    country: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
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
          <div className="input-container">
            {(focusedField === 'name' || formData.name) && (
              <label 
                htmlFor="name"
                className={focusedField === 'name' || formData.name ? 'active-label' : ''}
              >
                NAME
              </label>
            )}
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => handleFocus('name')}
              onBlur={handleBlur}
              placeholder={focusedField === 'name' ? '' : 'NAME'}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-container">
            {(focusedField === 'surname' || formData.surname) && (
              <label 
                htmlFor="surname"
                className={focusedField === 'surname' || formData.surname ? 'active-label' : ''}
              >
                SURNAME
              </label>
            )}
            <input
              type="text"
              name="surname"
              id="surname"
              value={formData.surname}
              onChange={handleChange}
              onFocus={() => handleFocus('surname')}
              onBlur={handleBlur}
              placeholder={focusedField === 'surname' ? '' : 'SURNAME'}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-container">
            {(focusedField === 'country' || formData.country) && (
              <label 
                htmlFor="country"
                className={focusedField === 'country' || formData.country ? 'active-label' : ''}
              >
                COUNTRY
              </label>
            )}
            <input
              type="text"
              name="country"
              id="country"
              value={formData.country}
              onChange={handleChange}
              onFocus={() => handleFocus('country')}
              onBlur={handleBlur}
              placeholder={focusedField === 'country' ? '' : 'COUNTRY'}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-container">
            {(focusedField === 'email' || formData.email) && (
              <label 
                htmlFor="email"
                className={focusedField === 'email' || formData.email ? 'active-label' : ''}
              >
                EMAIL
              </label>
            )}
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus('email')}
              onBlur={handleBlur}
              placeholder={focusedField === 'email' ? '' : 'EMAIL'}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-container">
            {(focusedField === 'phone' || formData.phone) && (
              <label 
                htmlFor="phone"
                className={focusedField === 'phone' || formData.phone ? 'active-label' : ''}
              >
                PHONE
              </label>
            )}
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              onFocus={() => handleFocus('phone')}
              onBlur={handleBlur}
              placeholder={focusedField === 'phone' ? '' : 'PHONE'}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-container">
            {(focusedField === 'password' || formData.password) && (
              <label 
                htmlFor="password"
                className={focusedField === 'password' || formData.password ? 'active-label' : ''}
              >
                PASSWORD
              </label>
            )}
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              onFocus={() => handleFocus('password')}
              onBlur={handleBlur}
              placeholder={focusedField === 'password' ? '' : 'PASSWORD'}
              required
            />
          </div>
        </div>

        <div className="form-group">
          <div className="input-container">
            {(focusedField === 'confirmPassword' || formData.confirmPassword) && (
              <label 
                htmlFor="confirmPassword"
                className={focusedField === 'confirmPassword' || formData.confirmPassword ? 'active-label' : ''}
              >
                CONFIRM PASSWORD
              </label>
            )}
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              onFocus={() => handleFocus('confirmPassword')}
              onBlur={handleBlur}
              placeholder={focusedField === 'confirmPassword' ? '' : 'CONFIRM PASSWORD'}
              required
            />
          </div>
        </div>

        <button type="submit" className="create-account-button">
          CREATE MY ACCOUNT
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;