import React from "react";
import "./Navbar.css";
import Cidades from "../../utils/cities";
import axios from "axios";

interface Props {
  item1: string;
  item2: number;
  ok?: boolean;
}

// Aqui eu estou fazendo a requisição através do GET 
async function AxiosTeste() {
  const { data } = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/",

    {
      headers: {
        Accept: "application/jason/",
        
      },
    }
  );

 /*  Aqui eu estou filtrando os nomes através do map.
  Criei uma variavel que vai estar recebendo o resultado do filtro do map, ai depois passei essa const para ser exibida no console do navegador. */
  const pokeName = data.results.map(
    (pokemon: { name: String }) => pokemon.name
  );

  return console.log(pokeName);
}

AxiosTeste();

function Navbar(props: Props) {
  return (
    <div>
      {props.item1}
      <br />
      {props.item2}
      <br />
      {Object.keys(Cidades()).map((key) => {
        return <h1 key={key}> {Cidades()[key as keyof typeof Cidades]} </h1>;
      })}
    </div>
  );
}

export default Navbar;

// parametro == propriedade são a mesma coisa
// metodo == classe, geralamente em algumas linguagens é utilizado ao invés de usar a palavra function
// Interface == é quase igual uma classe, onde eu consigo criar e tipar os meus dados, como as minhas variaveis.
// Tupple == <> Quando eu for passar a minha Props para a minha função tenho que colocar dentro do <Props> = Tupple