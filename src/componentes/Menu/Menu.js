import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';


export default class Menu extends React.Component{
    render(){
        return(
            <>
                <div className="row menu fixed-top">
                    <div className="col-lg-6 col-12 d-flex ">
                        <img className="imagen" src="Titulob.png" ></img>
                    </div>
                    <div className=" row col-lg-5 col-12 d-flex align-items-center ">
                        
                        <Link to="/" className="mx-3 col-lg-1 text-center">Inicio</Link>
                        <Link to="/Modelos" className="mx-3 col-lg-2 text-center">Modelos Top</Link>
                        <Link to="/pagos" className="mx-3 col-lg-1 text-center">Pagos</Link>
                        <Link to="/Qsomos" className="mx-3 col-lg-2 text-center">¿Quienes Somos?</Link>
                        <Link to="/Inscripcion" className="mx-3 p-2 col-lg-1 text-center">Inscripción</Link>
                    </div>
                </div>

            </>
        )
    }
}