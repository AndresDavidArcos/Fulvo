import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegistrarEquipo() {
  const navigate = useNavigate();
  const [equipo, setEquipo] = useState({
    nombre: "",
    categoria: ""
  });

  const [file, setFile] = useState({
    logoEquipo: ""
  });

  const onFileChange = (e) => {
    setFile({ logoEquipo: e.target.files[0] })
  }

  const handleChange = (e) => {
    e.preventDefault();
    setEquipo({
       ...equipo, [e.target.name]: e.target.value
    })

  };

  const registerTeam = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://150.136.246.83:8081/Fulvo/RegistrarEquipo", {
    method: "POST",
    body: JSON.stringify(equipo),
    headers: { "Content-Type": "application/json" },
  });

  if (res.ok) {
    const resData = await res.json();
    console.log(resData.message);
  }else{
    console.log("algo ha salido mal")
}
  } catch (error) {
      console.log("atrapado", error)
  }
   
    try {

      const formData = new FormData();
      formData.append('logoEquipo', file.logoEquipo)
      const res = await fetch("http://150.136.246.83:8081/subir/"+equipo.nombre, {
        method: "POST",
        body: formData
      });
      const resData = await res.json();
      console.log("Exito", resData)
    } catch (error) {
      console.log(error)
    }
    
  };
  
  

  

  return (
    <div>
      <h1>Registrar equipo</h1>
      <form onSubmit={registerTeam}>

      <label>categoria</label>
      <input type="text" name="categoria" onChange={handleChange} />

      <label>nombre</label>
      <input type="text" name="nombre" onChange={handleChange} />

      <label>Logo</label>
      <input type="file" name="logoEquipo" onChange={onFileChange} />        

      <button type="submit">REGISTRAR</button>
      </form>


    </div>
  );
}

export default RegistrarEquipo;