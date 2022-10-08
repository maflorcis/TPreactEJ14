import React from 'react';
import CardReceta from './Producto/CardReceta';

const Inicio = () => {
    return (
        <div>
            <h1 className="my-5 text-center">BIENVENIDOS</h1>
            <hr></hr>
            <div className="row">
                <CardReceta></CardReceta>

            </div>
        </div>
    );
};

export default Inicio;