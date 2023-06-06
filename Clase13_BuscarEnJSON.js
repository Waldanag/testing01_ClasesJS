
const pokedesk = require('./response_ability.json')

const buscarPokemon = (pokemonBuscado) => {

    let pokemon = pokedesk.results.find(p => p.name === pokemonBuscado)

    if (pokemon) {
        console.log(`¡Se encontró el pokemon ${pokemonBuscado}!`)
        console.log(`URL: ${pokemon.url}`)
    } else {
        console.warn(`No se encontró el pokemon ${pokemonBuscado}.`)
    }
}

buscarPokemon('drizzle')
console.log("------");
buscarPokemon('charmander')

const buscarPokemon2 = (pokemonBuscado) => {

    let pEncontrado2 = null;
    
    for (let p2 of pokedesk.results) {
        if (p2.name == pokemonBuscado) {
            pEncontrado = p2;
        }
    }
    if (pEncontrado2 == null) {
        console.log(`No se encontró el pokemon ${pokemonBuscado}.`);
    } else {
        console.log(`¡Se encontró el pokemon ${pokemonBuscado}!`)
            console.log(`URL: ${pokemon.url}`)
    }

}

buscarPokemon2('drizzle')


