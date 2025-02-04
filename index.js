import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'
import { fazerPergunta } from "./pergunta.js";

const geminiApiKey = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(geminiApiKey);

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  let prompt = "Você é um site de viagens. Caso o usuário pergunte sobre algo diferente, diga que não pode responder." + "O usuário escolheu: ";
  
  prompt += await fazerPergunta("Me fale sobre o destino que deseja conhecer: ")

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();