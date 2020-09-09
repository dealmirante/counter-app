import'@testing-library/jest-dom';
import {getHeroeById, getHeroesByOwner} from '../../08-imp-exp'
import heroes from '../../data/heroes';

describe('pruebas en funciones de heroes', () => {
    test('debe retornar un heore por id ', () => {
        const id = 1
        const heroe= getHeroeById(id);
        
        const heroeData = heroes.find(h => h.id === id);

        expect(heroe).toEqual(heroeData); //porque es un objeto

        
    })
    test('debe retornar undefined si no existe el id ', () => {
        const id = 10;
        const heroe= getHeroeById(id);

        expect(heroe).toBe(undefined);

        
    })
    test('debe retornar un heore por owner ', () => {
        const owner = 'DC';
        const heroe= getHeroesByOwner(owner);
        
        const heroeData = heroes.filter(h => h.owner === owner);        

        expect(heroe).toEqual(heroeData); //porque es un objeto    

    })
    test('debe retornar un heore por owner ', () => {
        const owner = 'Marvel';
        const heroe= getHeroesByOwner(owner);
        
        const heroeData = heroes.filter(h => h.owner === owner);        

        expect(heroe.length).toEqual(heroeData.length); //porque es un objeto      
        expect(heroe.length).toBe(2) ;
    })
    
    
})
