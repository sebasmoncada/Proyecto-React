import React from 'react';
import './Inscripcion.css';

export default class Inscripcion extends React.Component{
    
    constructor(props){
        super(props);

        this.state={
            nombre:'',
            correo:'',
            mensaje:''
        }
        this.submitted=this.submitted.bind(this);
        this.changed=this.changed.bind(this);
        this.formRef= React.createRef(this);
    }

    submitted(event){
        alert("Se envió el formulario de " + this.state.nombre );
        // this.formRef.current.reset();
        // event.preventDefault();
    }

    changed(event){
        this.setState({
            nombre: event.target.value
        })
    }

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
                        <div className='tarj col-7'>
                            <div className=''>
                                <h2 className='titulo '>¿Quieres hacer parte de esta familia?</h2>
                                <form onSubmit={this.submitted}>
                                    <div className="contenido1 form-group my-3">
                                        <label>Nombre</label>
                                        <input type="text" className= "form-control" onChange={this.changed}/>
                                    </div>
                                    <div className='contenido2 form-group my-3'>
                                    <label>Correo</label>
                                    <input type="mail" className= "form-control" />
                                    </div>
                                    <div className="contenido3 form-group my-3">
                                        <label>Mensaje de adicional</label>
                                        <textarea className="form-control"></textarea>
                                    </div>
                                    
                                    <button type="submit" className="btn btn-light mt-2">Enviar</button>

                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            

            </>
        )
    }
}