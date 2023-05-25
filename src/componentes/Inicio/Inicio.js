import React from 'react';
import './Inicio.css';
import Informacion from '../Informacion/Informacion';

export default class Inicio extends React.Component{
    
    render(){
        return (
            <>
            <div className='contenido'>
                <div className="row">
                    <div className='col-lg-9 col-12 row'>
                        <div className='logo1'>
                            <img className="logo" src="LOGO.png" width="450px"></img>
                        </div>
                        <div className='logo2 col-4'>
                        <img className="logo2" src="LOGO2.png" width="280px"></img>
                        </div>
                        <div className='text1 col-7'>
                            <h1>Si tienes experiencia como modelo web y buscas tener más libertar, acá podrás sacar a relucir ese potencial</h1>
                        </div>
                    </div>
                    <div className='row col-lg-3 col-12 d-flex align-items-center'>
                        <Informacion            
                        descripcion="¿Quieres ganar más dinero con nosotros y posicionarte adecuadamente?"/>
                        <Informacion 
                        descripcion="¿Trabajas en un studio fisico y se te quedan con aproximadamente la mitad de tus ganancias y además, no te brindan ya ayuda porque tienes buena experiencia?"/>
                        <Informacion 
                        descripcion="Tienes tu computadora, camara y un espacio para trabajar..."/>
                    </div>
                </div>
            </div>
            </>
        );
    }
}
  
