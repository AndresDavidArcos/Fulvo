import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    nombre: "",
    clave: "",
  });


  const handleChange = async (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  
  

  const registerUser = async (e) => {
    e.preventDefault();
    try {
        const res = await fetch("http://localhost:2000/Fulvo/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "Content-Type": "application/json" },
    });
    const resData = await res.json();
    if (resData.message === "Usuario registrado exitosamente") {
        navigate("/Login");
    }else{
        console.log("algo ha salido mal")
    } 
    } catch (error) {
        console.log(error)
    }
   
    
  };

  

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={registerUser}>
      <label>Usuario</label>
      <input type="text" name="nombre" onChange={handleChange} />
        
      <label>Contraseña</label>
      <input type="password" name="clave" onChange={handleChange}/>

      <button type="submit">REGISTER</button>
      </form>
    </div>
  );
}

export default Register;