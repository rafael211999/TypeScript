import React from "react";
import "./Imagem.css";
import axios from "axios";

var pokeImgReturn: string;

async function GetImagem() {
  const url: string = "https://pokeapi.co/api/v2/pokemon/4/";

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
      var pokeImg: string;

      pokeImg = response.data.sprites.front_default;
      pokeImgReturn = pokeImg;

      return console.log(pokeImg);
    })
    .catch();
}
GetImagem();

function Imagem() {
  return (
    <div>
      <h1>Charmander</h1>
      <img src={pokeImgReturn} alt="charmander" />
    </div>
  );
}

Imagem();
export default Imagem;
