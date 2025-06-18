console.log("Hallajen");
const factsList = document.getElementById('factsList')

// Funksjon som henter og tar i mot data fra en Cat Facts API

async function fetchFacts() {
    const fetchData = await fetch('https://catfact.ninja/facts')
    const parse = await fetchData.json()
    return parse
}

async function displayFacts() {
    const response = await fetchFacts()
    console.log(response)
 
    const catFacts =  response.data
    console.log(catFacts)

    catFacts.forEach(item => {
        const li = document.createElement('li')

        const factItem = item.fact
        li.textContent = factItem

        factsList.appendChild(li)
    });

}

displayFacts()