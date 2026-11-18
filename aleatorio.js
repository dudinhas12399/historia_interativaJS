export const perguntas = [
  {
    enunciado: "A cidade tem pouco dinheiro. Onde investir primeiro?",
    alternativas: [
      {
        texto: "Educação.",
        afirmacao: [
          "A cidade melhorou a qualidade do ensino, oferecendo mais oportunidades para crianças e jovens.",
          "Os investimentos nas escolas contribuíram para a formação de profissionais mais preparados para o mercado de trabalho.",
          "A educação trouxe benefícios para a população, mas ainda precisava de mais recursos para alcançar todos os bairros."
        ]
      },
      {
        texto: "Saúde.",
        afirmacao: [
          "A população passou a contar com mais médicos e melhores condições de atendimento.",
          "A ampliação dos serviços de saúde ajudou a prevenir doenças e melhorar a qualidade de vida dos moradores.",
          "Apesar das melhorias, algumas regiões ainda enfrentavam dificuldades para conseguir atendimento médico."
        ]
      }
    ]
  },
  {
    enunciado: "A cidade enfrenta falta de água.",
    alternativas: [
      {
        texto: "Investir em infraestrutura.",
        afirmacao: [
          "A reforma do sistema de distribuição diminuiu os vazamentos e melhorou o abastecimento de água.",
          "Novos reservatórios foram construídos, garantindo maior segurança hídrica para a população.",
          "As obras ajudaram a resolver parte do problema, mas exigiram investimentos elevados da prefeitura."
        ]
      },
      {
        texto: "Criar campanhas de conscientização.",
        afirmacao: [
          "Os moradores começaram a utilizar a água de maneira mais consciente, evitando desperdícios.",
          "As escolas organizaram projetos para ensinar as crianças sobre a importância de preservar a água.",
          "As campanhas tiveram resultados positivos, mas não foram suficientes para resolver os problemas de abastecimento."
        ]
      }
    ]
  },
  {
    enunciado: "Há muito lixo nas ruas.",
    alternativas: [
      {
        texto: "Aumentar a coleta.",
        afirmacao: [
          "Com mais caminhões e funcionários, a coleta de lixo melhorou e as ruas ficaram mais organizadas.",
          "A limpeza frequente dos espaços públicos ajudou a diminuir a poluição e os riscos à saúde.",
          "Mesmo com a coleta ampliada, a população continuou produzindo muito lixo, aumentando os custos da prefeitura."
        ]
      },
      {
        texto: "Investir em reciclagem.",
        afirmacao: [
          "A coleta seletiva aumentou e muitos materiais que seriam descartados passaram a ser reutilizados.",
          "A reciclagem fortaleceu as cooperativas locais e contribuiu para a geração de empregos.",
          "A falta de conscientização de alguns moradores dificultou o crescimento da reciclagem na cidade."
        ]
      }
    ]
  },
  {
    enunciado: "O trânsito está piorando.",
    alternativas: [
      {
        texto: "Melhorar o transporte público.",
        afirmacao: [
          "A melhoria dos ônibus incentivou mais pessoas a deixar seus carros em casa.",
          "Com mais linhas e horários disponíveis, os moradores conseguiram se deslocar com maior facilidade.",
          "Apesar dos benefícios, a prefeitura precisou continuar investindo para atender toda a população."
        ]
      },
      {
        texto: "Construir novas vias.",
        afirmacao: [
          "As novas avenidas facilitaram o deslocamento dos moradores e melhoraram o acesso a algumas regiões.",
          "A ampliação das vias reduziu os congestionamentos inicialmente, mas exigiu muitos recursos públicos.",
          "Com o aumento do número de veículos, os congestionamentos voltaram e a poluição do ar aumentou."
        ]
      }
    ]
  },
  {
    enunciado: "Depois de quatro anos:",
    alternativas: [
      {
        texto: "A cidade ficou mais sustentável.",
        afirmacao: [
          "A cidade conseguiu equilibrar o desenvolvimento econômico com a preservação ambiental.",
          "Os moradores passaram a participar mais das decisões e a colaborar com projetos sustentáveis.",
          "Mesmo com os avanços, a cidade ainda precisava investir em novas soluções para proteger o meio ambiente."
        ]
      },
      {
        texto: "A cidade melhorou economicamente, mas ainda enfrenta problemas ambientais.",
        afirmacao: [
          "O crescimento econômico trouxe novos empregos, aumentou a renda e melhorou a vida de muitos moradores.",
          "O desenvolvimento da cidade aumentou o consumo de recursos naturais e a produção de lixo.",
          "A prefeitura percebeu que o crescimento econômico precisava acontecer junto com a preservação ambiental."
        ]
      }
    ]
  }
];
function aleatorio(lista){
  const posicao = Math.floor(Math.random()* lista.length);
  return lista [posicao];
}

mostraPergunta();
