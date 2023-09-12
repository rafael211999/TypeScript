import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./components/app/App";
import reportWebVitals from "./reportWebVitals";
import Navbar from './components/navbar/Navbar';
import Footer from "./components/footer/Footer";
import Card from "./components/card/Card";



const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
{/*     <Navbar
      item1 = "Olá"
      item2={25}   
    />
    
    <Footer 
    titulo1=" Titulo1"
    titulo2="Titulo2"
    item1="Olá" 
    item2="Rafael"
    item3="Teste"
    />
    <Footer 
    titulo1=" Titulo1"
    titulo2="Titulo2"
    item1="SegundoTeste" 
    item2="Rafael"
    item3="TudoNosso"
    item4="Alterado" /> */}

    <Card />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
