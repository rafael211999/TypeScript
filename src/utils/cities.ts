
// import React from "react";


interface Cities{
    1: string;
    2: string;
    3?: string;
}

var cidade : Cities;


function Cidades(){
    let cities = cidade;
    cities = {
        1: "Rio de Janeiro",
        2: "São Paulo",
        3: "Minas Gerais",
    }
    
    return cities;
}

export default Cidades;