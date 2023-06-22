//import {describe, expect, test, require} from '@jest/globals';

const { generateText } = require('../util.js');

describe('Pruebas de salidas de datos', () => {

    test('Salida de nombre y edad', () => {
        const text = generateText('Daniel', 30);
        expect(text).toBe('Daniel (30 years old)');

        const text2 = generateText('Lucas', 25);
        expect(text2).toBe('Lucas (25 years old)')

    });

    it('Salida con datos vacios' , () => {
        const text = generateText('', null);
        expect(text).toBe(' (null years old)');
    });


}); 
