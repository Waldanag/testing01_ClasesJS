const { suma } = require('../nuevaCalculadora.js');

//it o test

//test('', ()=>{});

test('Suma - Valores Ok', ()=>{

    let valorActual = suma(5, 55);
    let valorEsperado = 60;

    expect(valorActual).toBe(valorEsperado);
    //expect(suma(5, 55)).toBe(60);

});

test('Suma - Valores Null', ()=>{

    let valorActual = suma(null, null);
    let valorEsperado = null};

    expect(valorActual).toBe(valorEsperado);
    //expect(suma(5, 55)).toBe(60);

});