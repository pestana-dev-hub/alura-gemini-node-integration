import { fazerPergunta } from "./fazerPergunta.js";
import { perguntaLivre } from './perguntaLivre.js';
import { consultaDestino } from './consultaDestino.js';
import { processaImagem } from "./processaImagem.js";

async function principal() {
  const escolha = await fazerPergunta(`Escolha uma das opções abaixo: \n
  1. Fazer uma pergunta livre sobre um destino;
  2. Comparação de destinos por categorias;
  3. Ver informações com base em uma imagem;
  \nOpção desejada: `);

  if (escolha === '1') {
    await perguntaLivre();
  } else if (escolha === '2') {
    await consultaDestino();
  } else if (escolha === '3') {
    const imagem = await fazerPergunta("\nMe informe o caminho completo e nome da imagem:")
    await processaImagem(imagem)
  } else {
    console.log('Escolha inválida.');
  }
}

principal();