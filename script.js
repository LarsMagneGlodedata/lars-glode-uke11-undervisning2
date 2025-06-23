const loadMore = document.getElementById('loadMore')
let num = 0


async function getJson(url) {
    const fetchData = await fetch(url)
    const data = await fetchData.json()
    return data
}

async function displayPokemon() {
    const response = await getJson(`https://pokeapi.co/api/v2/pokemon?offset=${num}&limit=21`)
    const pokemonList = response.results

    const pokeContainer = document.getElementById('pokeContainer')

    if (pokemonList && pokemonList.length > 0) {
        for (const p of pokemonList) {
            const details = await getJson(p.url)
            const card = `
                <div class="pokeCards">
                    <h1>${details.name}</h1>
                    <h2># ${details.id}</h2>
                    <img src="${details.sprites.front_shiny}" alt="${details.name}" />
                </div>
            `
            pokeContainer.innerHTML += card
        }
    } else {
        pokeContainer.textContent = 'error 404'
    }
}
displayPokemon()

loadMore.addEventListener('click', () => {
    num += 21
    displayPokemon()
})

