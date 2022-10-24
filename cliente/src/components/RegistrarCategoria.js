import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegistrarCategoria() {
  const navigate = useNavigate();
  const [categoria, setCategoria] = useState({
    nombre: ""
  });

  const handleChange = async (e) => {
    e.preventDefault();
    setCategoria({
        [e.target.name]: e.target.value
    })

  };

  const registerCategory = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch("http://150.136.246.83:8081/Fulvo/RegistrarCategoria", {
      method: "POST",
      body: JSON.stringify(categoria),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      const resData = await res.json();
      console.log(resData.message);
    }else{
      console.log("algo ha salido mal")
  }
    } catch (error) {
        console.log(error)
    }
   
    
  };
  
  

  

  return (
    <div>
      <h1>Registrar categoria</h1>
      <form onSubmit={registerCategory}>

      <label>nombre</label>
      <input type="text" name="nombre" onChange={handleChange} />

      <button type="submit">REGISTRAR</button>
      </form>
    </div>
  );
}

export default RegistrarCategoria;