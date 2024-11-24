export interface Conteudo {
    id: number;
    disciplina: string;
    temas: string[];
  }
  
  export interface Disciplina {
    id: number;
    nome: string;
    conteudos: Conteudo[];
  }
  
  export interface Prova {
    dia: number;
    nome: string;
    duracao: string;
    disciplinas: Disciplina[];
  }
  
  export interface Contents {
    provas: Prova[];
  }

export const Contents = {
    "provas": [
        {
            "dia": 1,
            "nome": "Linguagens, Ciências Humanas",
            "duracao": "5h30",
            "disciplinas": [
                {
                    "id": 1,
                    "nome": "Linguagens, Códigos e suas Tecnologias",
                    "conteudos": [
                        {
                            "disciplina": "Língua Portuguesa",
                            "temas": [
                                "Compreensão e interpretação de textos",
                                "Gêneros textuais e discursivos",
                                "Funções da linguagem",
                                "Figuras de linguagem e recursos expressivos",
                                "Norma culta e variação linguística",
                                "Coerência e coesão textual"
                            ]
                        },
                        {
                            "disciplina": "Literatura",
                            "temas": [
                                "Escolas literárias brasileiras",
                                "Interpretação de textos literários",
                                "Poesia e prosa no Modernismo",
                                "Literatura contemporânea",
                                "Contexto histórico e influências culturais",
                                "Relações entre literatura e outras artes"
                            ]
                        },
                        {
                            "disciplina": "Inglês ou Espanhol",
                            "temas": [
                                "Compreensão de textos em língua estrangeira",
                                "Identificação de informações explícitas e implícitas",
                                "Estratégias de leitura: inferência e dedução",
                                "Elementos culturais em textos estrangeiros",
                                "Uso contextualizado de vocabulário",
                                "Aspectos gramaticais relevantes"
                            ]
                        },
                        {
                            "disciplina": "Artes",
                            "temas": [
                                "História da arte: períodos e movimentos",
                                "Interpretação de obras visuais e musicais",
                                "Arte e cultura popular",
                                "Relações entre arte e sociedade",
                                "Novas tecnologias na produção artística",
                                "Arte brasileira e suas manifestações"
                            ]
                        },
                        {
                            "disciplina": "Educação Física",
                            "temas": [
                                "Esporte e qualidade de vida",
                                "Práticas corporais e cultura",
                                "Dimensões sociais do esporte",
                                "Saúde e atividade física",
                                "Lazer e inclusão social",
                                "História e evolução das práticas corporais"
                            ]
                        },
                        {
                            "disciplina": "Tecnologias da Informação e Comunicação",
                            "temas": [
                                "Impacto das tecnologias na sociedade",
                                "Uso crítico e ético da informação",
                                "Mídias digitais e educação",
                                "Comunicação e novas tecnologias",
                                "Produção e compartilhamento de conteúdo digital",
                                "Cidadania digital e segurança na internet"
                            ]
                        }
                    ]
                }
                ,
                {
                    "id": 2,
                    "nome": "Ciências Humanas e suas Tecnologias",
                    "conteudos": [
                        {
                            "disciplina": "História",
                            "temas": [
                                "Brasil Colônia: economia e sociedade",
                                "Independência e Império no Brasil",
                                "República e movimentos sociais no Brasil",
                                "Primeira e Segunda Guerras Mundiais",
                                "História da África e escravidão",
                                "Revoluções industriais e econômicas"
                            ]
                        },
                        {
                            "disciplina": "Geografia",
                            "temas": [
                                "Globalização e questões econômicas",
                                "Meio ambiente e sustentabilidade",
                                "Urbanização e redes de transporte",
                                "Geopolítica e conflitos mundiais",
                                "Clima, vegetação e recursos naturais",
                                "Dinâmicas demográficas e migrações"
                            ]
                        },
                        {
                            "disciplina": "Filosofia",
                            "temas": [
                                "Pensadores clássicos: Sócrates, Platão e Aristóteles",
                                "Ética e moral na filosofia",
                                "Filosofia política: Estado e sociedade",
                                "Racionalismo e empirismo",
                                "Existencialismo e liberdade",
                                "Cultura e conhecimento na modernidade"
                            ]
                        },
                        {
                            "disciplina": "Sociologia",
                            "temas": [
                                "Formação da sociedade brasileira",
                                "Estratificação social e desigualdade",
                                "Globalização e cultura",
                                "Movimentos sociais e cidadania",
                                "Industrialização e relações de trabalho",
                                "Instituições sociais: família, escola e religião"
                            ]
                        }
                    ]
                }                
            ]
        },
        {
            "dia": 2,
            "nome": "Matemática e Ciências da Natureza",
            "duracao": "5h",
            "disciplinas": [
                {
                    "id": 3,
                    "nome": "Matemática e suas Tecnologias",
                    "conteudos": [
                        {
                            "id": 1,
                            "disciplina": "Aritmética e Álgebra",
                            "temas": [
                                "Operações com números reais",
                                "Propriedades das potências e raízes",
                                "Equações e sistemas de equações",
                                "Inequações e intervalos",
                                "Progressões aritméticas e geométricas"
                            ]
                        },
                        {
                            "id": 2,
                            "disciplina": "Geometria",
                            "temas": [
                                "Figuras planas: perímetro, área e propriedades",
                                "Geometria espacial: volume e superfície",
                                "Trigonometria no triângulo retângulo",
                                "Razões trigonométricas e suas aplicações",
                                "Transformações geométricas e simetrias"
                            ]
                        },
                        {
                            "id": 3,
                            "disciplina": "Estatística e Probabilidade",
                            "temas": [
                                "Análise e interpretação de gráficos e tabelas",
                                "Cálculo de médias, moda e mediana",
                                "Desvio padrão e variância",
                                "Probabilidade e eventos independentes",
                                "Combinatória: princípios básicos"
                            ]
                        },
                        {
                            "id": 4,
                            "disciplina": "Matemática Financeira",
                            "temas": [
                                "Juros simples e compostos",
                                "Porcentagem e descontos",
                                "Cálculo de taxas e rendimentos",
                                "Análise de financiamentos e investimentos",
                                "Resolução de problemas financeiros cotidianos"
                            ]
                        }
                    ]
                },                
                {
                "id": 4,
                "nome": "Ciências da Natureza e suas Tecnologias",
                "conteudos": 
                    [
                        {
                        "id": 5,
                        "disciplina": "Biologia",
                        "temas": [
                            "Ecologia e meio ambiente",
                            "Genética e evolução",
                            "Fisiologia humana",
                            "Citologia, histologia e bioquímica"
                        ]
                        },
                        {
                        "id": 6,
                        "disciplina": "Física",
                        "temas": [
                            "Leis de Newton e cinemática",
                            "Energia, trabalho e potência",
                            "Ondas e óptica",
                            "Eletricidade e magnetismo"
                        ]
                        },
                        {
                        "id": 7,
                        "disciplina": "Química",
                        "temas": [
                            "Tabelas periódicas e propriedades dos elementos",
                            "Ligações químicas",
                            "Reações químicas",
                            "Química ambiental e orgânica"
                        ]
                        }
                    ]
                }
            ]
        }
    ]
}