https://cursos.alura.com.br/course/gemini-node-js-integrando-aplicacao-api-google

https://ai.google.dev/

https://aistudio.google.com/

# Parâmetros

- Token: conjunto de 4 a 6 caracteres
- Temperature: configura o grau de aleatoriedade dos tokens
    - Controla o nível de criatividade e imprevisibilidade da resposta. Valores mais altos geram saídas mais diversas e inesperadas, enquanto valores mais baixos produzem respostas mais focadas e determinísticas;
- Top P: configura a probabilidade de tokens desenvolvidos
    - Controla a proporção cumulativa das probabilidades dos tokens a serem considerados durante a geração de texto. Isso permite que você controle a diversidade da saída, garantindo que o modelo escolha entre uma seleção mais restrita de tokens com probabilidades mais altas;
- Top K: configura o número máximo de tokens que serão considerados para a próxima palavra a ser gerada
    - Funciona de forma similar ao Top P, mas com uma abordagem mais direta. Ao invés de utilizar probabilidades cumulativas, o Top K define um número fixo de tokens com as maiores probabilidades a serem considerados durante a geração do texto;
- Stop Sequence: interrompe a geração de resposta em um determinado ponto
    - São tokens que indicam ao modelo que ele deve parar de gerar texto. Isso é útil para controlar quando e onde a saída deve terminar;

# **Safety Settings**

- ***Harassment*** **(Assédio):** Esta configuração visa prevenir a geração de conteúdo que possa ser considerado assédio, *bullying* ou ataque pessoal. Você pode escolher o nível de restrição, desde bloquear insultos diretos até linguagem mais sutil que possa ser interpretada como hostil;
- ***Hate*** **(Ódio):** Esta configuração foca na prevenção de conteúdo que promova ódio ou discriminação com base em raça, etnia, religião, gênero, orientação sexual, ou outras características protegidas. Você pode ajustar o nível de sensibilidade para controlar a abrangência da filtragem;
- ***Sexually Explicit*** **(Conteúdo Sexualmente Explícito):** Esta configuração permite bloquear a geração de conteúdo sexualmente sugestivo, explícito ou que explore, abuse ou coloque em risco crianças. Você pode optar por bloquear completamente esse tipo de conteúdo ou permitir referências sutis e educativas, dependendo do contexto do seu projeto;
- ***Dangerous Content*** **(Conteúdo Perigoso):** Esta configuração visa prevenir a geração de conteúdo que possa incitar violência, autoflagelação, ou outros comportamentos perigosos. Você pode ajustar o nível de restrição de acordo com a natureza do seu projeto e a sensibilidade do público-alvo.

# Integração Via Node

https://ai.google.dev/gemini-api/docs/get-started/tutorial?hl=pt-br&lang=node

# Engenharia de Prompt

https://ai.google.dev/gemini-api/docs/prompting-strategies?hl=pt-br

# Models

https://ai.google.dev/gemini-api/docs/models/gemini?hl=pt-br

# **Analisando custos**

O primeiro passo para otimizar os custos é entender como eles são gerados. O *Google Cloud Console* oferece ferramentas valiosas para monitorar o uso da API e identificar áreas de potencial otimização:

- **Monitoramento:** O Google Cloud Console fornece ferramentas para monitorar o uso da API e acompanhar a quantidade de tokens processados. Analise os relatórios de uso para identificar tendências e áreas de potencial otimização;
- **Custos por modelo:** Os diferentes modelos Gemini possuem custos variados por token. Compare os preços e avalie se um modelo mais econômico pode atender às suas necessidades;
- **Tamanho dos prompts:** Prompts mais longos resultam em mais tokens processados e, consequentemente, custos mais altos. Avalie a possibilidade de reduzir o tamanho dos prompts, mantendo a clareza e a informação necessária;
- **Tamanho das respostas:** Controle o comprimento das respostas geradas pelo modelo utilizando o parâmetro "Comprimento máximo". Respostas mais concisas reduzem a quantidade de tokens e os custos.

## **Otimizações com contagem de tokens**

Após analisar os padrões de consumo, é hora de implementar estratégias para otimizar a contagem de tokens e reduzir os custos. Existem diversas técnicas que podem ser aplicadas, dependendo do seu caso de uso específico:

- **Tokenização eficiente:** Explore diferentes métodos de tokenização para encontrar aquele que melhor se adapta ao seu caso de uso. Alguns métodos podem resultar em menos tokens para a mesma quantidade de texto;
- **Limpeza de texto:** Remova informações irrelevantes do texto de entrada, como pontuação excessiva ou palavras de parada, para reduzir o número de tokens processados;
- **Resumo de texto:** Se o seu projeto envolve o processamento de grandes volumes de texto, considere utilizar técnicas de resumo para extrair as informações essenciais e reduzir o tamanho do texto a ser processado pela API;
- **Cache de respostas:** Armazene em cache as respostas geradas pela API para evitar processar as mesmas solicitações repetidamente, reduzindo custos.

# **Ferramentas e recursos**

O Google oferece diversas ferramentas e recursos para auxiliar na análise e otimização de custos com a Gemini API:

- **Google Cloud Pricing Calculator:** Utilize a calculadora de preços para estimar os custos com base no seu uso previsto da API;
- **Bibliotecas de tokenização:** Explore bibliotecas como a "SentencePiece" ou a "Hugging Face Tokenizers" para encontrar métodos de tokenização eficientes.

# Multimodal

https://ai.google.dev/gemini-api/docs/get-started/tutorial?hl=pt-br&lang=node#generate-text-from-text-and-image-input