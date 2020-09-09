import React, {useState}from 'react';
import Proptypes from 'prop-types';


//rafc me crea toda la estructura sin necesidad de hacerlo a manopla


const CounterApp = ({value = 10})=>{

    const [counter, SetCounter] = useState(value)

    const handleAdd = ()=> SetCounter( counter + 1);    

    const Reset = ()=> SetCounter( value ); 

    const handleRest = ()=> SetCounter( counter - 1);

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd }>+1</button>
            <button onClick={Reset}>Reset</button>
            <button onClick={handleRest}>-1</button>

        </>
    )
}

CounterApp.propTypes = {
    value: Proptypes.number
}
export default CounterApp;
