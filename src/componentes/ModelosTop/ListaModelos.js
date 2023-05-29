import React from 'react';
import './ListaModelos.css';

export default class ListaModelos extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            seleccion:false
        }

        this.toggleSeleccionar=this.toggleSeleccionar.bind(this)
    }

    toggleSeleccionar(){
        this.setState(prevState => ({
            seleccion: !prevState.seleccion
        }))
    }
    
    render(){
        return (
            <>
                <div className="col-3 d-lg-none"></div> 
                <div className='card col-lg-3 col-6 m-5  ' >
                    <div className='row '>
                        <img className=' col-4 imagenModeloTop' src={this.props.model.url} ></img>
                        <div className='nombre col-6 '>
                        {(this.props.model.artist == null ? 'Anónimo' : this.props.model.artist.name)}</div>
                        <div className={"caract "+ (this.state.seleccion ? '' : 'd-none')}>
                            <div>{(this.props.model.artist) == null ? 'No tiene' : <a href={this.props.model.artist.twitter} style={{ color: 'white'}}>Twitter</a>}</div>
                            <div >{ <a href={this.props.model.source} style={{ color: 'white'}}>Sígueme</a>}</div>
                        </div>
                        <button className="btn btn-dark" onClick={this.toggleSeleccionar}>{(this.state.seleccion ? 'Ver menos' : 'Ver más')}</button>
                    </div>
                </div>
            </>
        );
    }
}