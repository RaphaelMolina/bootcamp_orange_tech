// const funcoes = require('./aula');

// console.log(funcoes);
// console.log(funcoes.gets());

// const {gets, print} = require('./aula');
// print(gets());

// const numeros = [];

// for (let i = 0; i < 5; i++) {
//     numeros[i] = gets();
// }

// console.log(numeros);
// const max = Math.max.apply(null, numeros);
// console.log(max);

// let maiorValor = 0;

// for (let i = 0; i < numeros.length; i++) {
//     const n = numeros[i];
//     if (n > maiorValor) {

//         maiorValor = n;   
//     }
// }
// console.log(maiorValor);

// const alunos = gets();
// let maiorValor = 0;

// for (let i = 0; i < alunos; i++) {
//     const numeros = gets();
//     if (numeros > maiorValor) {
//         maiorValor = numeros;
        
//     }
    
// }
// print(maiorValor);
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Aula from './aula';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); 

root.render(
    <StrictMode>
        <Aula/>
    </StrictMode>

);

