import React from 'react';
import './ModelosTop.css';
import './ListaModelos';
import ListaModelos from './ListaModelos';

export default class ModelosTop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            models: []
        }
    }

    componentDidMount() {
        fetch("https://api.waifu.im/search?included_tags=waifu&many=true")
        .then( res => res.json() ) // variable de entrada => variable de salida
        .then( (result) => {
            console.log(result.images)
            this.setState({ // esto es para llamar lo de adentro de api
                models:result.images
            });
        })
    }
    
    render(){
        return (
            <>
            <div className='container-fluid'>
                <div className='row rojo '>
                    {this.state.models.map((model) =>(
                        <ListaModelos model={model}></ListaModelos>
                    ))}
                </div>
            </div>
            </>
        );
    }
}