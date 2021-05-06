const pokeContainer = document.getElementById("pokeContainer");

// ---GET DATA FROM API----
async function callApi(){
    const generalUrl = await fetch ("https://pokeapi.co/api/v2/pokemon/");
    const pokeApi = await generalUrl.json();

    //console.log(pokeApi.results);

     // ---DOM---
    pokeApi.results.forEach((pokemon)=>{
        console.log(pokemon);
    
        document.getElementById("button").addEventListener("click",function(){
            const profile = document.createElement("li");
            profile.innerText = pokemon.name;
            pokeContainer.appendChild(profile);
        })
    });

}
callApi();