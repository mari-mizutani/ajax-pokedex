// const pokeId = 20;

// const fetchId = async ()=>{
//     for (let i=1; i < pokeId.length; i++){
//         await callApi(i);
//     }
// }
// fetchId();

// ---GET DATA FROM API----
async function callApi(){
    const generalUrl = await fetch ("https://pokeapi.co/api/v2/pokemon/");
    const pokeApi = await generalUrl.json();

    //console.log(pokeApi.results);


     // ---DOM---
    pokeApi.results.forEach((pokemon)=>{
        console.log(pokemon);
    
        //document.getElementById("run").addEventListener("click",getPokemonInfo);
        
        //function getPokemonInfo(){
            const pokeContainer = document.getElementById("pokeContainer");
            const profileDiv = document.createElement("div");
            profileDiv.classList.add("div-class");
            pokeContainer.appendChild(profileDiv);

            const profileName = document.createElement("h3");
            profileDiv.appendChild(profileName);
            profileName.innerText = pokemon.name;

            // const profileName = document.createElement("h4");
            // profileDiv.appendChild(profileName);
            // profileName.innerText = pokemon.name;

            
        //};
    });

}
callApi();