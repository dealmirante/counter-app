// test + tab
// cuando instalamos react se instalan las librerias de jest, encargada de las pruebas
describe('prueba en el archivo demo.test.js', () => {

    test('esta es mi primera prueba ', () => {

        const mensaje = "hola mundo";
    
        const mensaje2= "hola mundo"
    
        expect(mensaje).toBe(mensaje2);
        
    })
    
})


