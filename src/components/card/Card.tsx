import React from "react";
import axios from "axios";
import "./Card.css";

interface Props {
  name?: String;
  image?: String;
}

interface Pokemon {
  name: string;
  url: string;
}

var pokeImgReturn: string;
var pokeNameReturn: string;

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
    .then(async function (response) {
      var pokemonUrl: string = response.data.pokemon;

      await axios
        .get(pokemonUrl, {
          headers: {
            Accept: "application/jason/",
          },
        })
        .then(async function (response) {
          var pokeNameArray = [];
          var pokeName = [];
          var pokeUrl = [];

          pokeNameArray = response.data.results;

          pokeName = pokeNameArray.map((pokemon: Pokemon) => {
            return pokemon.name;
          });

          pokeNameReturn = pokeName[5];

          pokeUrl = pokeNameArray.map((pokemon: Pokemon) => {
            return pokemon.url;
          });

          await axios
            .get(
              pokeUrl[5],

              {
                headers: {
                  Accept: "application/jason/",
                },
              }
            )
            .then(function PokeImg(response) {
              var pokeImgUrl: string;

              pokeImgUrl = response.data.sprites.front_default;

              pokeImgReturn = pokeImgUrl;
              return pokeImgUrl;
            })
            .catch();
        })
        .catch();
    })

    .catch();
}

GetPokemon();

function Card(props: Props) {
  return (
    <div>
      <h1>{pokeNameReturn}</h1>
      <img src={pokeImgReturn} alt="" />
    </div>
  );
}

export default Card;

/* A função then() faz com que o sistema espere receber toda a informação para poder começar a rodar o sistema */

/*  var pokeName: object = response.data.pokemon;

      // Aqui está transformando o objeto em um array
      var logDoConsole = Object.keys(pokeName).map((key) => {
        var pokeNameMap: Object; // Criação do meu bojeto.

        pokeNameMap = pokeName[key as keyof typeof pokeName]; //Aqui eu estou passando para o computador quem que vai ser o indice do meu array. Assim ele vai estar pegando as chaves do array que ele transformou e vai usar como indice.

        return pokeNameMap;
      });

console.log(logDoConsole); */
