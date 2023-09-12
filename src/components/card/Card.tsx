import React from "react";
import axios from "axios";
import "./Card.css";

interface Props {
  name?: String;
  image?: String;
}

async function GetPokemon() {
  const url: string = "https://pokeapi.co/api/v2/";

  await axios
    .get(
      url,

      {
        headers: {
          Accept: "application/jason/",
        },
      }
    )
    .then(function (response) {
      var pokeName: object = response.data.pokemon;

      // Aqui está transformando o objeto em um array
      var logDoConsole = Object.keys(pokeName).map((key) => {
        var pokeNameMap: Object; // Criação do meu bojeto.

        pokeNameMap = pokeName[key as keyof typeof pokeName]; //Aqui eu estou passando para o computador quem que vai ser o indice do meu array. Assim ele vai estar pegando as chaves do array que ele transformou e vai usar como indice.

        return pokeNameMap;
      });

      console.log(logDoConsole);
    });

  // var pokeName = data.pokemon;

  // return console.log();

  // return data;
}

GetPokemon();

function Card(props: Props) {
  return <h1>Teste</h1>;
}

export default Card;

/* A função then() faz com que o sistema espere receber toda a informação para poder começar a rodar o sistema */
