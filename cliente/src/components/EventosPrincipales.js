import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EventosPrincipales() {
  const navigate = useNavigate();
  const params = useParams();
  const categoria = params.categoria || "Futbol";

  
  const [eventos, setEventos] = useState([]);

  const obtenerEventosPrincipales = async () =>{
    try {
      const res = await fetch("http://localhost:2000/Fulvo/UltimosEventos/"+categoria);
      const lastEvents = await res.json()
      setEventos(lastEvents.data);
    } catch (error) {
      console.log(error);
    }

 
}
  useEffect(() => {
    obtenerEventosPrincipales();
  }, []);

  return (
    <section>
      <h1>EVENTOS PRINCIPALES DEL {categoria} </h1>
      {eventos.map( unEvento => (
        <article key={unEvento._id}>

          <div className="equipo1">
            <figure>
              <figcaption>{unEvento.equipo1.nombre}</figcaption>
              <img  src={"http://localhost:2000/Fulvo/Imagenes/"+unEvento.equipo1.nombre+".png"}  alt={unEvento.equipo1.nombre}/>
            </figure>
            <p>{unEvento.equipo1.marcador}</p>
          </div>

        <div className="midInfo">
          <p>VS</p>
          <p>-</p>
          <p>{unEvento.fecha}</p>
        </div>

          <div className="equipo2">
          <figure>
              <figcaption>{unEvento.equipo2.nombre}</figcaption>
              <img  src={"http://localhost:2000/Fulvo/Imagenes/"+unEvento.equipo2.nombre+".png"}  alt={unEvento.equipo2.nombre}/>
            </figure>
            <p>{unEvento.equipo2.marcador}</p>
          </div>

          

        </article>
      )



      )}

      <div className="gameOptions">
        <button onClick={() => navigate("/RegistrarEvento")}>REGISTRAR JUEGO</button>
        <button onClick={() => navigate("/Eventos")}>VER TODOS LOS JUEGOS</button>

      </div>


    </section>
  );
}

export default EventosPrincipales;