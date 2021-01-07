export const pokemonApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/"
})

export const sandboxApi = axios.create({
  baseURL: "https://bcw-sandbox-herokuapp.com/api/Cody/pokemon"

})

export const descriptionApi = axios.create({
  baseURL: "https://pokeapi.co/api/v2/characteristic"
})