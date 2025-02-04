import { GoogleGenerativeAI } from "@google/generative-ai";
import 'dotenv/config'
import { fazerPergunta } from "./pergunta.js";

const geminiApiKey = process.env.GEMINI_API_KEY
const genAI = new GoogleGenerativeAI(geminiApiKey);

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  let prompt = await fazerPergunta("Me fale sobre o destino que deseja conhecer: ")

  const parts = [
    {text: "Você é o chatbot de um site que vende pacotes de viagem. Ao ser perguntado sobre algum destino, como bairro, cidade, estado, país, continente e pontos turísticos diversos, você poderá fornecer informações. Caso seja perguntado sobre algo que não ter relação com viagem e turismo, informe que não poder responder a essa dúvida.\n\nPara formular a resposta, quero que os tópicos apareçam como lista com marcadores e sempre deve conter as categorias: características, localização, cultura, pontos turísticos e culinária."},
    {text: "input: Me fale sobre o Flamengo, bairro do Rio de Janeiro."},
    {text: "output: Olá! Interessado em conhecer o Flamengo, no Rio de Janeiro? Ótima escolha! É um bairro vibrante com muito a oferecer. Veja algumas informações sobre ele:\n\n**Características:**\n\n*   Bairro residencial com forte comércio e serviços.\n*   Conhecido por sua beleza natural e qualidade de vida.\n*   Possui fácil acesso a outras regiões da cidade.\n*   Ambiente familiar e com muitas opções de lazer ao ar livre.\n\n**Localização:**\n\n*   Zona Sul do Rio de Janeiro.\n*   Faz fronteira com os bairros de Botafogo, Catete, Laranjeiras e Centro.\n*   Às margens da Baía de Guanabara, com vista para o Pão de Açúcar.\n\n**Cultura:**\n\n*   Possui diversos centros culturais e teatros.\n*   Abriga o Museu Carmen Miranda, dedicado à famosa cantora.\n*   É um bairro com forte tradição de eventos ao ar livre e feiras.\n*   O bairro é famoso por ter sido moradia de diversos artistas e intelectuais.\n\n**Pontos Turísticos:**\n\n*   **Parque do Flamengo:** Um dos maiores parques urbanos do mundo, ideal para atividades ao ar livre, com quadras esportivas, áreas de lazer e paisagens deslumbrantes.\n*   **Aterro do Flamengo:** Parte do Parque do Flamengo, oferece ciclovias, pistas de corrida e uma vista privilegiada da Baía de Guanabara.\n*   **Praia do Flamengo:** Embora imprópria para banho, a praia oferece uma bela vista e é ótima para caminhadas e contemplação.\n*   **Museu Carmen Miranda:** Dedicado à vida e obra da famosa cantora e atriz brasileira.\n*   **Monumento aos Pracinhas:** Homenagem aos soldados brasileiros que lutaram na Segunda Guerra Mundial.\n\n**Culinária:**\n\n*   Variedade de restaurantes, desde comida brasileira tradicional até culinária internacional.\n*   Muitos bares e botecos com petiscos e cerveja gelada.\n*   Opções de restaurantes com vista para o mar.\n*   Feiras gastronômicas e eventos culinários ao longo do ano.\n\nEspero que estas informações te ajudem a planejar sua viagem! Se precisar de mais detalhes sobre pacotes de viagem ou outros destinos, é só perguntar!"},
    {text: `input: ${prompt}`},
    {text: "output: "},
  ];

  const result = await model.generateContent({contents: [{ role: "user", parts }]});
  const response = await result.response;
  const text = response.text();
  console.log(text);
}

run();