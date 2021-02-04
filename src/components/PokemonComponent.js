import React,{useState}from 'react';
import axios from 'axios';




const PokemonComponent = (props) => {
    const [people, setPeople] = useState([]);

    const onClick=(e)=>{
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=807").then(response => {
            return response;
        }).then(response => {
            setPeople(response.data.results.map(item => item.name));
        }).catch(err=>{
            console.log(err);
        });
    }

 
    return (
        <div>
            <button onClick={onClick}>fetch name</button>   
            {
                people.map(item =>
                    <p > {item}</p>
                
                )
            }         
        </div>
    );
}
export default PokemonComponent;