import { ProxyState } from "../AppState.js"
import Pokemon from "../Models/Pokemon.js"
import { descriptionApi, pokemonApi } from "./AxiosService.js"

class PokemonService {
  async getAllPokemon() {
    let res = await pokemonApi.get('pokemon?limit=100')
    ProxyState.pokemon = res.data.results
  }
  async getPokemon(name) {
    console.log(name)
    let res = await pokemonApi.get(`pokemon/${name}`)
    console.log(res.data)
    ProxyState.activePokemon = new Pokemon(res.data)
  }

}

export const pokemonService = new PokemonService();