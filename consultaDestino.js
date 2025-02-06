import 'dotenv/config'
import { fazerPergunta } from "./pergunta.js";
import { inicializaModelo } from './inicializaModelo.js';

const model = await inicializaModelo("gemini-1.5-flash")

export async function consultaDestino() {
  let prompt = await fazerPergunta("Me fale sobre o destino que deseja conhecer: ")
  let categorias = await fazerPergunta("Me fale quais categorias você gostaria de saber: ")

  const parts = [
    {text: "Você é o chatbot de um site que vende pacotes de viagem. Ao ser perguntado sobre algum destino, como bairro, cidade, estado, país, continente e pontos turísticos diversos, você poderá fornecer informações. Caso seja perguntado sobre algo que não ter relação com viagem e turismo, informe que não poder responder a essa dúvida.\n\nPara formular a resposta, quero que os tópicos apareçam como lista com marcadores e sempre deve conter apenas as categorias que forem solicitadas no momento da pergunta.\n\nAlguns exemplos de categorias: características, localização, cultura, pontos turísticos,  culinária, clima, dicas, como chegar, curiosidades."},
    {text: "input: Me fale sobre Flamengo, bairro do Rio de Janeiro."},
    {text: "output: Olá! Interessado em conhecer o Flamengo, no Rio de Janeiro? Ótima escolha! É um bairro vibrante com muito a oferecer. Veja as informações que preparei:\n\n**Flamengo, Rio de Janeiro**\n\n*   **Características:**\n\n    *   Bairro residencial com forte apelo comercial, oferecendo uma variedade de serviços e conveniências.\n    *   Possui um dos maiores parques urbanos do Rio de Janeiro, o Aterro do Flamengo.\n    *   Ambiente familiar e acolhedor, com diversas opções de lazer e entretenimento.\n*   **Localização:**\n\n    *   Situado na Zona Sul do Rio de Janeiro.\n    *   Faz fronteira com bairros como Catete, Laranjeiras, Botafogo e Centro.\n    *   Fácil acesso a outros pontos da cidade através de transporte público, como metrô e ônibus.\n*   **Cultura:**\n\n    *   O bairro possui um rico patrimônio histórico, com diversos casarões e edifícios antigos.\n    *   Abriga centros culturais e teatros, oferecendo uma programação diversificada.\n    *   É palco de eventos e festas populares ao longo do ano.\n*   **Pontos Turísticos:**\n\n    *   **Aterro do Flamengo:** Um parque extenso com áreas de lazer, pistas de corrida e ciclismo, quadras esportivas e belas paisagens da Baía de Guanabara.\n    *   **Museu Carmen Miranda:** Dedicado à vida e obra da famosa cantora e atriz.\n    *   **Igreja de Nossa Senhora da Glória do Outeiro:** Uma construção histórica com arquitetura barroca e vista panorâmica da cidade.\n    *   **Monumento aos Pracinhas:** Homenagem aos soldados brasileiros que lutaram na Segunda Guerra Mundial.\n*   **Culinária:**\n\n    *   Variedade de restaurantes, bares e cafés, com opções para todos os gostos e bolsos.\n    *   Cozinha brasileira, internacional, frutos do mar, pizzarias, hamburguerias e muito mais.\n    *   Feiras gastronômicas e food trucks com opções criativas e saborosas.\n\nEspero que essas informações te ajudem a planejar sua viagem! Se precisar de algo mais, como pacotes de viagem ou hotéis na região, é só me perguntar."},
    {text: `input: Me fale sobre ${categorias} do destino ${prompt}`},
    {text: "output: "},
  ];

  const result = await model.generateContent({contents: [{ role: "user", parts }]});
  const response = await result.response;
  const text = response.text();
  console.log(text);
}