
const dados_url = "https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json"

async function getData(url) { // copiado do site da mozilla; https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#making_a_request
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const result = await response.json();
      return result
    } catch (error) {
      console.error(error.message);
    }
  }

async function showGlobalInfo() {
    const result = await fetch(url)
    const info = await result.json()

    console.log(info)
}

//showGlobalInfo()
const graficos = document.getElementById("graficos-container")
const globalInfo = await getData(dados_url)
const catPicture = await(getData("https://api.thecatapi.com/v1/images/search"))

graficos.innerHTML += `
    <p>Total de pessoas conectadas: ${globalInfo.total_pessoas_conectadas.toLocaleString()}</p>
    <p>Tempo médio: ${globalInfo.tempo_medio.toLocaleString()}</p>
    <p>Total de pessoas no mundo: ${globalInfo.total_pessoas_mundo.toLocaleString()}</p>

    <p>Foto de gato:<p> <img src="${catPicture[0].url}" height="256">
`