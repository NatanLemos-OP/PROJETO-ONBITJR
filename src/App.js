import "./style.css";
import back_in from "./imagens/Back_in.png";
import Header from "./Components/Header";
import Main from "./Components/Main";
import CadastroForm from "./Components/CadastroForm";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">

<img src={back_in} className="img" id="topo"/>; 
     <Header/>
     <Main/>
    
     
 <CadastroForm />

      <Footer />

     
 
    </div>
  );
}

export default App;
