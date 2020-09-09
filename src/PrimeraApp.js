import React from 'react'; //imr tab
import Proptypes from 'prop-types';
// <> es la forma abreviada de usar fragment sin tener que importarlo

const PrimeraApp = ({saludo, subtitulo})=> {

    return (
        <>             
            <h1>{saludo}</h1>
            <h2>Esto es un parrafo</h2>
            <p>{subtitulo}</p>
        </>
    ) 
}

PrimeraApp.propTypes = {
    saludo: Proptypes.string.isRequired
}

PrimeraApp.defaultProps = {
    subtitulo: "Soy un subtitulo por defecto (defaultProps)"
}

export default PrimeraApp;