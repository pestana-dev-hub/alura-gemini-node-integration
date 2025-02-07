import { inicializaModelo } from "./inicializaModelo.js";
import { readFileSync } from "fs"

const model = await inicializaModelo("gemini-2.0-flash")

function fileToGenerativePart(path, mimeType) {
    return {
        inlineData: {
            data: Buffer.from(readFileSync(path)).toString("base64"),
            mimeType
        },
    };
}

export async function processaImagem(imagem) {
    const prompt = "Me fale o que puder sobre essa imagem"

    const imageParts = [
        fileToGenerativePart(imagem, "image/jpeg"),
    ];

    const result = await model.generateContent([prompt, ...imageParts]);
    const response = await result.response;
    const text = response.text();
    console.log(text);
}
