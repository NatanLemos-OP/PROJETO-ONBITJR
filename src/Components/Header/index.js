import styles from "./Header.module.css";
import logo from "../../imagens/OneBit_Imob.png";
import nav from "../../imagens/nav (2).png";

function Header() {
  return (

    <header>
      
      <div className={styles.header}>

      <div className={styles.div_logo}>
        <img src={logo} className={styles.logo} />
        <a href="#topo"><h1 className={styles.titulo}>OneBit Imóveis</h1></a>
      </div>
    

     <div className={styles.nav}>

      <a href="#topo">Home</a>
      <a href="#propriedades">Propriedades</a>
      <a href=" ">Sobre</a>
      <a href=" ">Contato</a>

     </div>
     </div>

     <div className={styles.cta} >

      <h1>OneBit Imóveis</h1>
      <p>Encontre o imóvel dos seus sonhos com a melhor do mecado!!</p>
      <a href="#propriedades">Buscar Imóveis ➔</a>

     </div>


    </header>
   

    
  );
}

export default Header;