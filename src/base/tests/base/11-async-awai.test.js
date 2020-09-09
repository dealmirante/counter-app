import'@testing-library/jest-dom';
import {getImagen} from '../../11-async-await'

describe('probando async await', () => {

    test('debe retornar una url de la imagen',async () => {
        //getImagen retorna una promesa

        const url = await getImagen();
        console.log(url);
        expect(url.includes('https://')).toBe(true);
        
    })
    
    
})
