const { describe } = require("node:test");
//const { default: expect } = require('expect');
const { generateText, validateInput } = require("../util");

describe("Generate Text"), () => {
    describe("Test Positivos", () => {
        test("Edad en el rango", ()=>{
            let nombre = "Juan";
            let edad = 20;
            let level = "Licenciatura";
            expect(generateText(nombre, edad, level)).toBe(`Edad ingresada no válida. Por favor intentá nuevamente.`);
        });
    });
    describe("Test Positivos", () => {
        test("Edad mayor al rango", ()=>{
            let nombre = "Juan";
            let edad = 80;
            let level = "Licenciatura";
            expect(generateText(nombre, edad, level)).toBe(`No pudimos registrar a: ${student.name}. Por favor contactá a soporte@dh.com para más información.`);
        });
    });
    describe("Test Positivos", () => {
        test("Edad menor al rango", ()=>{
            let nombre = "Juan";
            let edad = 5;
            let level = "Licenciatura";
            expect(generateText(nombre, edad, level)).toBe(`Edad ingresada no válida. Por favor intentá nuevamente.`);
        });
    });





}