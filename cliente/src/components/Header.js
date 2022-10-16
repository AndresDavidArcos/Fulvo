import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  useEffect(() => {
    obtenerCategorias();
  }, [])

  const [categorias, setCategorias] = useState([]);


  const obtenerCategorias = async () => {
    try {

      const res = await fetch("http://localhost:2000/Fulvo/Categorias");
      const categorias = await res.json()
      console.log("wtf bro", categorias.data)
      setCategorias(categorias.data);
    } catch (error) {
      console.log("Error en la BD: ", error);
    }
  };



  return (
    <>
    <header>
        <div className="welcomeBar">´
          
          <p>Bienvenido</p>
          <button onClick={()=> navigate("/Registrar/Categoria")}>Registrar Deporte</button>
          <button>Registrar Equipo</button>
          <button>Login</button>

        </div>

        <figure>
          <figcaption>Fulvo</figcaption>
          <img src="./images/fulvoLogo.png" alt="Deportes"/>
        </figure>

        <nav>
          <ul>

          {(Array.isArray(categorias))
          ?
            categorias.slice(0, 4).map( unaCategoria =>(
                <li><Link className="a" to={"/Inicio/"+unaCategoria.nombre}>{unaCategoria.nombre}</Link></li>
              )

          )
          
          :<p>Esto no es un Array</p>

          }
          </ul>
        </nav>
    </header>
    </>
  );
}

export default Header;