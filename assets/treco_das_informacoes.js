
const url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function showGlobalInfo() {
    const result = await fetch(url)
    const info = await result.json()

    console.log(info)
}

showGlobalInfo()