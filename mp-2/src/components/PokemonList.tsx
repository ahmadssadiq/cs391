import styled from "styled-components";

interface Pokemon {
    id: number;
    name: string;
    image: string;
    height: number;
    weight: number;
}

const AllPokemonDiv = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background-color: lightblue;
`;

const SinglePokemonDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    background-color: lightgreen;
    border: 3px solid darkgreen;
    text-align: center;
`;

export default function PokemonList(props: { data: Pokemon[] }) {
    return (
        <AllPokemonDiv>
            {props.data.map((pokemon: Pokemon) => (
                <SinglePokemonDiv key={pokemon.id}>
                    <h1>{pokemon.name}</h1>
                    <p>Height: {pokemon.height}</p>
                    <p>Weight: {pokemon.weight}</p>
                    <img src={pokemon.image} alt={`image of ${pokemon.name}`} />
                </SinglePokemonDiv>
            ))}
        </AllPokemonDiv>
    );
}