import React from "react";


function Post(props) {
  let [salvo1, setSalvo1] = React.useState(false);
  let [like, setLike] = React.useState(false);
  let[numeroLike, setNumero] = React.useState(props.numero);

  function salvaPost() {
    if (salvo1 === false ){
      
      setSalvo1(true)
    }
  
    else if(salvo1 === true){
      setSalvo1(false)
  
    } ;
  }
function likePost() {
    if (like === false ){
      setLike(true)
      setNumero((Number(numeroLike) + 0.001).toFixed(3))
    }
  
    else if(like === true){
      setLike(false)
      setNumero((Number(numeroLike) - 0.001).toFixed(3))
  
    } ;
  }
  
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.icon} />
          {props.name}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.imagem} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon Class={(like===false)?"":"coração"} onClick={likePost} name={(like===false)? "heart-outline":"heart"}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <ion-icon onClick={salvaPost} name={(salvo1===false)? "bookmark-outline":"bookmark"}></ion-icon>
        </div>

        <div class="curtidas">
          <img src={props.icon2} />
          <div class="texto">
            Curtido por <strong>{props.usuario}</strong> e{" "}
            <strong>outras {numeroLike} pessoas</strong>
          </div>
        </div>
      </div>
    </div>
  );
}


export default function Posts() {
  

  const itens = [
    <Post
      icon="assets/img/meowed.svg"
      name="meowed"
      imagem="assets/img/gato-telefone.svg"
      icon2="assets/img/respondeai.svg"
      usuario="respondeai"
      numero={101.523}
    
    />,
    <Post
      icon="assets/img/barked.svg"
      name="barked"
      imagem="assets/img/dog.svg"
      icon2="assets/img/adorable_animals.svg"
      usuario="adorable_animals"
      numero={99.159}
    />,
  ];

  return (
    <div>
      <div class="posts">
        {itens.map((comps) => (
          <div>{comps}</div>
          ))}
      </div>
    </div>
  );
}
