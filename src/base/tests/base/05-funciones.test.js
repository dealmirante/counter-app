import {getUser, getUsuarioActivo} from '../../05-funciones'
import'@testing-library/jest-dom';

describe('probando funciones', () => {

    test('pruebo la funcion getUser ', () => {

        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'}  


        const user=getUser()
        
        expect(userTest).toEqual(user);    
        //no puedo comparar objetos con toBe, usamos toEqual
    })

    test('probando GetUsuarioActivo ', () => {

        const nombre = 'Gabriel';

        const user= getUsuarioActivo(nombre)  

        expect(user).toEqual({
            uid: 'ABC567',
            username: nombre
        })
        
    })
    
})
