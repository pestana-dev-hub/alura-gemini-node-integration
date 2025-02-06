import { GoogleGenerativeAI } from "@google/generative-ai";
const geminiApiKey = process.env.GEMINI_API_KEY

export async function inicializaModelo(modelo) {
    const genAI = new GoogleGenerativeAI(geminiApiKey);
    const model = genAI.getGenerativeModel({ model: modelo});
    return model
}