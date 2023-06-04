
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