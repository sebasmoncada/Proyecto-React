import React from 'react';
import './Pagos.css';

export default class Pagos extends React.Component{
    
    render(){
        return (
            <>
            <div className='contenido '>
                <div className='container-fluid'>
                    
                    <div className="row">
                        <div className='col-lg-9 col-12 row'>
                            <div className='logo1'>
                                <img className="logo" src="LOGO.png" width="450px"></img>
                            </div>
                            <div className='logo2 col-4'>
                            <img className="logo2" src="LOGO2.png" width="280px"></img>
                            </div>
                            <div className='rec row col-7 d-flex align-items-center'>
                                <h1 className='col-12 d-flex align-items-center'>Métodos de pago</h1>
                                <ul>
                                    <li>Pagamos al 90% a quienes estén a paz y Salvo con nosotros.</li>
                                    <li>El precio del dólar que usamos es el de los dólares recibidos de la quincena anterios, y se pagan al mismo precio que los recibimos (aproximadamente $200 pesos colombianos por debajo del día que recibimos).</li>
                                    <li>Se pueden solicitar adelantos una vez el dinero se refleje en nuestras Master siempre y cuando el valor sea igual o mayor a $20.000 pesos colombianos.</li>
                                    <li>El horario para solicitar adelantos es 8am a 6 pm de lunes a viernes, 10am a 2pm sábado domingos y festivos.</li>
                                    <li>El adelanto se realiza el mismo día, en el transcurso del día.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
    }
}