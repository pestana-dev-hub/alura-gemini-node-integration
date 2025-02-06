import { fazerPergunta } from "./pergunta.js";
import { perguntaLivre } from './perguntaLivre.js';
import { consultaDestino } from './consultaDestino.js';

async function principal() {
  const escolha = await fazerPergunta(`Escolha uma das opções abaixo: \n
  1. Fazer uma pergunta livre sobre um destino;
  2. Comparação de destinos por categorias;
  \nOpção desejada: `);

  if (escolha === '1') {
    await perguntaLivre();
  } else if (escolha === '2') {
    await consultaDestino();
  } else {
    console.log('Escolha inválida.');
  }
}

principal();