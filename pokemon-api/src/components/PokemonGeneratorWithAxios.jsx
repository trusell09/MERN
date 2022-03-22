import React, {useState} from 'react';
import axios from 'axios';

const PokemonGeneratorWithAxios = () =>{

    let [pokemonList, setPokemonList] = useState([])

    const getPokemonFromAPI = ()=>{

        console.log("API call to generate Pokemon")

        axios.get("https://pokeapi.co/api/v2/pokemon")

        .then((response)=>{
            console.log("Got the Pokemon!")
            console.log(response.data.results)
            setPokemonList(response.data.results)
        })
        .catch((err)=>{
            console.log("error while catching Pokemon")
        })

        console.log("thinking about Pokemon")
    }
    
    return(
        <>
        <button onClick = {getPokemonFromAPI}>
            POKEMON!
        </button>
        {
            pokemonList.map((pokemonObj, index)=>{
                return<div>
                    <h1>{pokemonObj.name}</h1>
                </div>
            })
        }
        </>
    )
}

export default PokemonGeneratorWithAxios;