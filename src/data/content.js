// =============================================================
//  Todo o conteúdo do site fica aqui. Edite só este arquivo
//  para atualizar textos, projetos, códigos, imagens e resultados.
// =============================================================

export const profile = {
  name: 'Lucas Kaftan Pasturuti',
  role: 'TI & Dados',
  headline: 'Transformo dados em decisão e processo manual em automação.',
  intro:
    'Sou Jovem Talento na Libbs Farmacêutica, na Diretoria de Inovação e Desenvolvimento do Negócio. Trabalho na fronteira entre negócio e tecnologia: construo dashboards, automatizo fluxos e transformo bases de mercado em análises que sustentam decisões de portfólio.',
  location: 'São Paulo, SP — Brasil',
  email: 'lucaskaftanp@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lucas-pasturuti-354523273/',
  github: 'https://github.com/studdw',
}

export const stack = [
  'Python',
  'SQL',
  'Git',
  'Github',
  'Power BI / DAX',
  'Power Automate',
  'Excel Avançado',
  'SAP',
  'React',
  'AWS',
  'Streamlit',
  'Microsoft Copilot 365',
  'Claude',
]

export const stackGroups = [
  {
    id: 'dados',
    label: 'Dados & BI',
    descricao: 'Modelagem, indicadores e visualização para decisão.',
    items: ['Power BI', 'DAX', 'SQL', 'SQLite', 'Excel Avançado', 'Big Data', 'Power Query'],
  },
  {
    id: 'dev',
    label: 'Desenvolvimento',
    descricao: 'Da automação de coleta à interface que o time usa.',
    items: ['Python', 'Java', 'Streamlit', 'Playwright', 'Pandas'],
  },
  {
    id: 'plataformas',
    label: 'Plataformas',
    descricao: 'Onde os processos rodam e os dados moram.',
    items: ['Power Automate', 'SharePoint', 'Microsoft Forms', 'SAP', 'AWS', 'Microsoft 365', 'Vercel'],
  },
]

export const stats = [
  { value: '5', label: 'projetos de dados, IA e automação entregues' },
  { value: '3', label: 'frentes: BI, automação e inteligência de mercado' },
  { value: '100%', label: 'foco em processo que roda sozinho' },
]

// ---------------------------- SOBRE ----------------------------

export const about = {
  title: 'Sobre',
  lead:
    'Gosto de problemas que começam com uma planilha bagunçada e terminam em um painel que alguém usa toda semana.',
  paragraphs: [
    'Comecei olhando para dados de mercado farmacêutico — bases de PMB e IQVIA, market share, CAGR, classificação de NCM — e rapidamente percebi que a parte mais valiosa não era o número em si, mas o caminho até ele: como coletar, como padronizar e como entregar de um jeito que a liderança consiga ler em trinta segundos.',
    'A partir daí passei a construir as ferramentas em vez de só operar: scripts em Python para coletar e tratar dados, medidas em DAX para dar consistência aos indicadores, fluxos em Power Automate para eliminar etapas manuais e aplicações em React e Streamlit quando o time precisava de algo com interface.',
    'Hoje meu foco é exatamente essa combinação — análise de dados, automação e desenvolvimento de produto digital — aplicada a problemas reais de negócio, com entregas que sobrevivem depois que a apresentação acaba.',
  ],
  education: [
    {
      title: 'Técnico em Administração',
      org: 'Formação em andamento',
      detail: 'Gestão, finanças e contabilidade aplicadas à leitura de negócio.',
    },
    {
      title: 'AWS Technical Essentials',
      org: 'AWS Skill Builder',
      detail: 'Fundamentos de cloud, computação, armazenamento e segurança.',
    },
    {
      title: 'Programa Jovens Talentos',
      org: 'Libbs Farmacêutica',
      detail: 'Projetos de inovação com apresentação direta à liderança.',
    },
  ],
  values: [
    {
      title: 'Precisão antes de bonito',
      text: 'Número errado em painel bonito é pior do que planilha crua. Valido o cálculo antes de pensar no layout.',
    },
    {
      title: 'Automatizar o repetitivo',
      text: 'Se a tarefa se repete toda semana, ela vira fluxo. O tempo do time volta para análise.',
    },
    {
      title: 'Simplicidade que comunica',
      text: 'Interface limpa, hierarquia clara e a informação principal em primeiro plano.',
    },
  ],
}

export const projects = [
  {
    slug: 'pesquisa-de-precos',
    title: 'Pesquisa de Preços por Molécula',
    year: '2026',
    category: 'Desenvolvimento',
    badge: 'v2 no ar',
    cover: '/assets/precos-v2-02.png',
    role: 'Concepção, desenvolvimento e deploy',
    summary:
      'Aplicação web que pesquisa preços de medicamentos por molécula em fontes reais — base oficial CMED/Anvisa, API da Drogaria São Paulo e HTML da Ultrafarma — e entrega uma planilha Excel pronta para uso.',
    highlights: [
      'Dados reais: CMED/Anvisa, API da Drogaria São Paulo e extração do HTML da Ultrafarma',
      'Até 15 moléculas por busca, com cache e filtros por farmácia e laboratório',
      'Exportação para Excel pronta para análise · deploy na Vercel',
    ],
    tags: ['React', 'Python', 'APIs', 'Web Scraping', 'Vercel', 'Excel'],

    problem:
      'O acompanhamento de preços de medicamentos era feito manualmente: abrir cada farmácia, buscar molécula por molécula, copiar valores e montar planilha. A primeira versão automatizou isso com IA lendo as páginas, mas a IA às vezes interpretava errado ou "inventava" apresentações — e número de preço não pode ser aproximado.',
    solution:
      'Reconstruí o sistema do zero usando apenas fontes estruturadas: a tabela oficial CMED/Anvisa como referência de preço máximo (PMC), a API pública da Drogaria São Paulo e a extração direta do HTML da Ultrafarma. Os resultados são normalizados em uma tabela única, com laboratório identificado, desconto e preço unitário, e saem em um Excel pronto para o time usar.',

    versions: [
      {
        version: 'v1',
        date: 'Primeira versão',
        status: 'descontinuada',
        title: 'Protótipo com IA lendo as páginas',
        text:
          'Streamlit + Playwright abriam a busca de cada farmácia e um modelo de IA (Gemini) interpretava a página para montar o relatório. Funcionou como prova de conceito, mas dependia da leitura da IA.',
        points: [
          'Interface em Streamlit com chave de API da IA',
          'Coleta via navegador automatizado (Playwright)',
          'IA extraía produto, apresentação e preço',
          'Resultados precisavam de conferência manual',
        ],
        image: '/assets/precos-01.png',
      },
      {
        version: 'v2',
        date: 'Versão atual',
        status: 'no ar',
        title: 'Bases reais, aplicação própria e deploy na Vercel',
        text:
          'Reescrita completa: sem IA no caminho do número. Cada fonte é lida da forma mais confiável possível e o resultado vira uma tabela única com exportação direta para Excel.',
        points: [
          'CMED/Anvisa como base oficial de preço (PMC)',
          'API da Drogaria São Paulo e HTML da Ultrafarma',
          'Até 15 moléculas por busca, com cache',
          'Excel pronto para uso com um clique',
        ],
        image: '/assets/precos-v2-01.png',
      },
    ],

    changes: [
      { label: 'Origem dos dados', before: 'IA interpretando a página', after: 'CMED oficial, API e HTML estruturado' },
      { label: 'Confiabilidade', before: 'Conferência manual necessária', after: 'Preço exatamente como na fonte' },
      { label: 'Busca', before: '1 molécula por vez', after: 'Até 15 moléculas de uma vez' },
      { label: 'Entrega', before: 'Relatório para revisar', after: 'Planilha Excel pronta para uso' },
      { label: 'Acesso', before: 'App Streamlit local', after: 'Aplicação web na Vercel com login' },
    ],

    process: [
      {
        title: 'Lições da v1',
        text: 'Mapeei onde a primeira versão errava: quase sempre na interpretação da IA (apresentação trocada, preço promocional confundido). A conclusão foi tirar a IA do caminho do número.',
      },
      {
        title: 'Escolha das fontes',
        text: 'Para cada fonte, a forma mais estável de leitura: arquivo oficial da CMED/Anvisa, API pública da Drogaria São Paulo e parsing direto do HTML da Ultrafarma.',
      },
      {
        title: 'Normalização',
        text: 'Todas as fontes convergem para o mesmo formato: molécula, farmácia, produto, laboratório, quantidade, preço, preço "de", desconto e preço unitário.',
      },
      {
        title: 'Interface',
        text: 'Busca de várias moléculas de uma vez, seleção de farmácias, cartões-resumo por molécula (menor preço, média, máximo, laboratórios) e tabela com filtros.',
      },
      {
        title: 'Excel e deploy',
        text: 'Exportação da tabela filtrada para Excel pronta para uso e publicação na Vercel com acesso por login e cache para não repetir buscas.',
      },
    ],

    results: [
      { value: '3 fontes reais', label: 'CMED/Anvisa, Drogaria São Paulo e Ultrafarma' },
      { value: '0 IA no preço', label: 'número sempre igual ao da fonte' },
      { value: '1 clique', label: 'da busca à planilha Excel pronta' },
    ],

    gallery: [
      { src: '/assets/precos-v2-01.png', caption: 'v2 — busca de várias moléculas e seleção das farmácias.' },
      { src: '/assets/precos-v2-02.png', caption: 'v2 — resumo por molécula e tabela com filtros e exportação para Excel.' },
      { src: '/assets/precos-01.png', caption: 'v1 — protótipo em Streamlit com IA (descontinuado).' },
      { src: '/assets/precos-02.png', caption: 'v1 — relatório gerado pela IA, que exigia conferência.' },
    ],

    code: [
      {
        label: 'Base CMED/Anvisa',
        language: 'python',
        description:
          'Leitura da lista oficial de preços da CMED e filtro pela molécula, usando o PMC como referência de preço máximo ao consumidor.',
        snippet: `import pandas as pd

def buscar_cmed(base: pd.DataFrame, molecula: str) -> list[dict]:
    """Filtra a lista CMED pelo princípio ativo e devolve no formato padrão."""
    alvo = molecula.strip().upper()
    achados = base[base["SUBSTANCIA"].str.upper().str.contains(alvo, na=False)]

    return [
        {
            "molecula": molecula.title(),
            "farmacia": "CMED/Anvisa (PMC)",
            "produto": f'{row["PRODUTO"]} {row["APRESENTACAO"]}',
            "laboratorio": row["LABORATORIO"],
            "quantidade": extrair_quantidade(row["APRESENTACAO"]),
            "preco": row["PMC 0%"],
        }
        for _, row in achados.iterrows()
    ]`,
      },
      {
        label: 'API Drogaria São Paulo',
        language: 'python',
        description:
          'Consulta à API de busca da farmácia, já devolvendo preço, preço "de" e marca estruturados — sem interpretar página.',
        snippet: `import httpx

def buscar_drogaria_sp(molecula: str) -> list[dict]:
    resp = httpx.get(
        DSP_SEARCH_URL,
        params={"q": molecula, "page": 1, "size": 50},
        timeout=20,
    )
    resp.raise_for_status()

    itens = []
    for p in resp.json().get("products", []):
        oferta = p["items"][0]["sellers"][0]["commertialOffer"]
        if not oferta["AvailableQuantity"]:
            continue
        itens.append({
            "molecula": molecula.title(),
            "farmacia": "Drogaria São Paulo",
            "produto": p["productName"],
            "laboratorio": p.get("brand"),
            "preco": oferta["Price"],
            "preco_de": oferta["ListPrice"],
            "link": p["link"],
        })
    return itens`,
      },
      {
        label: 'HTML da Ultrafarma',
        language: 'python',
        description:
          'Extração direta do HTML da página de busca com seletores, sem navegador automatizado e sem IA.',
        snippet: `from selectolax.parser import HTMLParser

def buscar_ultrafarma(molecula: str) -> list[dict]:
    html = httpx.get(ULTRAFARMA_BUSCA, params={"q": molecula}, timeout=20).text
    arvore = HTMLParser(html)

    itens = []
    for card in arvore.css(".product-item"):
        nome = card.css_first(".product-name")
        preco = card.css_first(".product-price-sell")
        if not nome or not preco:
            continue
        de = card.css_first(".product-price-old")
        itens.append({
            "molecula": molecula.title(),
            "farmacia": "Ultrafarma",
            "produto": nome.text(strip=True),
            "preco": normalizar_preco(preco.text()),
            "preco_de": normalizar_preco(de.text()) if de else None,
        })
    return itens`,
      },
      {
        label: 'Excel pronto para uso',
        language: 'python',
        description:
          'Consolida as fontes, calcula desconto e preço unitário e gera a planilha formatada.',
        snippet: `def gerar_excel(registros: list[dict]) -> bytes:
    df = pd.DataFrame(registros)
    df["desconto"] = 1 - df["preco"] / df["preco_de"]
    df["preco_unit"] = df["preco"] / df["quantidade"].fillna(1)
    df = df.sort_values(["molecula", "preco"])

    buffer = io.BytesIO()
    with pd.ExcelWriter(buffer, engine="openpyxl") as xls:
        df.to_excel(xls, sheet_name="Precos", index=False)
        resumo = df.groupby("molecula")["preco"].agg(["min", "mean", "max"])
        resumo.to_excel(xls, sheet_name="Resumo")
    return buffer.getvalue()`,
      },
    ],

    stackDetail: [
      { name: 'React', use: 'Interface de busca, cartões-resumo e tabela com filtros' },
      { name: 'Python', use: 'Coleta, normalização e regras de negócio' },
      { name: 'CMED/Anvisa', use: 'Base oficial de preço máximo ao consumidor (PMC)' },
      { name: 'APIs & HTML', use: 'API da Drogaria São Paulo e parsing do HTML da Ultrafarma' },
      { name: 'Excel', use: 'Planilha consolidada pronta para uso' },
      { name: 'Vercel', use: 'Deploy, acesso por login e cache' },
    ],
  },

  {
    slug: 'leads-juridico',
    title: 'Radar de Leads com IA',
    year: '2026',
    category: 'IA',
    badge: 'Novo',
    cover: '/assets/leads-02.png',
    role: 'Concepção, desenvolvimento e integração com IA',
    summary:
      'Sistema interno para uma consultoria jurídica que centraliza os leads de todos os canais, usa IA para classificar área do direito, urgência e chance de conversão, e garante que nenhum contato fique sem resposta.',
    highlights: [
      'Triagem automática por IA: área, urgência, resumo e score de conversão',
      'Pipeline visual do primeiro contato até o contrato assinado',
      'Alertas de prazo e de leads esfriando, com sugestão de follow-up',
    ],
    tags: ['IA', 'Python', 'React', 'CRM', 'Automação'],

    problem:
      'Os contatos de potenciais clientes chegavam por WhatsApp, site, Instagram e indicação, cada um em um lugar. Não havia como saber quais casos eram mais urgentes, quem estava atendendo cada pessoa ou quantos leads tinham ficado sem retorno — e em direito, demorar a responder pode significar perder um prazo do cliente.',
    solution:
      'Construí um sistema interno que recebe os leads de todos os canais em um só lugar. Assim que um lead entra, a IA lê a mensagem, identifica a área do direito, a urgência, os documentos citados e gera um resumo e um score de conversão. O time trabalha em um pipeline visual, recebe alertas de prazo e de leads parados, e acompanha o funil num painel de captação.',

    process: [
      {
        title: 'Entendimento do atendimento',
        text: 'Mapeei com o time por onde os leads chegavam, quais perguntas eram feitas na triagem e em que ponto os contatos se perdiam.',
      },
      {
        title: 'Entrada unificada',
        text: 'Integração dos canais de entrada em uma base única, criando o lead automaticamente com origem, horário e histórico de conversa.',
      },
      {
        title: 'Triagem com IA',
        text: 'Prompt estruturado que devolve JSON com área, subárea, urgência, documentos citados, resumo e score — validado antes de gravar, para nunca quebrar o fluxo.',
      },
      {
        title: 'Pipeline e alertas',
        text: 'Kanban por etapa (novo, qualificado, em contato, consulta agendada, contratado), com alertas de prazo e de leads sem retorno há mais de 48h.',
      },
      {
        title: 'Painel de captação',
        text: 'Funil do mês, conversão por área, origem dos leads, tempo de primeira resposta e lista de prioridades sugeridas pela IA.',
      },
    ],

    results: [
      { value: 'Minutos', label: 'tempo de primeira resposta, antes medido em horas' },
      { value: '1 lugar só', label: 'todos os canais de entrada centralizados' },
      { value: 'Nenhum lead esquecido', label: 'alertas automáticos de follow-up' },
    ],

    gallery: [
      { src: '/assets/leads-01.png', caption: 'Painel de captação: funil, conversão por área e prioridades da IA.' },
      { src: '/assets/leads-02.png', caption: 'Pipeline de leads ordenado pelo score da IA.' },
      { src: '/assets/leads-03.png', caption: 'Detalhe do lead com a conversa e a análise da IA.' },
    ],

    code: [
      {
        label: 'Triagem do lead com IA',
        language: 'python',
        description:
          'A IA recebe a conversa e devolve um JSON estruturado, que é validado antes de ser salvo.',
        snippet: `from pydantic import BaseModel, Field

class Triagem(BaseModel):
    area: str                      # Trabalhista, Família, Previdenciário...
    subarea: str
    urgencia: str                  # baixa | media | alta
    documentos: list[str]
    alerta_prazo: bool
    resumo: str
    score: int = Field(ge=0, le=100)

PROMPT = """Você faz a triagem de leads de uma consultoria jurídica.
Leia a conversa e responda APENAS com JSON no formato:
{schema}
Não dê orientação jurídica; apenas classifique o caso.

Conversa:
{conversa}"""

def triar_lead(conversa: str) -> Triagem:
    resposta = cliente_llm.gerar(
        PROMPT.format(schema=Triagem.model_json_schema(), conversa=conversa)
    )
    return Triagem.model_validate_json(resposta)`,
      },
      {
        label: 'Prioridade do pipeline',
        language: 'python',
        description:
          'O score da IA é combinado com regras de negócio para ordenar quem deve ser atendido primeiro.',
        snippet: `from datetime import datetime, timedelta

def prioridade(lead: dict) -> float:
    p = lead["score_ia"]

    if lead["alerta_prazo"]:
        p += 25
    if lead["urgencia"] == "alta":
        p += 10

    sem_resposta = datetime.now() - lead["ultima_interacao"]
    if sem_resposta > timedelta(hours=48):
        p += 15            # lead esfriando: sobe na fila

    return min(p, 150)

fila = sorted(leads_ativos(), key=prioridade, reverse=True)`,
      },
      {
        label: 'Alerta de follow-up',
        language: 'sql',
        description: 'Consulta usada pela rotina que avisa o responsável sobre leads parados.',
        snippet: `SELECT l.id,
       l.nome,
       l.area,
       l.score_ia,
       u.email AS responsavel,
       NOW() - l.ultima_interacao AS tempo_parado
FROM   leads l
JOIN   usuarios u ON u.id = l.responsavel_id
WHERE  l.etapa NOT IN ('contratado', 'descartado')
  AND  l.ultima_interacao < NOW() - INTERVAL '48 hours'
ORDER  BY l.score_ia DESC;`,
      },
    ],

    stackDetail: [
      { name: 'Python', use: 'Regras de negócio, integrações e rotinas agendadas' },
      { name: 'LLM (IA)', use: 'Triagem, resumo, score e sugestão de mensagem' },
      { name: 'React', use: 'Pipeline, detalhe do lead e painel de captação' },
      { name: 'PostgreSQL', use: 'Base única de leads, etapas e histórico' },
      { name: 'Pydantic', use: 'Validação da resposta da IA antes de gravar' },
    ],
  },

  {
    slug: 'dashboard-budget',
    title: 'Dashboard de Budget de Novos Produtos',
    year: '2026',
    category: 'BI',
    cover: '/assets/budget-01.png',
    role: 'Modelagem, medidas e design do painel',
    summary:
      'Painel de acompanhamento do orçamento de novos produtos, com visão de planejado x realizado e detalhamento por projeto.',
    highlights: [
      'Modelagem e medidas em DAX no Power BI',
      'Base tratada em Excel com PROCX e SOMASES',
      'Visão executiva para reuniões de acompanhamento',
    ],
    tags: ['Power BI', 'DAX', 'Excel', 'Finanças'],

    problem:
      'O acompanhamento do orçamento de novos produtos vivia espalhado em planilhas separadas por projeto. Consolidar planejado x realizado dava trabalho, o número mudava conforme quem montava, e não havia uma visão única para a reunião de acompanhamento.',
    solution:
      'Modelei uma base única com tabela de projetos, calendário e lançamentos, criei as medidas em DAX para padronizar os indicadores e desenhei um painel com visão executiva no topo e detalhamento por projeto abaixo.',

    process: [
      {
        title: 'Consolidação das bases',
        text: 'Unificação das planilhas por projeto em uma estrutura padronizada, com PROCX e SOMASES para cruzar centros de custo e categorias.',
      },
      {
        title: 'Modelagem',
        text: 'Modelo estrela com tabela fato de lançamentos e dimensões de projeto, categoria e calendário.',
      },
      {
        title: 'Medidas DAX',
        text: 'Criação das medidas de planejado, realizado, saldo, % de consumo e variação, garantindo o mesmo cálculo em todos os visuais.',
      },
      {
        title: 'Layout executivo',
        text: 'Cartões de indicador no topo, evolução mensal no meio e tabela detalhada por projeto, com destaque visual para estouro de orçamento.',
      },
      {
        title: 'Rotina de atualização',
        text: 'Padronização da carga para que a atualização do painel passasse a ser um passo simples e repetível.',
      },
    ],

    results: [
      { value: 'Fonte única', label: 'fim da divergência entre planilhas' },
      { value: 'Planejado x realizado', label: 'visível por projeto e por mês' },
      { value: 'Reunião pronta', label: 'painel substituiu a consolidação manual' },
    ],

    gallery: [
      { src: '/assets/budget-01.png', caption: 'Visão do desenvolvedor: Página inicial do Dashboard - dentro do BI' },
      { src: '/assets/budget-02.png', caption: 'Evolução mensal / Gráficos gerais.' },
      { src: '/assets/budget-03.png', caption: 'Detalhamento por projeto em orçamento' },
    ],

    code: [
      {
        label: 'Medidas base — DAX',
        language: 'dax',
        description: 'Indicadores principais de orçamento, sempre calculados a partir da mesma fonte.',
        snippet: `Realizado =
SUM ( fLancamentos[Valor] )

Planejado =
SUM ( fOrcamento[ValorPlanejado] )

Saldo =
[Planejado] - [Realizado]

% Consumo =
DIVIDE ( [Realizado], [Planejado], 0 )

Variação % =
DIVIDE ( [Realizado] - [Planejado], [Planejado], 0 )`,
      },
      {
        label: 'Acumulado e comparativo',
        language: 'dax',
        description: 'Realizado acumulado no ano e comparação com o mesmo período do ano anterior.',
        snippet: `Realizado YTD =
TOTALYTD ( [Realizado], dCalendario[Data] )

Realizado Ano Anterior =
CALCULATE (
    [Realizado],
    SAMEPERIODLASTYEAR ( dCalendario[Data] )
)

Crescimento YoY % =
VAR Atual     = [Realizado]
VAR Anterior  = [Realizado Ano Anterior]
RETURN
    DIVIDE ( Atual - Anterior, Anterior )`,
      },
      {
        label: 'Alerta de estouro',
        language: 'dax',
        description: 'Medida usada na formatação condicional para destacar projetos acima do orçado.',
        snippet: `Status Orçamento =
VAR Consumo = [% Consumo]
RETURN
    SWITCH (
        TRUE (),
        Consumo > 1,    "Estourado",
        Consumo >= 0.9, "Atenção",
        "Dentro do previsto"
    )

Cor Status =
SWITCH (
    [Status Orçamento],
    "Estourado",  "#B84A00",
    "Atenção",    "#FF6B00",
    "#6B6B6B"
)`,
      },
      {
        label: 'Tratamento no Excel',
        language: 'excel',
        description: 'Fórmulas usadas para consolidar as planilhas de origem antes da carga.',
        snippet: `// Traz a categoria do projeto a partir da tabela de cadastro
=PROCX([@Projeto]; Cadastro[Projeto]; Cadastro[Categoria]; "Não cadastrado")

// Realizado do projeto no mês, por categoria
=SOMASES(
    Lancamentos[Valor];
    Lancamentos[Projeto]; [@Projeto];
    Lancamentos[Categoria]; [@Categoria];
    Lancamentos[Data]; ">="&[@InicioMes];
    Lancamentos[Data]; "<="&[@FimMes]
)

// % de consumo com proteção contra divisão por zero
=SE([@Planejado]=0; ""; [@Realizado]/[@Planejado])`,
      },
    ],

    stackDetail: [
      { name: 'Power BI', use: 'Modelagem, visuais e publicação' },
      { name: 'DAX', use: 'Medidas de orçamento, acumulados e alertas' },
      { name: 'Power Query', use: 'Carga e limpeza das bases de origem' },
      { name: 'Excel', use: 'Consolidação prévia com PROCX e SOMASES' },
    ],
  },

  {
    slug: 'automacao-pagamentos',
    title: 'Automação de Solicitação de Pagamento',
    year: '2026',
    category: 'Automação',
    cover: '/assets/pagamentos-02.png',
    role: 'Desenho do processo e construção do fluxo',
    summary:
      'Fluxo digital ponta a ponta que padronizou a abertura de solicitações de pagamento, com rastreabilidade e redução de retrabalho.',
    highlights: [
      'Formulário em Microsoft Forms como entrada única',
      'Orquestração de aprovações em Power Automate',
      'Registro centralizado em SharePoint',
    ],
    tags: ['Power Automate', 'Forms', 'SharePoint', 'Processos'],

    problem:
      'As solicitações de pagamento chegavam por e-mail, cada uma em um formato. Faltava informação, o pedido ficava parado sem ninguém saber com quem estava e não existia registro consolidado do que já havia sido solicitado.',
    solution:
      'Criei uma entrada única em formulário com campos obrigatórios, um fluxo de aprovação automatizado que roteia o pedido para o responsável correto e notifica o solicitante a cada etapa, e um registro centralizado em lista do SharePoint que serve de histórico e base para acompanhamento.',

    process: [
      {
        title: 'Mapeamento do processo atual',
        text: 'Levantei como o pedido nascia, por quantas mãos passava e onde ele costumava travar.',
      },
      {
        title: 'Entrada padronizada',
        text: 'Formulário com campos obrigatórios e validação, eliminando o pedido incompleto na origem.',
      },
      {
        title: 'Fluxo de aprovação',
        text: 'Power Automate cria o item no SharePoint, dispara a aprovação e trata os caminhos de aprovado e reprovado.',
      },
      {
        title: 'Notificações',
        text: 'Comunicação automática ao solicitante e ao aprovador em cada mudança de status.',
      },
      {
        title: 'Acompanhamento',
        text: 'Lista do SharePoint com visão de status, servindo como histórico e base de consulta.',
      },
    ],

    results: [
      { value: 'Entrada única', label: 'fim do pedido solto por e-mail' },
      { value: 'Rastreável', label: 'status visível em todas as etapas' },
      { value: 'Menos retrabalho', label: 'campos obrigatórios na origem' },
    ],

    gallery: [
      { src: '/assets/pagamentos-01.png', caption: 'Formulário de solicitação com campos obrigatórios.' },
      { src: '/assets/pagamentos-02.png', caption: 'Fluxo de aprovação montado no Power Automate.' },
      { src: '/assets/pagamentos-03.png', caption: 'Lista de acompanhamento no SharePoint com status.' },
    ],

    code: [
      {
        label: 'Estrutura do fluxo',
        language: 'text',
        description: 'Desenho lógico do fluxo construído no Power Automate.',
        snippet: `GATILHO
  └─ Quando uma nova resposta é enviada (Microsoft Forms)

AÇÕES
  1. Obter detalhes da resposta
  2. Criar item na lista do SharePoint  → Status: "Em aprovação"
  3. Iniciar e aguardar uma aprovação   → Aprovador definido pela área
  4. Condição: Resultado = "Approve"?

     ├─ SIM
     │    ├─ Atualizar item  → Status: "Aprovado"
     │    ├─ Enviar e-mail ao solicitante
     │    └─ Notificar financeiro para processamento
     │
     └─ NÃO
          ├─ Atualizar item  → Status: "Reprovado"
          └─ Enviar e-mail ao solicitante com o comentário do aprovador`,
      },
      {
        label: 'Definição do aprovador',
        language: 'text',
        description: 'Expressão usada para rotear a aprovação conforme a área informada no formulário.',
        snippet: `// Roteamento do aprovador conforme a área do solicitante
if(
  equals(triggerOutputs()?['body/area'], 'Novos Produtos'),
  variables('aprovadorNovosProdutos'),
  if(
    equals(triggerOutputs()?['body/area'], 'Marketing'),
    variables('aprovadorMarketing'),
    variables('aprovadorPadrao')
  )
)

// Identificador único do pedido
concat(
  'SP-',
  formatDateTime(utcNow(), 'yyyyMM'),
  '-',
  outputs('Criar_item')?['body/ID']
)`,
      },
      {
        label: 'Campos da lista SharePoint',
        language: 'text',
        description: 'Estrutura da lista que registra e dá rastreabilidade a cada solicitação.',
        snippet: `Lista: Solicitações de Pagamento

| Campo            | Tipo              | Observação                      |
|------------------|-------------------|---------------------------------|
| ID Solicitação   | Texto             | Gerado pelo fluxo (SP-AAAAMM-n) |
| Solicitante      | Pessoa            | Vem do Forms                    |
| Área             | Escolha           | Define o aprovador              |
| Fornecedor       | Texto             | Obrigatório                     |
| Valor            | Moeda             | Obrigatório                     |
| Centro de Custo  | Texto             | Obrigatório                     |
| Descrição        | Texto multilinha  | Justificativa do pedido         |
| Anexo            | Anexo             | Nota / orçamento                |
| Status           | Escolha           | Em aprovação / Aprovado / Reprovado |
| Aprovador        | Pessoa            | Preenchido pelo fluxo           |
| Data Aprovação   | Data e hora       | Preenchido pelo fluxo           |`,
      },
    ],

    stackDetail: [
      { name: 'Microsoft Forms', use: 'Entrada padronizada com campos obrigatórios' },
      { name: 'Power Automate', use: 'Orquestração, aprovações e notificações' },
      { name: 'SharePoint', use: 'Registro centralizado e acompanhamento' },
      { name: 'Outlook', use: 'Comunicação automática a cada etapa' },
    ],
  },

  {
    slug: 'inteligencia-de-mercado',
    title: 'Inteligência de Mercado Farmacêutico',
    year: '2025 — 2026',
    category: 'Dados',
    role: 'Análise, consolidação e apresentação',
    summary:
      'Análises recorrentes de bases PMB e IQVIA para leitura de canais, evolução de moléculas, lançamentos e posicionamento competitivo.',
    highlights: [
      'Market share, CAGR e evolução por canal (varejo e institucional)',
      'Classificação e pesquisa de NCM de portfólio',
      'Consolidação de dados em relatórios e apresentações executivas',
    ],
    tags: ['Análise de Dados', 'Excel', 'Power BI', 'Market Research'],

    problem:
      'As bases de mercado chegam grandes, com muitas linhas de produto, apresentações de molécula e recortes de canal. Responder perguntas simples — como uma classe evoluiu, quem lançou o quê nos últimos anos, qual o peso de cada canal — exigia refazer o mesmo trabalho manual toda vez.',
    solution:
      'Estruturei um processo de tratamento e análise repetível: padronização das bases, cálculo consistente de share, evolução e CAGR, separação clara entre varejo e institucional, e entrega em planilhas editáveis e apresentações prontas para a liderança.',

    process: [
      {
        title: 'Padronização da base',
        text: 'Limpeza de nomes de produto e laboratório, ajuste de tipos e organização por ano, canal e molécula.',
      },
      {
        title: 'Recorte por canal',
        text: 'Separação entre varejo e institucional (No Retail), garantindo que cada leitura use o recorte correto.',
      },
      {
        title: 'Indicadores',
        text: 'Cálculo de market share, evolução ano a ano e CAGR, com validação dos números antes de qualquer gráfico.',
      },
      {
        title: 'Leitura de lançamentos',
        text: 'Identificação de produtos novos por período para mapear movimentação competitiva na classe.',
      },
      {
        title: 'Entrega',
        text: 'Planilhas editáveis com abas separadas por tipo de análise e apresentações executivas com a leitura pronta.',
      },
    ],

    results: [
      { value: 'Processo repetível', label: 'mesma análise, sem refazer do zero' },
      { value: 'Varejo x institucional', label: 'recorte de canal padronizado' },
      { value: 'Pronto para decisão', label: 'entrega em formato executivo' },
    ],

    gallery: [
      { src: '/assets/mercado-01.png', caption: 'Evolução da classe por ano e por canal.' },
      { src: '/assets/mercado-02.png', caption: 'Market share dos principais players.' },
      { src: '/assets/mercado-03.png', caption: 'Planilha consolidada com abas de evolução e unidades por ano.' },
    ],

    code: [
      {
        label: 'Tratamento da base',
        language: 'python',
        description: 'Padronização da base de mercado e criação do recorte de canal.',
        snippet: `import pandas as pd

def tratar_base(caminho: str) -> pd.DataFrame:
    df = pd.read_excel(caminho)

    df.columns = (
        df.columns.str.strip()
                  .str.lower()
                  .str.replace(" ", "_")
    )

    df["produto"] = df["produto"].str.upper().str.strip()
    df["laboratorio"] = df["laboratorio"].str.upper().str.strip()

    # Recorte de canal: institucional = No Retail
    df["canal"] = df["canal"].map({
        "Retail": "Varejo",
        "No Retail": "Institucional",
    }).fillna("Outros")

    return df`,
      },
      {
        label: 'Share, evolução e CAGR',
        language: 'python',
        description: 'Indicadores calculados sempre da mesma forma, para evitar divergência entre análises.',
        snippet: `def market_share(df: pd.DataFrame, ano: int) -> pd.DataFrame:
    base = df[df["ano"] == ano]
    total = base["unidades"].sum()

    return (
        base.groupby("laboratorio", as_index=False)["unidades"]
            .sum()
            .assign(share=lambda d: d["unidades"] / total)
            .sort_values("share", ascending=False)
    )

def evolucao_anual(df: pd.DataFrame) -> pd.DataFrame:
    serie = df.groupby("ano", as_index=False)["unidades"].sum()
    serie["evolucao_%"] = serie["unidades"].pct_change()
    return serie

def cagr(valor_inicial: float, valor_final: float, anos: int) -> float:
    """Taxa composta de crescimento anual."""
    if valor_inicial <= 0 or anos <= 0:
        return 0.0
    return (valor_final / valor_inicial) ** (1 / anos) - 1`,
      },
      {
        label: 'Lançamentos do período',
        language: 'python',
        description: 'Identificação dos produtos que passaram a existir na base dentro de uma janela de anos.',
        snippet: `def lancamentos(df: pd.DataFrame, desde: int) -> list[str]:
    """Produtos cujo primeiro ano de presença na base é >= 'desde'."""
    primeiro_ano = (
        df[df["unidades"] > 0]
        .groupby("produto")["ano"]
        .min()
    )
    novos = primeiro_ano[primeiro_ano >= desde]
    return sorted(novos.index.tolist())

# Exemplo: novos produtos de 2024 em diante
# >>> ", ".join(lancamentos(df, 2024))`,
      },
      {
        label: 'Fórmulas de apoio no Excel',
        language: 'excel',
        description: 'Cálculos usados nas planilhas entregues ao time.',
        snippet: `// Unidades do produto no ano e no canal
=SOMASES(
    Base[Unidades];
    Base[Produto]; [@Produto];
    Base[Ano]; [@Ano];
    Base[Canal]; "Institucional"
)

// Market share do produto no ano
=SE([@TotalAno]=0; ""; [@Unidades]/[@TotalAno])

// Evolução ano a ano
=SE([@AnoAnterior]=0; ""; [@AnoAtual]/[@AnoAnterior]-1)

// CAGR de 5 anos
=SE([@AnoInicial]<=0; ""; ([@AnoFinal]/[@AnoInicial])^(1/5)-1)`,
      },
    ],

    stackDetail: [
      { name: 'Excel Avançado', use: 'SOMASES, PROCX e consolidação das bases' },
      { name: 'Python / pandas', use: 'Tratamento e cálculo dos indicadores' },
      { name: 'Power BI', use: 'Visualização e leitura por canal' },
      { name: 'PowerPoint', use: 'Apresentação executiva dos resultados' },
    ],
  },

]

export const getProject = (slug) => projects.find((p) => p.slug === slug)

// -------------------------- ASK ME ---------------------------

export const askMe = {
  avatar: 'assets/avatar.jpg',
  titulo: 'Pergunte pra mim',
  subtitulo: 'Respostas rápidas sobre como eu trabalho',
  placeholder: 'Escolha uma pergunta abaixo 👇',
  perguntas: [
    {
      pergunta: 'Como você começa um projeto novo?',
      resposta:
        'Entendendo a dor antes da ferramenta. Pergunto quem usa, com que frequência e o que trava hoje só depois decido se aquilo vira um painel, um fluxo automatizado ou um script. Muita coisa que parece problema de tecnologia é, na real, problema de processo.',
    },
    {
      pergunta: 'O que você faz na Libbs?',
      resposta:
        'Atuo na Gerência de Novos Produtos, dentro da Diretoria de Inovação. Na prática, sustento decisões de portfólio com análise de mercado e construo as ferramentas que o time usa: dashboards em Power BI, automações em Power Automate e aplicações próprias em Python.',
    },
    {
      pergunta: 'Dados ou desenvolvimento?',
      resposta:
        'Os dois e é justamente aí que eu rendo mais. Analisar bem me diz o que precisa existir; saber desenvolver me permite construir. Entregar o número junto com a ferramenta que o mantém atualizado vale muito mais do que só entregar o slide.',
    },
  ],
}

// ------------------------ CERTIFICAÇÕES ------------------------

export const certificationsProfileUrl =
  'https://www.linkedin.com/in/lucas-pasturuti-354523273/details/certifications/'

export const certifications = [
  {
    title: 'AWS Technical Essentials',
    issuer: 'Amazon Web Services',
    date: 'set 2026',
    description:
      'Fundamentos de computação em nuvem e principais serviços da AWS: EC2, S3, RDS, VPC, IAM, Lambda e DynamoDB, além de segurança, redes e modelos de cobrança.',
    skills: ['Cloud', 'AWS', 'Engenharia de Dados'],
    url: 'https://www.linkedin.com/in/lucas-pasturuti-354523273/details/certifications/',
  },
  {
    title: 'Por dentro da Segurança Cibernética',
    issuer: 'SENAI São Paulo',
    date: 'set 2026',
    description:
      'Conceitos de segurança da informação, vetores de ataque e boas práticas de proteção aplicadas ao ambiente corporativo.',
    skills: ['Cibersegurança', 'TI'],
    url: 'https://www.sp.senai.br/consulta-certificado?qrcode=00055/8340269',
  },
  {
    title: 'Python para Dados',
    issuer: 'Alura',
    date: 'ago 2026',
    description:
      'Manipulação e análise de dados com Python, do tratamento de bases à extração de indicadores.',
    skills: ['Python', 'Análise de Dados'],
    credential: '6292dfe9-4906-4ab1-be97-335080e325ed',
    url: 'https://cursos.alura.com.br/certificate/6292dfe9-4906-4ab1-be97-335080e325ed',
  },
  {
    title: 'SQLite Online',
    issuer: 'Alura',
    date: 'ago 2026',
    description:
      'Modelagem e consultas em banco relacional: joins, agregações e estruturação de dados para análise.',
    skills: ['SQL', 'SQLite', 'Banco de Dados'],
    credential: 'b807ff0d-1657-4419-833b-edb9d765a5f9',
    url: 'https://cursos.alura.com.br/certificate/b807ff0d-1657-4419-833b-edb9d765a5f9',
  },
  {
    title: 'Excel',
    issuer: 'Alura',
    date: 'ago 2026',
    description:
      'Funções avançadas, organização de bases e construção de planilhas analíticas para apoio à decisão.',
    skills: ['Excel', 'Microsoft 365'],
    credential: '06f5aaaf-c985-4af0-a0fc-fa1cc90ab903',
    url: 'https://cursos.alura.com.br/certificate/06f5aaaf-c985-4af0-a0fc-fa1cc90ab903',
  },
  {
    title: 'Big Data',
    issuer: 'FIAP',
    date: 'mai 2026',
    description:
      'Fundamentos de grandes volumes de dados, arquitetura e aplicação analítica em contexto de negócio.',
    skills: ['Big Data', 'Análise de Dados'],
    credential: 'f9ec6370045cecabdc0b5759ff2150c7',
    url: 'https://on.fiap.com.br/local/nanocourses/gerar_certificado.php?chave=f9ec6370045cecabdc0b5759ff2150c7&action=view',
  },
  {
    title: 'Java: Aplicando a Orientação a Objetos',
    issuer: 'Alura',
    date: 'mai 2026',
    description:
      'Classes, herança, encapsulamento e polimorfismo — base de orientação a objetos aplicada em Java.',
    skills: ['Java', 'POO'],
    credential: 'f75b0369-45a4-434c-aced-19ec77ee213d',
    url: 'https://cursos.alura.com.br/certificate/f75b0369-45a4-434c-aced-19ec77ee213d',
  },
]

// -------------------------- EXPERIÊNCIA --------------------------

export const experience = [
  {
    company: 'Libbs Farmacêutica',
    role: 'Jovem Talento — Inovação e Desenvolvimento do Negócio',
    period: 'Atual',
    area: 'Gerência de Novos Produtos — Varejo',
    description:
      'Atuação na área de novos produtos, apoiando decisões de portfólio com análise de dados de mercado e construindo soluções digitais para os processos do time.',
    bullets: [
      'Desenvolvimento de dashboards em Power BI para acompanhamento de budget e performance de novos produtos.',
      'Automação de processos internos com Power Automate, Forms e SharePoint, reduzindo etapas manuais e retrabalho.',
      'Análises de mercado com bases PMB e IQVIA: market share, CAGR, evolução por canal, lançamentos e NCM.',
      'Construção de ferramentas próprias em Python para coleta e tratamento de dados recorrentes.',
      'Preparação de apresentações executivas e materiais de apoio para liderança.',
      'Participação no programa Jovens Talentos, com apresentação de projetos de inovação.',
    ],
  },
]

export const skillGroups = [
  {
    title: 'Dados & BI',
    items: ['Power BI', 'DAX', 'SQL', 'Excel Avançado', 'PROCX / SOMASES', 'Modelagem de dados'],
  },
  {
    title: 'Desenvolvimento',
    items: ['Python', 'React', 'Vite', 'Streamlit', 'Playwright', 'HTML / CSS'],
  },
  {
    title: 'Automação & Plataformas',
    items: ['Power Automate', 'Microsoft Forms', 'SharePoint', 'SAP', 'Microsoft 365', 'AWS'],
  },
  {
    title: 'Negócio',
    items: [
      'Inteligência de mercado',
      'Análise competitiva',
      'Gestão de processos',
      'Apresentações executivas',
      'Setor farmacêutico',
    ],
  },
]
