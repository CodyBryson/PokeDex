export default class Pokemon {
  constructor(data) {
    this.id = data.id
    this.index = data.index
    this.name = data.name
    this.img = data.sprites.other.dream_world.front_default
    this.description = data.description
    this.weight = data.weight
    this.height = data.height
    this.types = data.types[0].type.name
    this.sprites = data.sprites.front_default
  }
  get Template() {
    return `
    <h4 class="text-center" style="text-transform:uppercase">${this.name}</h4>
                <img src="${this.img}"
                    width="250" height="250" alt="" srcset="">
                <p><b>Type:</b> <span style="text-transform:uppercase">${this.types}</span></p>
                <p><b>Height:</b> ${this.height} inches | <b>Weight:</b> ${this.weight} lbs</p>
                <button class="btn btn-outline-success" onclick="app.myPokemonController.addPokemon()">Add Pokemon</button>
    
    
    `
  }


}