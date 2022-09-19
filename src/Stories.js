function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagem} />
      </div>
      <div class="usuario">{props.nome}</div>
    </div>
  );
}

export default function Stories() {
  const itens = [
    <Story imagem="assets/img/9gag.svg" nome="9gag" />,
    <Story imagem="assets/img/meowed.svg" nome="meowed" />,
    <Story imagem="assets/img/barked.svg" nome="barked" />,
    <Story
      imagem="assets/img/nathanwpylestrangeplanet.svg"
      nome="nathanwpylestrangeplanet"
    />,
    <Story imagem="assets/img/wawawicomics.svg" nome="wawawicomics" />,
    <Story imagem="assets/img/respondeai.svg" nome="respondeai" />,
    <Story imagem="assets/img/filomoderna.svg" nome="filomoderna" />,
    <Story imagem="assets/img/memeriagourmet.svg" nome="memeriagourmet" />,
  ];
  return (
    <div>
      <div class="stories">
          {itens.map((comp) => (<div>{comp}</div>))}
        <div class="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </div>
    </div>
  );
}
