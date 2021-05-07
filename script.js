// ---GET DATA FROM API----
async function callApi(){
    const generalUrl = await fetch (" https://pokeapi.co/api/v2/pokemon?limit=151");
    const pokeApi = await generalUrl.json();


     // ---DOM---
    pokeApi.results.forEach((allPokemon)=>{

        let eachUrl = allPokemon.url ;
        fetch(eachUrl)
        .then(response => response.json())
        .then(function(pokeData){
        
    
            //click function
            //document.getElementById("run").addEventListener("click",searchPokemon);

 
            //let result = "No pokemon found";

            //function searchPokemon(){

                //let nameValue = document.getElementById("pokeId").value;

                //if(nameValue == pokeData.name){

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
                    id.innerText = "# " + pokeData.id;
            
                    //image
                    const image = document.createElement("img");
                    image.setAttribute("src", pokeData.sprites.front_default);
                    profileDiv.appendChild(image);

                    //move
                    const move = document.createElement("p");
                    profileDiv.appendChild(move);
                    move.innerText = pokeData.moves[0].move.name + "\n" + pokeData.moves[1].move.name  
                    + " \n" + pokeData.moves[2].move.name  + "\n" + pokeData.moves[3].move.name;
                    
                    
                    

                    

                //}
            //};

        })   

    });
}
callApi();