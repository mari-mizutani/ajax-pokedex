// ---GET DATA FROM API----
async function callApi(){
    const generalUrl = await fetch (" https://pokeapi.co/api/v2/pokemon?limit=151");
    const pokeApi = await generalUrl.json();


    // const getPokemon = async pokeId =>{
    //     const idUrl = 'https://pokeapi.co/api/v2/pokemon/${id}' ;
    //     const idResult = await fetch(idUrl);
    //     const pokemon = await idResult.json();
    // }
    


     // ---DOM---
    pokeApi.results.forEach((allPokemon)=>{
        //console.log(allPokemon);

        let eachUrl = allPokemon.url ;
        //console.log(eachUrl); 
        fetch(eachUrl)
        .then(response => response.json())
        .then(function(pokeData){
        //console.log(pokeData)
    
    
        //document.getElementById("run").addEventListener("click",getPokemonInfo);
        
        //function getPokemonInfo(){
            const pokeContainer = document.getElementById("pokeContainer");
            const profileDiv = document.createElement("div");
            profileDiv.classList.add("div-class");
            pokeContainer.appendChild(profileDiv);

            //name
            const profileName = document.createElement("h3");
            profileName.classList.add("h3-class");
            profileDiv.appendChild(profileName);
            profileName.innerText = pokeData.name;

            //id
            const id = document.createElement("p");
            id.classList.add("p-class");
            profileDiv.appendChild(id);
            id.innerText = "ID: " + pokeData.id;

            //image
            const image = document.createElement("img");
            image.setAttribute("src", pokeData.sprites.front_default);
            profileDiv.appendChild(image);



        })   
            
        //};
    });

}
callApi();