const pokeContainer = document.getElementById("pokeContainer");

async function callApi(){
    const res = await fetch ("https://pokeapi.co/api/v2/");
    const pokeApi = await res.json();

    console.log(pokeApi);
}
callApi();