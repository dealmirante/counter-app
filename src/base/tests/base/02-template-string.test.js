
import {getSaludo} from '../../02-template-string';
import'@testing-library/jest-dom';

describe('Pruebas en 02-template-string.js', () => {

    test('pruebas en el metodo getsaludo ', () => {
        const nombre='Gabriel';
        const saludo = getSaludo(nombre);

        expect (saludo).toBe('Hola ' + nombre);
        
    })
    
    
})
