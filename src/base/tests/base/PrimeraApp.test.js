import React from 'react';
//import { render } from '@testing-library/react';
import PrimeraApp from '../../../PrimeraApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';


describe('pruebas en el componente PrimeraApp', () => {
    // ctrl + C
    // test('Debe mostrar el mensaje "Hola, soy Gabriel" ', () => {
    //     const saludo = "Hola, soy Gabriel";
    //     const {getByText} = render(<PrimeraApp saludo = {saludo}/>);
    //     expect( getByText(saludo) ).toBeInTheDocument();        
    // });
    test('Debe de mostrar el componente <PrimeraApp/> correctamente', () => {
        // shallow funciona como render
        const saludo = "Hola, soy Gabriel";
        const wrapper = shallow(<PrimeraApp saludo={saludo}/>);
        // al ejecutar este expect me genera una carpeta _snapshots_
        // npm install --save-dev enzyme-to-json
        expect(wrapper).toMatchSnapshot();
        
        
    })
    test('Debe mostrarse el subtitulo enviado por props ', () => {
        const saludo = "Hola, soy Gabriel";
        const subTitulo = "Soy un subtitulo por defecto (defaultProps)";        

        const wrapper = shallow(
            <PrimeraApp 
                saludo={saludo} 
                subtitulo={subTitulo}
            />
        );

        // el find actua como el querySelector
        const textoParrafo = wrapper.find('p').text();

        expect(subTitulo).toBe(textoParrafo);


        
    })
    
    
    
});
