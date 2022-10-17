import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
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
        const res = await fetch("http://localhost:2000/Fulvo/login", {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" },
          });
          if (res.ok) {
            const resData = await res.json();
            const userLogged = resData.data;
            navigate("/Inicio/"+userLogged.nombre+"/Futbol");
        }else{
            console.log("algo ha salido mal")
        }
      
          
    } catch (error) {
        console.log(error)
    }
  
    
  };

  

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={registerUser}>
      <label>Usuario</label>
      <input type="text" name="nombre" onChange={handleChange} />
        
      <label>Contraseña</label>
      <input type="password" name="clave" onChange={handleChange}/>

      <button type="submit">LOGIN</button>
      </form>

      <p>¿Aun no tienes una cuenta?</p>
      <button onClick={() => navigate("/Register")}>REGISTRATE</button>

    </div>
  );
}

export default Login;