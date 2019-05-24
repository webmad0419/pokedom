const newPokeDiv = (pokemon) => {

    const {name,abilities,types,sprites} = pokemon

    clear()

    const container = document.createElement("article")
    container.className = "pokemon"

    const title = document.createElement("h2")
    title.innerText = name.toUpperCase()

    const photo = document.createElement("img")
    photo.setAttribute("src", sprites.front_default)

    const abilitiesSection = document.createElement("section")
    abilitiesSection.innerHTML = "<h2>Abilities</h2>"

    abilitiesSection.innerHTML += abilities.map(ability => {
        return `<article>
        <h3>${ability.ability.name}</h3>
        <p>${ability.ability.url}</p>
        </article>`
    }).join("")

    const typesSection = document.createElement("section")
    typesSection.innerHTML = "<h2>Types</h2>"

    typesSection.innerHTML += types.map(type => {
        return `<article>
        <h3>${type.type.name}</h3>
        <p>${type.type.url}</p>
        </article>`
    }).join("")

    container.appendChild(title)
    container.appendChild(photo)
    container.appendChild(abilitiesSection)
    container.appendChild(typesSection)
    document.querySelector("#main-container").appendChild(container)

}

const newError = (error) => {

    console.log(error.status)

    if(error.response.status === 404) error = "No lo has puesto bien"

    clear()

    const errMsg = document.createElement("section")
    errMsg.className = "error"
    errMsg.innerText = error
    document.querySelector("#main-container").appendChild(errMsg)
}

const clear = () => {
   
    const poke = document.querySelector(".pokemon")
    if (poke) poke.parentNode.removeChild(poke);
    
    const err = document.querySelector(".error")
    if (err) err.parentNode.removeChild(err);
}
