import React, { useState, useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/fulvoLogo.png"


function Header() {
  const params = useParams();
  console.log(params)
  const nombreUsuario = params.usuario || "si aun no tienes una cuenta puedes registrarte"

  const navigate = useNavigate();
  useEffect(() => {
    obtenerCategorias();
  }, [])

  const [categorias, setCategorias] = useState([]);


  const obtenerCategorias = async () => {
    try {

      const res = await fetch("http://localhost:2000/Fulvo/Categorias");
      const categorias = await res.json()
      setCategorias(categorias.data);
    } catch (error) {
      console.log("Error en la BD: ", error);
    }
  };



  return (
    <>
    <header>
        <div className="welcomeBar">´
          
          <p>Bienvenido, {nombreUsuario}.</p>
          <button onClick={()=> navigate("/Registrar/Categoria")}>Registrar Deporte</button>
          <button onClick={()=> navigate("/Registrar/Equipo")}>Registrar Equipo</button>
          <button onClick={()=> navigate("/Login")}>Login</button>

        </div>

        <figure>
          <figcaption>Fulvo</figcaption>
          <img src={logo} style={{
            width: "100%",
            height: "400px"
          }} alt="Deportes"/>
        </figure>

        <nav className="nav">
          <ul className="ul">

          {(Array.isArray(categorias))
          ?
            categorias.slice(0, 4).map( unaCategoria =>(
                <li className="li"><Link className="a" to={"/Inicio/"+unaCategoria.nombre}>{unaCategoria.nombre}</Link></li>
              )

          )
          
          :<p>Esto no es un Array</p>

          }
          <li className="li"><Link className="a">Mas Deportes</Link>
          <div className="subNav">
            <ul className="ul">
            {(Array.isArray(categorias))
          ?
            categorias.slice(4).map( unaCategoria =>(
                <li className="li"><Link className="a" to={"/Inicio/"+unaCategoria.nombre}>{unaCategoria.nombre}</Link></li>
              )

          )
          
          :null

          }


            </ul>


          </div>
          
          </li>
          </ul>
        </nav>
    </header>
    </>
  );
}

export default Header;