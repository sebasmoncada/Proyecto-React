import React from 'react';
import './QuienesSomos.css';

export default class QuienesSomos extends React.Component{
    
    render(){
        return (
            <>
            <div className='contenido container-fluid'>
                <div className="row">
                    <div className='col-lg-9 col-12 row'>
                        <div className='logo1'>
                            <img className="logo" src="LOGO.png" width="450px"></img>
                        </div>
                        <div className='logo2 col-4'>
                        <img className="logo2" src="LOGO2.png" width="285px"></img>
                        </div>
                        <div className='row col-7 d-flex align-items-center'>
                            <h1 className='col-12'>¿Quienes Somos?</h1>
                            <h3>
                                Más que un studio de modelaje web cam, somos una plataforma de pagos, donde manejamos únicamente modelos satelites (trabajo desde casa) y estás personas tienen el beneficio de pagos del 90% con beneficios de adelantos.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}