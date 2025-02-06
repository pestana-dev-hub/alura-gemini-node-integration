import 'dotenv/config'
import { fazerPergunta } from "./pergunta.js";
import { inicializaModelo } from './inicializaModelo.js';

const model = await inicializaModelo("gemini-2.0-flash")

export async function perguntaLivre() {
  let prompt = await fazerPergunta("Me faça uma pergunta sobre um determinado destino: ")

  const parts = [
    { text: "Você é o chatbot de um site que vende pacotes de viagem." },
    { text: `input: ${prompt}` },
    { text: "output: " },
  ];

  const result = await model.generateContent({ contents: [{ role: "user", parts }] });
  const response = await result.response;
  const text = response.text();
  console.log(text);
}