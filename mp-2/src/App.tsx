import { useEffect, useState } from "react";
import styled from "styled-components";
import PokemonList from "./components/PokemonList";

interface Pokemon {
  id: number;
  name: string;
  image: string;
  height: number;
  weight: number;
  base_experience: number;  // Ensure this field is present
}

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px solid darkgoldenrod;
`;

export default function App() {
  const [data, setData] = useState<Pokemon[]>([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
      const { results } = await response.json();

      const pokemonData = await Promise.all(
        results.map(async (pokemon: { name: string; url: string }) => {
          const pokemonDetails = await fetch(pokemon.url);
          const pokemonJson = await pokemonDetails.json();
          return {
            id: pokemonJson.id,
            name: pokemonJson.name,
            image: pokemonJson.sprites.front_default,
            height: pokemonJson.height,
            weight: pokemonJson.weight,
            base_experience: pokemonJson.base_experience,  // New field added
          };
        })
      );

      setData(pokemonData);
    }

    fetchData().catch((error) => console.log("Error fetching Pokémon data: ", error));
  }, []);

  return (
    <ParentDiv>
      <PokemonList data={data} />
    </ParentDiv>
  );
}