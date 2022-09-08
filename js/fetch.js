const input = document.querySelector(".input__nombre");
const boton = document.querySelector(".boton__buscar");
const pokemonContainer = document.querySelector(".pokemom__container");

boton.addEventListener('click', (e) => {
    e.preventDefault();
    traerPokemon(input.value);
})

function traerPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then((response) => response.json())
        .then((data) => {
            crearPokemon(data);
        });
}


function crearPokemon(pokemon) {
    const img = document.createElement("img");
    img.src = pokemon.sprites.front_default;

    const h3 = document.createElement("h3");
    h3.textContent = pokemon.name;

    const div = document.createElement("div");
    div.appendChild(img);
    div.appendChild(h3);

    pkmContainer.appendChild(div);
} 

traerPokemon();