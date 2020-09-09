import React from 'react';
//import { render } from '@testing-library/react';
import CounterApp from '../../../CounterApp';
import { shallow } from 'enzyme';
import '@testing-library/jest-dom';

describe('Pruebas sobre CounterApp', () => {

    let wrapper = shallow(<CounterApp/>);

    beforeEach( () => {
        wrapper = shallow(<CounterApp/>);
    })


    test('Debo mostrar CounterApp correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();  

    });

    test('Debo de mostrar el valor por defecto 100', () => {        
        
        const wrapper = shallow(<CounterApp value={100}/>);
        const textValue = wrapper.find('h2').text().trim();       

        expect(textValue).toBe('100');
        
    });

    test('verificar el correcto funcionamiento del boton +1', () => {

        wrapper.find('button').at(0).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('11');
        
    });

    test('verificar el correcto funcionamiento del boton -1', () => {

        wrapper.find('button').at(2).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('9');
        
    });

    test('verificar el correcto funcionamiento del boton reset', () => {

        const wrapper = shallow(<CounterApp value={100}/>);
        wrapper.find('button').at(0).simulate('click');
        wrapper.find('button').at(1).simulate('click');
        const counterText = wrapper.find('h2').text().trim();
        expect(counterText).toBe('100');
        
    });
    
    
});

