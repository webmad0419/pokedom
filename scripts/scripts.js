window.onload = () => {
    const mainContainer = document.querySelector("#main-container")
    const searchInput = document.getElementById("search-input")
    const searchButton = document.getElementById("search-button")
    const pokeapi = new ApiHandler("https://pokeapi.co/api/v2")


    searchButton.onclick = (e) => {
        e.preventDefault()

        console.log(searchInput.value)

        pokeapi.getPokemon(searchInput.value)
        .then(pokemon => {
            console.log(pokemon)
            newPokeDiv(pokemon)
        })
        .catch(error => {
            console.log(error)
            newError(error)
        })
    }

}