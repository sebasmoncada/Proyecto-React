import React from "react";
import './Informacion.css';

export default class Informacion extends React.Component{

    constructor(props){
        super(props);
        this.state= {
            escondido: false
        }

        this.toggleEsconder = this.toggleEsconder.bind(this)
    }

    toggleEsconder(){
        this.setState(prevState => ({
            escondido: !prevState.escondido
        }))
    }

    render(){
        return(
            <>
            <div className={"row m-lg-0 m-1 col-12  " + (this.state.escondido ? 'select': 'zoom')}>
                <div className="col-3 d-lg-none"></div>
                <div className="col-6 col-lg-12 carta m-lg-1 m-2 d-flex align-items-center row">
                    <p className="descripcion col-12">{this.props.descripcion}</p>
                </div>
            </div>
            </>
        )
    }
}