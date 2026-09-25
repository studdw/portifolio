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

export const stats = [
  { value: '4', label: 'projetos de dados e automação entregues' },
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
    title: 'Sistema de Pesquisa de Preços',
    year: '2026',
    role: 'Concepção, desenvolvimento e deploy',
    summary:
      'Aplicação que coleta, trata e compara preços de produtos automaticamente, substituindo uma coleta manual recorrente por um painel consultável pelo time.',
    highlights: [
      'Coleta automatizada com Playwright e tratamento em Python',
      'Interface em Streamlit com filtros e exportação',
      'Deploy com variáveis de ambiente e acesso interno',
    ],
    tags: ['Python', 'Playwright', 'Streamlit', 'Automação'],

    problem:
      'O acompanhamento de preços de produtos era feito manualmente: abrir cada fonte, copiar valores, colar em planilha e repetir o processo a cada ciclo de pesquisa. Além de consumir horas, o método gerava inconsistência de formato e dificultava qualquer comparação histórica.',
    solution:
      'Construí uma aplicação que executa a coleta de forma automatizada, normaliza os dados em uma estrutura única e entrega tudo em uma interface web com filtros, comparativos e exportação para Excel. O time deixou de coletar e passou apenas a consultar.',

    process: [
      {
        title: 'Mapeamento das fontes',
        text: 'Levantei quais fontes eram consultadas manualmente, quais campos importavam e qual a frequência real de atualização.',
      },
      {
        title: 'Coleta automatizada',
        text: 'Implementei a navegação e extração com Playwright, lidando com carregamento dinâmico, timeouts e variações de layout entre páginas.',
      },
      {
        title: 'Tratamento e normalização',
        text: 'Padronização de nomes de produto, conversão de preços para formato numérico, deduplicação e marcação de data de coleta.',
      },
      {
        title: 'Interface e entrega',
        text: 'Painel em Streamlit com filtros por produto e período, tabela comparativa e botão de exportação para Excel.',
      },
      {
        title: 'Deploy',
        text: 'Publicação com variáveis de ambiente em .env para credenciais e configuração, disponibilizando o acesso ao time.',
      },
    ],

    results: [
      { value: 'Horas → minutos', label: 'tempo do ciclo de coleta' },
      { value: '1 base única', label: 'substituiu planilhas dispersas' },
      { value: 'Histórico', label: 'comparação entre coletas passou a existir' },
    ],

    gallery: [
      { src: '/assets/precos-01.png', caption: 'Painel principal com filtros e tabela comparativa de preços.' },
      { src: '/assets/precos-02.png', caption: 'Exportação da base tratada para Excel.' },
    ],

    code: [
      {
        label: 'Coleta com Playwright',
        language: 'python',
        description:
          'Função de coleta que abre a página, aguarda o carregamento dinâmico e extrai os campos relevantes.',
        snippet: `from playwright.sync_api import sync_playwright

def coletar_precos(fontes: list[dict]) -> list[dict]:
    """Percorre as fontes configuradas e extrai nome e preco de cada item."""
    registros = []

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()

        for fonte in fontes:
            page.goto(fonte["url"], wait_until="networkidle", timeout=60_000)
            page.wait_for_selector(fonte["seletor_item"])

            for item in page.query_selector_all(fonte["seletor_item"]):
                nome = item.query_selector(fonte["seletor_nome"])
                preco = item.query_selector(fonte["seletor_preco"])
                if not nome or not preco:
                    continue

                registros.append({
                    "fonte": fonte["nome"],
                    "produto": nome.inner_text().strip(),
                    "preco_bruto": preco.inner_text().strip(),
                })

        browser.close()

    return registros`,
      },
      {
        label: 'Tratamento dos dados',
        language: 'python',
        description:
          'Normalização do preço em texto para valor numérico e padronização da base antes de salvar.',
        snippet: `import re
import pandas as pd
from datetime import date

def normalizar_preco(texto: str) -> float | None:
    """'R$ 1.234,56' -> 1234.56"""
    limpo = re.sub(r"[^\\d,.]", "", texto).replace(".", "").replace(",", ".")
    try:
        return round(float(limpo), 2)
    except ValueError:
        return None

def montar_base(registros: list[dict]) -> pd.DataFrame:
    df = pd.DataFrame(registros)
    df["preco"] = df["preco_bruto"].apply(normalizar_preco)
    df["produto"] = df["produto"].str.upper().str.strip()
    df["data_coleta"] = date.today()

    df = (
        df.dropna(subset=["preco"])
          .drop_duplicates(subset=["fonte", "produto", "data_coleta"])
          .sort_values(["produto", "preco"])
          .reset_index(drop=True)
    )
    return df`,
      },
      {
        label: 'Interface Streamlit',
        language: 'python',
        description: 'Painel com filtros, tabela comparativa e exportação para Excel.',
        snippet: `import streamlit as st
import pandas as pd

st.set_page_config(page_title="Pesquisa de Preços", layout="wide")
st.title("Pesquisa de Preços")

df = carregar_base()

col1, col2 = st.columns(2)
produtos = col1.multiselect("Produto", sorted(df["produto"].unique()))
periodo = col2.date_input("Período", [])

filtrado = df.copy()
if produtos:
    filtrado = filtrado[filtrado["produto"].isin(produtos)]
if len(periodo) == 2:
    filtrado = filtrado[filtrado["data_coleta"].between(*periodo)]

a, b, c = st.columns(3)
a.metric("Itens coletados", len(filtrado))
b.metric("Preço médio", f"R$ {filtrado['preco'].mean():,.2f}")
c.metric("Fontes", filtrado["fonte"].nunique())

st.dataframe(filtrado, use_container_width=True)

st.download_button(
    "Exportar para Excel",
    data=exportar_excel(filtrado),
    file_name="pesquisa_precos.xlsx",
)`,
      },
    ],

    stackDetail: [
      { name: 'Python', use: 'Orquestração, tratamento e regras de negócio' },
      { name: 'Playwright', use: 'Navegação e extração em páginas dinâmicas' },
      { name: 'pandas', use: 'Normalização, deduplicação e consolidação' },
      { name: 'Streamlit', use: 'Interface web com filtros e exportação' },
      { name: '.env', use: 'Configuração e credenciais fora do código' },
    ],
  },

  {
    slug: 'dashboard-budget',
    title: 'Dashboard de Budget de Novos Produtos',
    year: '2026',
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
