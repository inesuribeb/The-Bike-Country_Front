import { useState } from "react";

function DropDown({className="dropdown",text, children}) {
    // Estado para manejar si está abierto o cerrado
    const [isOpen, setIsOpen] = useState(false);

 
   // Función para alternar el estado del desplegable
   function HandleDropDown() {
    setIsOpen((prevState) => !prevState); // Alterna entre true y false
  }

  return (
    <div className={className} style={{ width: "300px", margin: "20px auto", textAlign: "center" }}>
        <p>{text}</p>
      {/* Botón que controla el desplegable */}
      <button
        onClick={HandleDropDown} // Llama a la función en el evento onClick
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
        }}
      >
        {isOpen ? "-" : "+"}
      </button>

      {/* Contenido del desplegable */}
      {isOpen && (
        <div
          style={{
            marginTop: "10px",
            padding: "10px",
            borderRadius: "5px",
           
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}

export default DropDown;