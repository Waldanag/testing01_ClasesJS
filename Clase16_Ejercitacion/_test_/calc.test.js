const {suma, restar, dividir, multiplicar} = require("../calc"); 


describe('PRUEBAS DE CALCULADORA', ()=>{
test( 'Realizamos la suma', ()=>{
    expect(suma(1,2)).toBe(3); 
}); 

test('Realizamos la resta', () => {
expect(restar(1,1)).toBe(0);
});

test('Realizamos la multiplicacion', () => {
    expect(multiplicar(2,2)).toBe(4);
    });

test('Realizamos la division', () => {
expect(dividir(10,2)).toBe(5);
});

});
