import { useState } from "react";
import "./DropDown.css";

function DropDown({ className = "dropdown", text, children }) {
  // Estado para manejar si está abierto o cerrado
  const [isOpen, setIsOpen] = useState(false);


  // Función para alternar el estado del desplegable
  function HandleDropDown() {
    setIsOpen((prevState) => !prevState); // Alterna entre true y false
  }

  return (
    <div className="dropdown-container">
      <div className="dropdown-header">
        <p className="dropdown-text">{text}</p>
        <button
          onClick={HandleDropDown}
          className={`dropdown-button ${isOpen ? 'dropdown-button--open' : ''}`}
        >
          {isOpen ? '-' : '+'}
        </button>
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {children}
        </div>
      )}
    </div>
  );
}
export default DropDown;