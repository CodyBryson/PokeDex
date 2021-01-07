import { ProxyState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonService.js";

function _drawPokemon() {
  let template = ''
  ProxyState.pokemon.forEach(p => {

    template += `<li class = "adder font-weight-bold" style="text-transform: uppercase;"onclick="app.pokemonController.getPokemon('${p.name}')">${p.name}</li>`
  })
  document.getElementById("getpokemon").innerHTML = template
}

function _drawActivePokemon() {
  let template = ''
  if (ProxyState.activePokemon) {
    template = ProxyState.activePokemon.Template
  }
  document.getElementById("activepokemon").innerHTML = template
}

export default class PokemonController {
  constructor() {
    ProxyState.on('pokemon', _drawPokemon)
    ProxyState.on('activePokemon', _drawActivePokemon)

    this.getAllPokemon()
  }

  getAllPokemon() {
    try {
      pokemonService.getAllPokemon()
    } catch (error) {
      console.error(error)
    }
  }
  getPokemon(id) {
    try {
      pokemonService.getPokemon(id)
    } catch (error) {
      console.error(error)
    }
  }
}