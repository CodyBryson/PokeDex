import { ProxyState } from "../AppState.js";
import { myPokemonService } from "../Services/MyPokemonService.js";

function _drawPokemon() {
  let template = ''
  ProxyState.myPokemon.forEach(p => {
    template += `<li class = "adder font-weight-bold" style="text-transform: uppercase;"onclick="app.pokemonController.getPokemon('${p.name}')">${p.name}</li>`
  })
  document.getElementById('mypokemon').innerHTML = template
}

export default class MyPokemonController {
  constructor() {
    ProxyState.on('myPokemon', _drawPokemon)

    this.getAllPokemon()
  }

  getAllPokemon() {
    try {
      myPokemonService.getAllPokemon()
    } catch (error) {
      console.error(error)
    }
  }

  getPokemon(name) {
    myPokemonService.getPokemon(name)
  }
  addPokemon() {
    try {
      myPokemonService.addPokemon()
    } catch (error) {
      console.error(error)
    }
  }
  removePokemon() {
    try {
      myPokemonService.removePokemon()
    } catch (error) {
      console.error(error)
    }
  }
}