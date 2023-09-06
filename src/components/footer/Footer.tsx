import React from "react";
import "./Footer.css";

interface Props {
  titulo1: string;
  titulo2: string;
  item1: string;
  item2: string;
  item3?: string;
  item4?: string;
}

function Footer(props: Props) {
  return (
    <div className="Container">
      <div className="Rodape1">
        <div className="Titulo">{props.titulo1}</div>
        <div className="filhos">{props.item1}</div>
        <div className="filhos">{props.item2}</div>
        <div className="filhos">{props.item3}</div>
        <div className="filhos">{props.item4}</div>
      </div>

      <div className="Rodape2">
        <div className="Titulo">{props.titulo2}</div>
        <div className="filhos">{props.item1}</div>
        <div className="filhos">{props.item2}</div>
        <div className="filhos">{props.item3}</div>
        <div className="filhos">{props.item4}</div>
      </div>
    </div>
  );
}

export default Footer;
