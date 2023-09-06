import React from "react";
import './Navbar.css';


interface  Props{
    item1 : string; 
    item2 : number;
    ok : boolean;
    children : React.ReactNode;
}

function Navbar (props : Props){
    return(
        <div>
           <>{JSON.stringify(props.item1)}</>
        </div>


    );
}

export default Navbar;

// parametro == propriedade são a mesma coisa 
// metodo == classe, geralamente em algumas linguagens é utilizado ao invés de usar a palavra function
// Interface == é quase igual uma classe, onde eu consigo criar e tipar os meus dados, como as minhas variaveis.
// Tupple == <> Quando eu for passar a minha Props para a minha função tenho que colocar dentro do <Props> = Tupple