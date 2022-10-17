import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegistrarEquipo() {


  const [equipo, setEquipo] = useState({
    nombre: "",
    categoria: ""
  });

  
  useEffect(()=>{
    console.log("analizo", equipo)
  }, [equipo])

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
    console.log(equipo);
console.log("AÑAAAAAAAAA")
    try {
      console.log("anya")

      const res1 = await fetch("http://localhost:2000/Fulvo/RegistrarEquipo", {
      method: "POST",
      body: JSON.stringify(equipo),
      headers: { "Content-Type": "application/json" },
    });
    console.log("jijija")

    if (res1.ok) {
      const resData1 = await res1.json();
      console.log(resData1.message);
    }else{
      console.log("algo ha salido mal al registrar un equipo")
  }

  console.log("AUUUUUU")

  const formData = new FormData();
  formData.append('logoEquipo', file.logoEquipo)
  const res2 = await fetch("http://localhost:2000/subir/"+equipo.nombre, {
    method: "POST",
    body: formData
  })
  console.log("IG DE LA MINITA")

    if (res2.ok) {
      const resData2 = await res2.json();
      console.log(resData2.message);
    }else{
      console.log("algo ha salido mal al subir el logo del equipo")
  }  


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