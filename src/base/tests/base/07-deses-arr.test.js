import'@testing-library/jest-dom';
import {retornaArreglo} from '../../07-deses-arr';

describe('probando 07-deses-arr.js', () => {

    test('probando retornaArreglo ', () => {

        const [letras, numeros] = retornaArreglo();        

        expect(letras).toBe('ABC');
        expect(typeof letras).toBe('string');

        expect(numeros).toBe(123);
        expect(typeof numeros).toBe('number');
        
    })   
    
})
