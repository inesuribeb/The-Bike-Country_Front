import React, { useState , useContext} from 'react';
import Button from '../../components/button/Button';
import { PageContext } from "../../utils/js/context/PageContext";
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { setPage } = useContext(PageContext);
  function handlePage(pageName) {
    setPage(pageName)
  }
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
    <div className="login-container">
      <h1>LOG IN</h1>
      <form onSubmit={handleSubmit}>
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
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="PASSWORD"
            required
          />
        </div>
        <button type="submit" className="login-button">
          LOG IN
        </button>
        <Button onClick= {() =>handlePage('register')} children={"REGISTER"}></Button>
          
      </form>
    </div>
  );
};

export default LoginForm;