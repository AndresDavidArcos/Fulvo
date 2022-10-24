import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RegistrarEvento() {
  const navigate = useNavigate();
  const [evento, setEvento] = useState({
    equipo1: {
        nombre: "",
        marcador: ""
    },
    equipo2: {
        nombre: "",
        marcador: ""
    },

    categoria: ""
  });

  useEffect(() => {

  }, []);

  const handleChange = async (e, team) => {
    switch(team){
        case "t1": 
        setEvento({ ...evento, equipo1: {
                ...evento.equipo1,
                [e.target.name]: e.target.value
            }
        
        })
        break;

        case "t2": 
        setEvento({ ...evento, equipo2: {
                ...evento.equipo2,
                [e.target.name]: e.target.value
            }
        
        })

        break;

        default: 
        setEvento({ ...evento,
          [e.target.name]: e.target.value
  
              })        
    }

  };

  const registerEvent = async (e) => {
    e.preventDefault();
    try {
        const resData = await fetch("http://150.136.246.83:8081/Fulvo/RegistrarEvento", {
      method: "POST",
      body: JSON.stringify(evento),
      headers: { "Content-Type": "application/json" },
    });

    if (resData.ok) {
      const res = await resData.json();
      console.log(res.message);
    }else{
      console.log("algo ha salido mal")
  }
    } catch (error) {
        console.log(error)
    }
   
    
  };
  
  

  

  return (
    <div>
      <h1>Registrar juego</h1>
      <form onSubmit={registerEvent}>

      <label>categoria</label>
      <input type="text" name="categoria" onChange={handleChange} />

      <h2>Equipo 1</h2>
      <label>nombre</label>
      <input type="text" name="nombre" onChange={(event) => handleChange(event, "t1")} />
        
      <label>marcador</label>
      <input type="number" name="marcador" onChange={(event) => handleChange(event, "t1")} />

      <h2>Equipo 2</h2>
      <label>nombre</label>
      <input type="text" name="nombre" onChange={(event) => handleChange(event, "t2")} />
        
      <label>marcador</label>
      <input type="number" name="marcador" onChange={(event) => handleChange(event, "t2")} />

      <button type="submit">REGISTRAR</button>
      </form>
    </div>
  );
}

export default RegistrarEvento;