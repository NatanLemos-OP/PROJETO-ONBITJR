import styles from "./Main.module.css";
import { useState } from "react";

import casa01 from "../../imagens/casa01.png";
import casa02 from "../../imagens/casa02.png";
import casa03 from "../../imagens/casa03.png";
import casa04 from "../../imagens/casa04.png";
import casa05 from "../../imagens/casa05.png";

function Main() {
  const roll = [
    {
      id: 1,
      img: casa01,
      tit: "Saiba Mais",
      nome: "Casa Moderna",
      descricao:
        "Casa moderna com 3 quartos, 2 banheiros, garagem para 2 carros e área gourmet."
    },
    {
      id: 2,
      img: casa02,
      tit: "Saiba Mais",
      nome: "Casa de Campo",
      descricao:
        "Imóvel com amplo terreno, piscina, área verde e espaço para lazer."
    },
    {
      id: 3,
      img: casa03,
      tit: "Saiba Mais",
      nome: "Sobrado Luxo",
      descricao:
        "Sobrado com acabamento premium, suíte master e garagem para 3 veículos."
    },
    {
      id: 4,
      img: casa04,
      tit: "Saiba Mais",
      nome: "Casa Praia",
      descricao:
        "Casa próxima ao mar, com varanda ampla e vista privilegiada."
    },
    {
      id: 5,
      img: casa05,
      tit: "Saiba Mais",
      nome: "Apartamento Premium",
      descricao:
        "Apartamento moderno com varanda gourmet e área de lazer completa."
    }
  ];

  const [index, setIndex] = useState(0);
  const [imovelSelecionado, setImovelSelecionado] = useState(null);

  function proximo() {
    setIndex((prev) => (prev + 1) % roll.length);
  }

  function voltar() {
    setIndex((prev) => (prev - 1 + roll.length) % roll.length);
  }

  return (
    <main>
      <div className={styles.Main}>
        <h1 id="propriedades">Alguns de Nossos Imóveis!!</h1>
      </div>

      <div className={styles.correr}>
        <button className={styles.btn} onClick={voltar}>
          🠔
        </button>

        <div className={styles.quad}>
          <img src={roll[index].img} alt={roll[index].nome} />

          <h2
            className={styles.saibaMais}
            onClick={() => setImovelSelecionado(roll[index])}
          >
            {roll[index].tit}
          </h2>
        </div>

        <div className={styles.quad}>
          <img
            src={roll[(index + 1) % roll.length].img}
            alt={roll[(index + 1) % roll.length].nome}
          />

          <h2
            className={styles.saibaMais}
            onClick={() =>
              setImovelSelecionado(roll[(index + 1) % roll.length])
            }
          >
            {roll[(index + 1) % roll.length].tit}
          </h2>
        </div>

        <div className={styles.quad}>
          <img
            src={roll[(index + 2) % roll.length].img}
            alt={roll[(index + 2) % roll.length].nome}
          />

          <h2
            className={styles.saibaMais}
            onClick={() =>
              setImovelSelecionado(roll[(index + 2) % roll.length])
            }
          >
            {roll[(index + 2) % roll.length].tit}
          </h2>
        </div>

        <button className={styles.btn} onClick={proximo}>
          ➞
        </button>
      </div>

      {imovelSelecionado && (
        <section className={styles.detalhes}>
          <h2>{imovelSelecionado.nome}</h2>

          <img
            src={imovelSelecionado.img}
            alt={imovelSelecionado.nome}
            className={styles.imgDetalhe}
          />

          <p>{imovelSelecionado.descricao}</p>

          <button
            className={styles.fechar}
            onClick={() => setImovelSelecionado(null)}
          >
            Fechar
          </button>
        </section>
      )}
    </main>
  );
}

export default Main;