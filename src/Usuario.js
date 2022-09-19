
import React from "react";

export default function Usuario() {

let [nome, setNome] = React.useState("Catana");
let [foto, setFoto] = React.useState("assets/img/catanacomics.svg");

// Pararam de Funcionar quando comecei a usar o "map" nos outros.

function alteraNome() {
  let nomePrompt = prompt("Qual o seu nome?");
  setNome(nomePrompt);
}

function alteraFoto() {
  let fotoPrompt = prompt("Qual a sua foto?");
  setFoto(fotoPrompt);
}

  return (
    <div class="usuario">
    <img onClick={alteraFoto} src={foto} />
    <div class="texto">
      <strong>catanacomics</strong>
      <span>
        {nome}
        <ion-icon onClick={alteraNome} name="pencil"></ion-icon>
      </span>
    </div>
  </div>
  )
}
