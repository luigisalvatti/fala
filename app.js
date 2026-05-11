// ===== Conteúdo dos exercícios =====
const CONTENT = {
  fluency: {
    name: "Fluência",
    items: [
      {
        type: "easyOnset",
        title: "Início suave",
        sub: "Comece cada palavra com voz suave — sem 'ataque' na primeira sílaba.",
        body: "Inspire pelo nariz. Solte um pouquinho de ar antes do som — como um suspiro que vira palavra. A primeira vogal deve nascer já vibrando, sem trancar.",
        words: ["Olá", "Eu", "Hoje", "Bom dia", "Obrigado", "Amanhã", "Antes", "Agora", "Espero", "Acredito"],
      },
      {
        type: "prolonged",
        title: "Fala alongada",
        sub: "Estique as vogais — fale 30-50% mais devagar que o normal",
        body: "Booom diiia. Hooje vou faaalar deeevagar, alooongando aaas vogaaais. Isso reeeduz a teeensão, e a gagueeeira diminuuui. É exageeerado de propóoosito — depois você vooolta ao ritmooo natuuural.",
      },
      {
        type: "cancellation",
        title: "Cancelamento (Van Riper)",
        sub: "Se travou — pare, respire, repita devagar.",
        body: "Quando uma palavra travar, NÃO empurre. Termine a palavra travada. Pare. Respire 1 segundo. Repita a mesma palavra com início suave e alongada.",
        steps: [
          "Travou? Termine como conseguir.",
          "Pare por 1-2 segundos.",
          "Respire fundo, ombros baixos.",
          "Repita a palavra suave e alongada.",
          "Continue a frase.",
        ],
      },
      {
        type: "pullout",
        title: "Saída suave",
        sub: "Se sentir que vai travar no meio — alongue e escape.",
        body: "Quando você sentir o bloqueio chegando NO MEIO da palavra, não pare. Em vez disso: alongue a sílaba travada (suaaaaaave), reduza a tensão na boca, e deslize pra próxima sílaba.",
        practice: ["paaaalavra", "telefoooone", "praaaaaazer", "obriiiigado", "aaaaamanhã"],
      },
      {
        type: "shadow",
        title: "Leitura em coro",
        sub: "Leia JUNTO com a voz — efeito coro reduz a gagueira",
        body: "A voz é uma ferramenta. Como qualquer ferramenta, ela precisa de cuidado, de afinação e de prática. Quem fala bem não nasceu falando bem: aprendeu, escutou, errou e tentou de novo.",
        rate: 0.85,
      },
      {
        type: "shadow",
        title: "Coro — apresentação",
        sub: "Acompanhe em voz alta",
        body: "Boa noite a todos. Quero começar agradecendo pela presença de cada um aqui. Sei que o tempo é escasso, e a atenção, ainda mais. Por isso prometo ser breve, claro e direto.",
        rate: 0.9,
      },
      {
        type: "daf",
        title: "Eco controlado (DAF)",
        sub: "Use FONES! Sua voz volta com atraso — o cérebro relaxa e a fluência aparece.",
        body: "Coloque fones de ouvido. Toque em Iniciar. Fale qualquer coisa — leia este texto, conte seu dia. Você vai ouvir sua voz com um pequeno atraso. Esse 'eco' é a base de aparelhos clínicos contra gagueira (SpeechEasy, etc).",
        readText: "A pressa é inimiga da fala. Quando eu falo devagar, eu me ouço. Quando eu me ouço, eu me entendo. Quando eu me entendo, as palavras saem.",
      },
      {
        type: "hierarchy",
        title: "Hierarquia de prática",
        sub: "Suba os degraus aos poucos.",
        body: "A fluência cresce em camadas. Pratique do mais fácil pro mais difícil — cada etapa só depois de dominar a anterior:",
        levels: [
          "Leitura em voz alta sozinho",
          "Leitura em frente ao espelho",
          "Gravar e reouvir",
          "Falar ao telefone com alguém de confiança",
          "Conversa com 1 pessoa familiar",
          "Conversa com desconhecido (loja, padaria)",
          "Falar em grupo pequeno",
          "Apresentação curta para 3+ pessoas",
        ],
      },
      {
        type: "easyOnset",
        title: "Início suave — saudações",
        sub: "Palavras que a gente usa todo dia — ensaie em casa.",
        body: "Um suspiro leve antes de cada palavra. A primeira vogal nasce já vibrando, sem tranco. Repita cada uma 3 vezes.",
        words: ["Oi", "Olá", "Bom dia", "Boa tarde", "Boa noite", "Tudo bem?", "Como vai?", "Prazer", "Obrigado", "Até logo"],
      },
      {
        type: "easyOnset",
        title: "Início suave — sons difíceis",
        sub: "Foco em palavras com R, G, D — letras que costumam travar mais.",
        body: "Sinta o ar antes do som. Não force a língua, não trave a mandíbula. Deslize para dentro da palavra.",
        words: ["Realmente", "Recado", "Difícil", "Domingo", "Grande", "Garoto", "Geração", "Diretor", "Definir", "Dúvida"],
      },
      {
        type: "prolonged",
        title: "Fala alongada — apresentação",
        sub: "Use quando precisar se apresentar e a tensão subir.",
        body: "Booom diiia. Meeu noome é... Eeu trabaalho com... E hooje vou faaalar sooobre... Aalongue. Reespire. Sem preeessa.",
      },
      {
        type: "prolonged",
        title: "Fala alongada — pedido",
        sub: "Pedir café, comida, informação — situações cotidianas.",
        body: "Booom diia. Eeu queriiia uum cafééé pequeeno, por favooor. Sem aaaçúcar. Obriiigado.",
      },
      {
        type: "shadow",
        title: "Coro — texto motivacional",
        sub: "Acompanhe em voz alta",
        body: "Hoje é um dia novo. Eu posso travar, posso errar, posso recomeçar. O que importa não é falar perfeito. O que importa é falar — e seguir falando.",
        rate: 0.85,
      },
      {
        type: "shadow",
        title: "Coro — descrição",
        sub: "Acompanhe em voz alta",
        body: "A janela estava aberta. O vento entrava devagar, trazendo o cheiro de chuva. Era começo de tarde, e a cidade ainda parecia adormecida. Ele olhou pra fora, respirou fundo, e começou a falar.",
        rate: 0.9,
      },
      {
        type: "prompt",
        title: "Pseudogagueira — dessensibilização",
        body: "Leia este parágrafo em voz alta, MAS de propósito, repita a primeira sílaba de algumas palavras 2 ou 3 vezes (\"ho-ho-hoje\", \"qua-qua-quando\"). Pode parecer estranho — é exatamente o objetivo. Pra-pra-praticar a sensação reduz o medo de gaguejar de verdade. Repita 2x.",
      },
    ],
  },

  articulation: {
    name: "Articulação",
    items: [
      {
        type: "numbers",
        title: "Sequência de números",
        body: "Leia em voz alta, articulando cada dígito sem juntar nem comer som. Sem pressa.",
        sequences: ["um, dois, três, quatro, cinco, seis, sete, oito, nove, dez", "23, 47, 81, 15, 92, 60, 38, 74, 56, 19", "1.245", "27.893", "R$ 4.230,75", "(11) 98765-4321", "01/05/2026", "192.168.2.84"],
      },
      {
        type: "numbers",
        title: "Números por extenso",
        body: "Pronuncie cada número POR EXTENSO. Foco em terminações claras (-enta, -entos).",
        sequences: ["75", "138", "1.247", "32.500", "1.500.000", "0,75", "3,14", "trezentos e quarenta e dois", "mil novecentos e oitenta e quatro", "duzentos e cinquenta mil reais"],
      },
      {
        type: "volume",
        title: "Modular volume",
        sub: "Mesma frase, três volumes — sem perder articulação",
        text: "Hoje é um dia novo, e eu vou aproveitá-lo bem.",
        levels: ["sussurro (audível, mas baixo)", "conversa normal", "projetado (como se houvesse 10 pessoas na sala)"],
      },
      {
        type: "volume",
        title: "Crescendo controlado",
        sub: "Comece baixo, vá subindo — sem gritar",
        text: "Um. Dois. Três. Quatro. Cinco. Seis. Sete. Oito. Nove. Dez.",
        levels: ["1-3 sussurro", "4-6 normal", "7-10 projetado"],
      },
      {
        type: "prompt",
        title: "Articular consoantes finais",
        body: "Em português a gente costuma engolir o final das palavras. Leia esta lista articulando MUITO o final: \"andando, falando, cantando, vivendo, sabendo, fazendo, querendo, dizendo\". Sinta a língua bater no \"-ndo\".",
      },
      {
        type: "prompt",
        title: "Vogais abertas e fechadas",
        body: "Repita: \"avô / avó · este / esse · pôde / pode · gosto / gosto\". As mesmas letras, sons diferentes. Sentir essa diferença afina a fala.",
      },
    ],
  },

  expression: {
    name: "Expressão",
    items: [
      {
        type: "emotionRead",
        title: "Mesma frase, emoções diferentes",
        sub: "Toque cada emoção e leia a frase com aquele sentimento.",
        text: "Eu não acredito no que aconteceu hoje.",
        emotions: ["Alegria", "Tristeza", "Raiva", "Surpresa", "Calma", "Medo", "Sarcasmo", "Cansaço"],
      },
      {
        type: "emotionRead",
        title: "Frase curta com camadas",
        sub: "Mude tudo só com a entonação.",
        text: "Você fez isso de novo.",
        emotions: ["Decepção", "Orgulho", "Espanto", "Brincadeira", "Indignação", "Carinho"],
      },
      {
        type: "emotionRead",
        title: "Apresentação com emoção",
        sub: "A mesma fala, três versões.",
        text: "Meu nome é Luigi, e é um prazer estar aqui hoje.",
        emotions: ["Formal", "Casual e leve", "Empolgado", "Tímido", "Confiante"],
      },
      {
        type: "stressShift",
        title: "Mudar a ênfase muda o sentido",
        sub: "Toque em uma palavra — leia a frase enfatizando ELA.",
        text: "Eu não disse isso para você ontem.",
      },
      {
        type: "stressShift",
        title: "Ênfase em frase longa",
        sub: "Qual palavra é a 'estrela' da frase? Teste todas.",
        text: "Ele quer trabalhar com a gente no próximo semestre.",
      },
      {
        type: "stressShift",
        title: "Foco e contraste",
        sub: "Cada ênfase implica um contraste diferente.",
        text: "Hoje a reunião começa às nove da manhã.",
      },
      {
        type: "prompt",
        title: "Curva melódica — pergunta/afirmação",
        body: "Diga a mesma frase \"Você está pronto\" três vezes: como afirmação (descendo no final), como pergunta (subindo no final), e como ironia (acelerando no meio). A entonação CARREGA o sentido.",
      },
    ],
  },

  library: {
    name: "Biblioteca",
    items: [
      // === CURTOS - frases de aquecimento ===
      { type: "library", genre: "Curto", title: "Voz como ferramenta", text: "A voz é um músculo. Trate-a como tal — aquece, alonga, descansa." },
      { type: "library", genre: "Curto", title: "Hoje eu falo", text: "Hoje eu falo. Devagar, mas falo. Travando, mas falo. Eu falo." },
      { type: "library", genre: "Curto", title: "Silêncio antes", text: "O silêncio antes da palavra dá peso à palavra. Não tenha pressa." },
      { type: "library", genre: "Curto", title: "Quem se ouve", text: "Quem se ouve, se ajusta. Quem se ajusta, melhora. O resto vem com o tempo." },
      { type: "library", genre: "Curto", title: "Cada respiração", text: "Cada respiração é uma chance de recomeçar a frase. Não desista no meio." },
      { type: "library", genre: "Curto", title: "Claro, não perfeito", text: "Eu não falo perfeito. Eu falo claro. E claro é o que importa." },

      // === PARÁGRAFOS - texto neutro ===
      { type: "library", genre: "Parágrafo", title: "A voz", text: "A voz é uma ferramenta. Como qualquer ferramenta, ela precisa de cuidado, de afinação e de prática. Quem fala bem não nasceu falando bem: aprendeu, escutou, errou e tentou de novo. O segredo está na constância, não no talento." },
      { type: "library", genre: "Parágrafo", title: "Manhã", text: "A cada manhã, antes de começar o dia, eu paro por um instante. Respiro fundo, sinto o ar entrando devagar, e lembro: o que vier hoje, eu encaro com calma. A pressa raramente ajuda. A pressa atropela a fala, atropela o pensamento, e atropela a gente." },
      { type: "library", genre: "Parágrafo", title: "Comunicação", text: "Comunicar não é falar. Comunicar é ser entendido. E a diferença entre uma coisa e outra está no espaço que você dá para o outro escutar. Quem fala muito rápido fala só pra si mesmo. Quem fala no ritmo do outro, abre passagem." },
      { type: "library", genre: "Parágrafo", title: "Silêncio", text: "Tem gente que tem medo do silêncio. Acha que se parar de falar, perde a vez. Mas a verdade é o contrário: o silêncio é onde a sua palavra ganha eco. É o intervalo que faz a música existir." },
      { type: "library", genre: "Parágrafo", title: "Confiança", text: "Confiança não nasce de palavras bonitas. Nasce do jeito que você fala. Calmo. Claro. Sem pressa. Quando você dá tempo para a sua própria voz, o outro também dá tempo para te ouvir." },
      { type: "library", genre: "Parágrafo", title: "Repetição", text: "Existe um segredo que ninguém vende: melhorar é repetir. Não é descobrir um método mágico, não é nascer com dom. É voltar amanhã ao mesmo lugar onde você travou hoje. Voltar, e tentar de novo, e tentar mais uma vez." },

      // === DISCURSOS curtos ===
      { type: "library", genre: "Discurso", title: "Abertura de reunião", text: "Boa tarde a todos. Quero começar agradecendo a presença de cada um. Sei que o tempo é curto, e o assunto que vamos tratar pede atenção. Por isso prometo ser direto: o que está na mesa hoje muda o rumo da próxima etapa. Vamos com calma." },
      { type: "library", genre: "Discurso", title: "Agradecimento", text: "Eu não esperava estar aqui hoje. Quando comecei, faz um tempo, ninguém apostou. Inclusive eu mesmo, em alguns dias. Mas as pessoas certas apareceram, no momento certo, dizendo as coisas certas. E é a essas pessoas que eu agradeço. Sem elas, eu não falaria com vocês agora." },
      { type: "library", genre: "Discurso", title: "Motivacional curto", text: "Você não precisa ser o melhor. Você precisa ser consistente. O melhor cansa, perde, recua. O consistente continua. Todo dia. Pouquinho por pouquinho. E é essa repetição — chata, lenta, invisível — que muda tudo." },
      { type: "library", genre: "Discurso", title: "Apresentação pessoal", text: "Meu nome é... Eu trabalho com... E o que me trouxe aqui hoje é uma pergunta simples: por que tanta gente fala, mas tão pouca gente é ouvida? Vou tentar responder isso nos próximos minutos — não com teoria, mas com o que aprendi na prática." },
      { type: "library", genre: "Discurso", title: "Encerramento", text: "Antes de encerrar, queria deixar uma única ideia com vocês. Não é nova, não é minha, mas vale repetir: a maior diferença entre quem fala bem e quem fala mal não está no vocabulário. Está na coragem de pausar. Obrigado." },

      // === POESIA - domínio público ===
      { type: "library", genre: "Poesia", title: "Via Láctea (Olavo Bilac)", author: "Olavo Bilac (1865–1918)", text: "Ora (direis) ouvir estrelas! Certo / perdeste o senso! E eu vos direi, no entanto, / que, para ouvi-las, muita vez desperto / e abro as janelas, pálido de espanto..." },
      { type: "library", genre: "Poesia", title: "Meus Oito Anos (fragmento)", author: "Casimiro de Abreu (1839–1860)", text: "Oh! que saudades que eu tenho / Da aurora da minha vida, / Da minha infância querida / Que os anos não trazem mais! / Que amor, que sonhos, que flores, / Naquelas tardes fagueiras / À sombra das bananeiras, / Debaixo dos laranjais!" },
      { type: "library", genre: "Poesia", title: "Círculo Vicioso (Machado de Assis)", author: "Machado de Assis (1839–1908)", text: "Bailando no ar, gemia inquieto vaga-lume: / — Quem me dera que eu fosse aquela loura estrela, / Que arde no eterno azul, como uma eterna vela! / Mas a estrela, fitando a lua, com ciúme:" },
      { type: "library", genre: "Poesia", title: "Navio Negreiro (abertura)", author: "Castro Alves (1847–1871)", text: "'Stamos em pleno mar... Doudo no espaço / Brinca o luar — dourada borboleta; / E as vagas após ele correm... cansam / Como turba de infantes inquieta." },

      // === NOTÍCIAS ===
      { type: "library", genre: "Notícia", title: "Tecnologia", text: "Um grupo de pesquisadores de São Paulo apresentou nesta semana um novo método baseado em inteligência artificial para auxiliar no diagnóstico precoce de distúrbios da fala. Segundo os autores, a técnica analisa padrões acústicos que escapam ao ouvido humano, e pode reduzir em até quarenta por cento o tempo entre o primeiro sintoma e o início do tratamento." },
      { type: "library", genre: "Notícia", title: "Economia", text: "O Banco Central anunciou hoje a manutenção da taxa básica de juros. A decisão era amplamente esperada pelo mercado, e veio acompanhada de um comunicado que destacou a queda gradual da inflação nos últimos meses. Analistas projetam novas reduções para o segundo semestre, desde que o cenário externo permaneça estável." },
      { type: "library", genre: "Notícia", title: "Cultura", text: "Foi aberta nesta sexta-feira, no centro de Curitiba, a exposição que reúne mais de duzentas fotografias inéditas do interior do Paraná. As imagens, captadas ao longo de três décadas, mostram o cotidiano de pequenas cidades, festas tradicionais e paisagens que vêm desaparecendo. A entrada é gratuita até o fim do mês." },

      // === CRÔNICAS ===
      { type: "library", genre: "Crônica", title: "O cara do café", text: "Tem um cara no café da esquina que sabe o nome de todo mundo. Sério, todo mundo. Você entra uma vez, distraído, paga o café, vai embora. Volta uma semana depois e ele te chama pelo nome. Eu já parei pra pensar como é que ele faz isso. Acho que é simples: ele presta atenção. E nessa cidade onde quase ninguém presta atenção em ninguém, prestar atenção virou superpoder." },
      { type: "library", genre: "Crônica", title: "Trânsito", text: "O trânsito da segunda de manhã não tem perdão. Buzina, freada, palavrão, retrovisor torto. Mas hoje aconteceu uma coisa engraçada: um cara parou no meio do cruzamento, abriu a janela e deixou um cachorro atravessar. Atrás dele, quinze carros buzinando. À frente dele, um cachorro andando devagar, como se o mundo todo dependesse daquele atravessamento. E dependia." },
      { type: "library", genre: "Crônica", title: "A primeira vez", text: "Toda primeira vez é estranha. A primeira vez que você fala em público, a primeira vez que você dirige na chuva, a primeira vez que você diz que ama. Tem sempre um momento, no meio, em que você acha que vai dar errado. E às vezes dá. Mas o engraçado é que depois, quando você lembra, você só lembra do começo e do fim. O meio, aquele meio que ardia, some." },

      // === DIÁLOGOS - 2 vozes ===
      { type: "library", genre: "Diálogo", title: "Reunião", text: "— Bom dia. Vocês já tiveram tempo de olhar os números do trimestre?\n— Olhamos. E temos algumas perguntas.\n— Ótimo. É exatamente pra isso que estamos aqui. Manda.\n— A receita caiu 8%, mas a margem subiu. Isso é sustentável?\n— Boa pergunta. Vou ser honesto: a margem subiu porque cortamos custos, não porque crescemos. Então não, não é sustentável a longo prazo." },
      { type: "library", genre: "Diálogo", title: "Atendimento", text: "— Boa tarde. Em que posso ajudar?\n— Oi, comprei um produto aqui semana passada e veio com defeito.\n— Sinto muito por isso. Você tem o número do pedido?\n— Tenho aqui. É o 47892.\n— Achei. Já vou abrir a troca. Você prefere reembolso ou um produto novo?\n— Novo, se possível.\n— Combinado. Mando hoje ainda." },
      { type: "library", genre: "Diálogo", title: "Conversa casual", text: "— E aí, como tá?\n— Tô bem, e você?\n— Cansado. Mas é aquela coisa boa, sabe?\n— Sei sim. Cansaço de coisa que tá dando certo é diferente.\n— Exato. Você que sabe.\n— Mas relaxa. Final de semana descansa.\n— Vou tentar. Hoje à noite já é começo." },
    ],
  },

  warmup: {
    name: "Aquecimento",
    items: [
      {
        type: "breath",
        title: "Respiração 4-4-6",
        sub: "Inspire 4s · segure 4s · solte 6s",
        cycles: 5,
        phases: [
          { name: "inspire", dur: 4 },
          { name: "segura", dur: 4 },
          { name: "expira", dur: 6 },
        ],
      },
      {
        type: "breath",
        title: "Respiração diafragmática",
        sub: "Mão na barriga · 4s inspirando, 8s soltando",
        cycles: 6,
        phases: [
          { name: "inspire", dur: 4 },
          { name: "expira", dur: 8 },
        ],
      },
      {
        type: "prompt",
        title: "Aquecimento vocal — Sirene",
        body: "Faça o som de uma sirene (\"uuuuuuuu\") subindo e descendo a entonação. 3 vezes, sem forçar.",
      },
      {
        type: "prompt",
        title: "Mastigação vocal",
        body: "Diga \"mamamamã\" \"nenenenê\" \"lalalalá\" \"rerererê\" — 4 vezes cada, articulando bem.",
      },
      {
        type: "prompt",
        title: "Bocejo controlado",
        body: "Boceje devagar 3 vezes, alongando a mandíbula. Sinta a garganta abrir — isso relaxa a voz.",
      },
    ],
  },

  diction: {
    name: "Dicção",
    items: [
      { type: "tongueTwister", text: "O peito do pé de Pedro é preto." },
      { type: "tongueTwister", text: "Três pratos de trigo para três tigres tristes." },
      { type: "tongueTwister", text: "O rato roeu a roupa do rei de Roma." },
      { type: "tongueTwister", text: "A aranha arranha a rã. A rã arranha a aranha. Nem a aranha arranha a rã, nem a rã arranha a aranha." },
      { type: "tongueTwister", text: "Olha o sapo dentro do saco. O saco com o sapo dentro. O sapo batendo papo, e o papo soltando vento." },
      { type: "tongueTwister", text: "Um tigre, dois tigres, três tigres trotavam tranquilamente." },
      { type: "tongueTwister", text: "Bagre branco, branco bagre. Branco bagre, bagre branco." },
      { type: "tongueTwister", text: "A casa do padre Pedro Paulo Pereira Pinto é pintada de pinta preta, pinta branca e pinta parda." },
      { type: "tongueTwister", text: "Sabia que o sabiá sabia assobiar?" },
      { type: "tongueTwister", text: "Disse o tatu para o tatuí: \"se eu tatuasse você, você se tatuaria?\"" },
      { type: "tongueTwister", text: "Em três quintas-feiras tristes, três tigres tigrados trituravam trigo num triturador." },
      { type: "tongueTwister", text: "O caju do Cacuru é do Juca, o caju do Juca é do Cacuru." },
      { type: "tongueTwister", text: "Trinta e três tristes tatus tropeçaram em três torres tortas." },
      { type: "tongueTwister", text: "O peito do pé do Pedro é preto. Quem disser que o peito do pé do Pedro é preto, tem o peito do pé mais preto que o peito do pé do Pedro." },
      { type: "tongueTwister", text: "Atrás da pia tem um prato. Dentro do prato tem uma faca. E dentro da faca, um bichinho me espia." },
      { type: "tongueTwister", text: "O doce perguntou pro doce qual é o doce mais doce. O doce respondeu pro doce que o doce mais doce é o doce de batata-doce." },
      { type: "tongueTwister", text: "A babá boba bebeu o leite do bebê e babou no babador." },
      { type: "tongueTwister", text: "Larga a porca, larga a vaca, larga a galinha — eu cuido do galo." },
      { type: "tongueTwister", text: "Quem com ferro fere, com ferro será ferido." },
      { type: "tongueTwister", text: "Pinga pinga pinga uma pinga na panela do Pedro." },
      { type: "tongueTwister", text: "Maria mandava maçãs. Mariana mandava macacos. Os macacos roeram as maçãs da Maria." },
      { type: "tongueTwister", text: "Bota a bota e tira a bota; tira a bota e bota a bota." },
      { type: "tongueTwister", text: "Vinte e três viajantes velozes velejaram veleiros verdes." },
      { type: "tongueTwister", text: "Faca não corta faca. Faca corta carne." },
      { type: "tongueTwister", text: "O xerife xingou o xeque xato no xadrez." },
      { type: "tongueTwister", text: "Pedrinha pintada de pinta preta, pinta preta de pedrinha pintada." },
      { type: "tongueTwister", text: "Sou um mero mineiro. Meu mero martelo é meu." },
      { type: "tongueTwister", text: "Pinguim pinta poleiros, peru passeia por pinheirais." },
      { type: "tongueTwister", text: "O cachorro do conde dorme. O conde, do cachorro, sonha." },
      { type: "tongueTwister", text: "Caixa de feixos secos. Seis caixas de feixos secos. Seiscentos feixos secos em seis caixas secas." },
    ],
  },

  pace: {
    name: "Ritmo",
    items: [
      {
        type: "pacedRead",
        title: "Leitura no ritmo",
        body: "A voz é uma ferramenta. Como qualquer ferramenta, ela precisa de cuidado, de afinação e de prática. Quem fala bem não nasceu falando bem: aprendeu, escutou, errou e tentou de novo. O segredo está na constância.",
        wpm: 130,
      },
      {
        type: "pacedRead",
        title: "Texto neutro",
        body: "A cada manhã, antes de começar o dia, eu paro por um instante. Respiro fundo, sinto o ar entrando devagar, e lembro: o que vier hoje, eu encaro com calma. A pressa raramente ajuda.",
        wpm: 130,
      },
      {
        type: "pacedRead",
        title: "Discurso curto",
        body: "Boa noite a todos. Quero começar agradecendo pela presença de cada um aqui. Sei que o tempo é escasso, e a atenção, ainda mais. Por isso prometo ser breve, claro e direto.",
        wpm: 120,
      },
      {
        type: "pacedRead",
        title: "Texto descritivo",
        body: "Existem dias em que tudo flui. As palavras vêm fáceis, o ritmo se ajusta sozinho, e a voz parece pertencer à pessoa que fala. Outros dias, tudo trava. Mas o que separa um do outro raramente é talento — é repetição.",
        wpm: 130,
      },
      {
        type: "pacedRead",
        title: "Notícia",
        body: "Pesquisadores brasileiros publicaram um estudo sobre técnicas de fluência da fala. Segundo o trabalho, a combinação de respiração diafragmática, leitura cronometrada e pausas estratégicas tem efeito direto sobre a clareza da comunicação oral.",
        wpm: 140,
      },
      {
        type: "pacedRead",
        title: "Crônica curta",
        body: "Era cedo quando ele saiu. O sol mal aparecia, e a rua ainda dormia. Caminhou devagar, respirou fundo, e disse pra si mesmo: hoje eu falo. Não importa como soe. Não importa se travar. Hoje, eu falo.",
        wpm: 120,
      },
      {
        type: "pacedRead",
        title: "Persuasivo",
        body: "Pense numa coisa simples: as pessoas não compram o que você vende. Elas compram a confiança que sentem em você. E confiança não nasce de palavras bonitas — nasce do jeito que você fala. Calmo. Claro. Sem pressa.",
        wpm: 125,
      },
      {
        type: "metronome",
        title: "Metrônomo de fala",
        body: "Diga uma palavra por batida. Comece a 80 bpm, suba até 120. O objetivo é falar no compasso sem engolir sílabas.",
      },
    ],
  },

  pauses: {
    name: "Pausas e espaçamento",
    items: [
      {
        type: "pausedRead",
        title: "Treino de respiração na frase",
        body: "Bom dia a todos. | Hoje vou falar sobre algo simples, || mas essencial: | a pausa. | Quando falamos, | a pausa não é o silêncio antes da palavra. || A pausa é parte da palavra.",
      },
      {
        type: "pausedRead",
        title: "Pausa para ênfase",
        body: "Existem três coisas | que mudam tudo na fala: || respiração, || ritmo || e pausa. | Sem elas, | a melhor ideia do mundo soa apressada.",
      },
      {
        type: "pausedRead",
        title: "Apresentando-se",
        body: "Meu nome é... | trabalho com... || E o que me trouxe aqui hoje | foi uma pergunta simples: || por que tanta gente fala, | mas tão pouca gente é ouvida?",
      },
      {
        type: "pausedRead",
        title: "Falar bem",
        body: "Falar bem | não é falar rápido. || É falar de um jeito | que dá tempo | de ser compreendido. | Quem tem pressa | empurra as palavras. | Quem tem clareza | deixa elas pousarem.",
      },
      {
        type: "pausedRead",
        title: "Três segundos de atenção",
        body: "Você | tem três segundos | de atenção. || Se nesses três segundos | você não disser algo que importe, || perdeu. | Então respire, | escolha a palavra, | e diga ela | como se fosse a única.",
      },
      {
        type: "pausedRead",
        title: "Onde mora a ênfase",
        body: "A pausa | é onde mora a ênfase. || Sem ela, | tudo é apenas | barulho. || Com ela, | até a frase mais simples | ganha peso.",
      },
      {
        type: "pausedRead",
        title: "Reunião",
        body: "Boa tarde, pessoal. | Antes de começar, || quero alinhar uma coisa: | o que vamos discutir aqui hoje | não é uma decisão fechada. || É um debate. | E o melhor debate | acontece | quando todo mundo se ouve.",
      },
      {
        type: "prompt",
        title: "Regra dos 3 segundos",
        body: "Leia qualquer frase em voz alta. Ao chegar num ponto final, conte mentalmente \"1... 2... 3\" antes de continuar. Repita 5 vezes — você vai sentir o peso de cada frase aumentar.",
      },
    ],
  },

  improv: {
    name: "Improviso",
    items: [
      { type: "improv", topic: "Por que vale a pena acordar cedo?", seconds: 60 },
      { type: "improv", topic: "Convença alguém a aprender um idioma novo.", seconds: 60 },
      { type: "improv", topic: "Defenda a ideia: 'errar é o melhor professor'.", seconds: 90 },
      { type: "improv", topic: "Explique como funciona o seu trabalho para uma criança de 8 anos.", seconds: 60 },
      { type: "improv", topic: "Você tem 60 segundos para vender uma caneta. Vai.", seconds: 60 },
      { type: "improv", topic: "Conte sobre a melhor decisão que você tomou nos últimos 12 meses.", seconds: 90 },
      { type: "improv", topic: "O que é coragem, na prática?", seconds: 60 },
      { type: "improv", topic: "Convença alguém de que ler é melhor que assistir a um filme.", seconds: 60 },
      { type: "improv", topic: "Descreva sua manhã ideal — em detalhes.", seconds: 90 },
      { type: "improv", topic: "Argumente a favor de errar em público.", seconds: 60 },
      { type: "improv", topic: "Apresente-se como se fosse uma entrevista de emprego.", seconds: 60 },
      { type: "improv", topic: "Fale sobre um livro ou filme que mudou alguma coisa em você.", seconds: 90 },
      { type: "improv", topic: "O que você diria pro seu eu de 15 anos atrás?", seconds: 90 },
      { type: "improv", topic: "Por que ler livros físicos ainda faz sentido em 2026?", seconds: 60 },
      { type: "improv", topic: "Convença alguém a sair da zona de conforto.", seconds: 60 },
      { type: "improv", topic: "Conte sobre o pior conselho que você já recebeu.", seconds: 60 },
      { type: "improv", topic: "Como você explicaria a internet para alguém que viveu nos anos 50?", seconds: 90 },
      { type: "improv", topic: "O que você faria se ganhasse 1 milhão amanhã?", seconds: 90 },
      { type: "improv", topic: "Defenda o ócio.", seconds: 60 },
      { type: "improv", topic: "Qual é a pergunta que ninguém te faz, mas você queria responder?", seconds: 90 },
      { type: "improv", topic: "Por que pedir desculpa é tão difícil?", seconds: 60 },
      { type: "improv", topic: "Apresente sua cidade pra um turista em 60 segundos.", seconds: 60 },
      { type: "improv", topic: "O que te dá energia? E o que te tira?", seconds: 90 },
      { type: "improv", topic: "Você é apresentador de TV. Apresente o telejornal.", seconds: 60 },
      { type: "improv", topic: "Conte uma vez em que você mudou de ideia sobre algo importante.", seconds: 90 },
      { type: "improv", topic: "Convença alguém a parar de procrastinar — começando agora.", seconds: 60 },
      { type: "improv", topic: "Por que o silêncio incomoda tanto?", seconds: 60 },
      { type: "improv", topic: "Tema: medo. 60 segundos. Vai.", seconds: 60 },
      { type: "improv", topic: "Conte como foi seu primeiro dia em algo (trabalho, escola, esporte).", seconds: 90 },
      { type: "improv", topic: "Qual conselho você daria pra você mesmo daqui a 10 anos?", seconds: 90 },
      { type: "improv", topic: "Defenda a ideia: 'tudo é negociável'.", seconds: 60 },
      { type: "improv", topic: "Descreva sua tarde perfeita, sem celular.", seconds: 90 },
      { type: "improv", topic: "Qual a maior mentira que a sua geração conta pra si mesma?", seconds: 90 },
      { type: "improv", topic: "Conte sobre um lugar que mudou você.", seconds: 90 },
      { type: "improv", topic: "Como você se prepara mentalmente pra um dia difícil?", seconds: 60 },
    ],
  },

  record: {
    name: "Gravar",
    items: [
      {
        type: "record",
        title: "Leia em voz alta",
        body: "A voz é uma ferramenta. Como qualquer ferramenta, ela precisa de cuidado, de afinação e de prática.",
        sub: "Grave, escute e perceba: ritmo, pausas, articulação.",
      },
      {
        type: "record",
        title: "Apresente-se em 30 segundos",
        body: "Quem é você? O que faz? O que te traz aqui? Tente em 30 segundos, sem corrida, sem \"é\" e \"tipo\".",
        sub: "Repita 3 vezes. Compare.",
      },
      {
        type: "record",
        title: "Conte um caso curto",
        body: "Conte uma história de 60 segundos sobre algo que te aconteceu hoje ou ontem. Foco em começo, meio e fim.",
        sub: "Reouça e marque: onde apressei?",
      },
    ],
  },
};

const TIPS = [
  { e: "💬", t: "Gaguejar não é o problema — fugir das palavras é.", b: "Trocar a palavra que você quer dizer por uma 'segura' alimenta o medo. Diga a palavra. Travou? Pause, respire, continue." },
  { e: "🌬️", t: "Antes de falar, respire fundo.", b: "Uma respiração diafragmática lenta antes de começar reduz a tensão na laringe — base de toda terapia de fluência." },
  { e: "⏸️", t: "Pausa não é silêncio — é peso.", b: "Quem domina a pausa domina a sala. Conte mentalmente até 2 entre ideias." },
  { e: "🐢", t: "Reduza o ritmo do TEXTO inteiro, não só das palavras difíceis.", b: "Acelerar entre travamentos é o que faz o próximo travamento chegar mais forte. Fale tudo um pouco mais devagar." },
  { e: "👅", t: "Toques articulatórios leves.", b: "Quanto mais força nos lábios e língua, mais bloqueio. Fale como se a boca estivesse 'relaxada' — sons saem mais fluidos." },
  { e: "🎚️", t: "Variação > volume.", b: "Subir o volume cansa. Variar o tom prende a atenção sem esforço." },
  { e: "🪞", t: "Grave-se sempre.", b: "A diferença entre como você acha que soa e como soa é onde mora o crescimento." },
  { e: "📏", t: "120–150 palavras por minuto.", b: "Esse é o ritmo confortável para quem ouve. Mais rápido cansa, mais devagar perde." },
  { e: "🧘", t: "Ombros baixos, mandíbula solta.", b: "Voz tensa é voz presa. Solte a face antes de qualquer fala importante." },
  { e: "🎧", t: "Use o DAF nos dias travados.", b: "O eco controlado simula falar 'em coro' com você mesmo — o cérebro relaxa, e a fluência aparece naturalmente." },
];

// ===== Estado / Storage =====
const KEY = "fala-app/v1";
const todayKey = () => {
  const d = new Date(); d.setHours(0,0,0,0);
  return d.toISOString().slice(0,10);
};
function loadState() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaultState();
    return { ...defaultState(), ...JSON.parse(raw) };
  } catch { return defaultState(); }
}
function defaultState() {
  return { streak: 0, lastDay: null, done: {}, name: "você", dailyDone: 0, dailyDate: todayKey() };
}
function save() { localStorage.setItem(KEY, JSON.stringify(state)); }
let state = loadState();

// Rolagem de dia: se mudou o dia, reset do diário (mas mantém streak se foi ontem)
function rolloverDay() {
  const t = todayKey();
  if (state.dailyDate !== t) {
    state.dailyDate = t;
    state.dailyDone = 0;
    save();
  }
}
rolloverDay();

// ===== Util =====
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
function toast(msg) {
  const el = $("#toast");
  el.textContent = msg;
  el.classList.remove("hidden");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => el.classList.add("hidden"), 1800);
}
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function fmtTime(s) {
  const m = Math.floor(s/60), r = Math.floor(s%60);
  return `${String(m).padStart(2,"0")}:${String(r).padStart(2,"0")}`;
}

// ===== Render Home =====
function renderHome() {
  const days = ["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"];
  const now = new Date();
  $("#todayLabel").textContent = now.toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" });
  $("#streakCount").textContent = state.streak;

  // Daily progress (5 itens diários)
  const target = 5;
  $("#dailyTotal").textContent = target;
  $("#dailyDone").textContent = Math.min(state.dailyDone, target);
  $("#dailyBar").style.width = `${Math.min(100, (state.dailyDone / target) * 100)}%`;

  // Semana
  const grid = $("#weekGrid");
  grid.innerHTML = "";
  const todayDow = now.getDay();
  for (let i = 0; i < 7; i++) {
    const diff = i - todayDow;
    const d = new Date(now); d.setDate(now.getDate() + diff); d.setHours(0,0,0,0);
    const key = d.toISOString().slice(0,10);
    const done = state.done[key];
    const div = document.createElement("div");
    div.className = "day" + (key === todayKey() ? " today" : "") + (done ? " done" : "");
    div.innerHTML = `<span class="d-name">${days[d.getDay()]}</span><span class="d-num">${d.getDate()}</span>`;
    grid.appendChild(div);
  }

  // Dica
  const tipIdx = (new Date().getDate() + new Date().getMonth()) % TIPS.length;
  const tip = TIPS[tipIdx];
  $("#tipCard").innerHTML = `
    <p class="tip-emoji">${tip.e}</p>
    <h3>${tip.t}</h3>
    <p class="muted">${tip.b}</p>
  `;
}

// ===== Navigation =====
function showScreen(name) {
  $$(".screen").forEach(s => s.classList.toggle("hidden", s.dataset.screen !== name));
  window.scrollTo({ top: 0, behavior: "instant" });
}

// ===== Daily training builder =====
function buildDaily() {
  // foco em fluência: 1 warmup, 2 fluência, 1 dicção, 1 pausas (5 total)
  const pickN = (arr, n) => {
    const c = [...arr]; const out = [];
    for (let i = 0; i < n && c.length; i++) {
      out.push(c.splice(Math.floor(Math.random() * c.length), 1)[0]);
    }
    return out;
  };
  return [
    ...pickN(CONTENT.warmup.items, 1).map(x => ({ ...x, cat: "warmup" })),
    ...pickN(CONTENT.fluency.items, 2).map(x => ({ ...x, cat: "fluency" })),
    ...pickN(CONTENT.diction.items, 1).map(x => ({ ...x, cat: "diction" })),
    ...pickN(CONTENT.pauses.items, 1).map(x => ({ ...x, cat: "pauses" })),
  ];
}

// ===== Exercise runner =====
let session = null; // { items, index, source }

function startSession(items, source) {
  session = { items, index: 0, source };
  showScreen("exercise");
  renderExercise();
}

function renderExercise() {
  cleanupExercise();
  const it = session.items[session.index];
  if (!it) return endSession();
  const cat = CONTENT[it.cat]?.name || CONTENT[session.source]?.name || "Treino";
  $("#exKind").textContent = `${cat} · ${session.index + 1}/${session.items.length}`;
  $("#exName").textContent = it.title || it.name || titleFromType(it);
  const body = $("#exBody");
  body.innerHTML = "";
  switch (it.type) {
    case "prompt": renderPrompt(body, it); break;
    case "breath": renderBreath(body, it); break;
    case "tongueTwister": renderTwister(body, it); break;
    case "pacedRead": renderPaced(body, it); break;
    case "pausedRead": renderPaused(body, it); break;
    case "metronome": renderMetronome(body, it); break;
    case "improv": renderImprov(body, it); break;
    case "record": renderRecord(body, it); break;
    case "easyOnset": renderEasyOnset(body, it); break;
    case "prolonged": renderProlonged(body, it); break;
    case "cancellation": renderSteps(body, it); break;
    case "pullout": renderPullout(body, it); break;
    case "shadow": renderShadow(body, it); break;
    case "daf": renderDAF(body, it); break;
    case "hierarchy": renderHierarchy(body, it); break;
    case "emotionRead": renderEmotionRead(body, it); break;
    case "stressShift": renderStressShift(body, it); break;
    case "numbers": renderNumbers(body, it); break;
    case "volume": renderVolume(body, it); break;
    case "library": renderLibrary(body, it); break;
    default: renderPrompt(body, { body: "Exercício não encontrado." });
  }
}

function titleFromType(it) {
  return { tongueTwister: "Trava-língua", improv: "Improviso", record: "Gravação" }[it.type] || "Exercício";
}

function endSession() {
  // Marca como concluído o dia
  const t = todayKey();
  if (!state.done[t]) {
    state.done[t] = true;
    // streak
    const yest = new Date(); yest.setDate(yest.getDate() - 1); yest.setHours(0,0,0,0);
    const yKey = yest.toISOString().slice(0,10);
    state.streak = state.done[yKey] || state.streak === 0 ? (state.streak + 1) : 1;
    save();
  }
  state.dailyDone = Math.min(5, state.dailyDone + session.items.length);
  if (state.dailyDone >= 5 && !state.done[t]) {
    state.done[t] = true; save();
  }
  save();
  cleanupExercise();
  const back = session.source && session.source.startsWith("list:") ? session.source.slice(5) : null;
  if (back) {
    showList(back);
  } else {
    showScreen("home");
    renderHome();
  }
  toast("Treino registrado ✓");
}

function nextExercise() {
  session.index++;
  if (session.index >= session.items.length) endSession();
  else renderExercise();
}

// ====== Exercise types ======
let activeIntervals = [];
let activeRecorder = null;
let activeAudioCtx = null;
let activeAnalyser = null;
let activeRAF = null;
let activeStream = null;
let activeMetronome = null;
function cleanupExercise() {
  activeIntervals.forEach(id => clearInterval(id));
  activeIntervals = [];
  if (activeRAF) { cancelAnimationFrame(activeRAF); activeRAF = null; }
  if (activeRecorder && activeRecorder.state !== "inactive") { try { activeRecorder.stop(); } catch {} }
  activeRecorder = null;
  if (activeStream) { activeStream.getTracks().forEach(t => t.stop()); activeStream = null; }
  if (activeAudioCtx) { try { activeAudioCtx.close(); } catch {} activeAudioCtx = null; }
  if (activeMetronome) { activeMetronome.stop(); activeMetronome = null; }
}

function renderPrompt(root, it) {
  root.innerHTML = `
    <div class="ex-card">
      <p class="ex-prompt big">${it.body}</p>
    </div>
    <p class="muted small" style="text-align:center;margin-top:14px">Faça com calma. Quando terminar, toque em Concluir.</p>
  `;
}

function renderTwister(root, it) {
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center;margin-bottom:8px">Repita 3 vezes — devagar, depois mais rápido</p>
      <p class="ex-prompt big">${it.text}</p>
    </div>
    <div class="ex-controls">
      <button class="chip" data-rep="1">1ª devagar</button>
      <button class="chip" data-rep="2">2ª no ritmo</button>
      <button class="chip" data-rep="3">3ª rápido</button>
    </div>
  `;
  root.querySelectorAll(".chip").forEach(c => c.addEventListener("click", () => c.classList.toggle("active")));
}

function renderBreath(root, it) {
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center">${it.sub}</p>
      <div class="breath-wrap">
        <div class="breath-orb" id="orb"></div>
      </div>
      <p class="breath-phase" id="phase" style="text-align:center">Pronto?</p>
      <p class="breath-sub" id="cyc" style="text-align:center">Ciclo 0/${it.cycles}</p>
      <div class="ex-controls">
        <button class="chip active" id="breathStart">Começar</button>
      </div>
    </div>
  `;
  const orb = $("#orb"), phase = $("#phase"), cyc = $("#cyc");
  let cycle = 0, phaseIdx = 0, running = false;
  function step() {
    if (!running) return;
    const p = it.phases[phaseIdx];
    phase.textContent = p.name.charAt(0).toUpperCase() + p.name.slice(1);
    orb.style.setProperty("--phase", `${p.dur}s`);
    orb.classList.remove("in","out","hold");
    if (p.name === "inspire") orb.classList.add("in");
    else if (p.name === "expira") orb.classList.add("out");
    else orb.classList.add("hold");
    cyc.textContent = `Ciclo ${cycle + 1}/${it.cycles}`;
    const t = setTimeout(() => {
      phaseIdx++;
      if (phaseIdx >= it.phases.length) {
        phaseIdx = 0; cycle++;
        if (cycle >= it.cycles) {
          running = false;
          phase.textContent = "Pronto ✓";
          cyc.textContent = "Respiração completa";
          toast("Respiração concluída");
          return;
        }
      }
      step();
    }, p.dur * 1000);
    activeIntervals.push(t);
  }
  $("#breathStart").addEventListener("click", () => {
    if (running) return;
    running = true; cycle = 0; phaseIdx = 0; step();
    $("#breathStart").textContent = "Em andamento…";
  });
}

function renderPaced(root, it) {
  const words = it.body.split(/\s+/);
  const speeds = [110, 130, 150];
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center;margin-bottom:8px">Acompanhe o destaque — fale junto, sem correr</p>
      <p class="ex-text-marked" id="paced">${words.map((w,i)=>`<span class="word" data-i="${i}">${w}</span>`).join(" ")}</p>
    </div>
    <div class="ex-controls">
      ${speeds.map(s => `<button class="chip ${s===it.wpm?'active':''}" data-wpm="${s}">${s} ppm</button>`).join("")}
      <button class="chip" id="pacedStart">▶︎ Iniciar</button>
    </div>
  `;
  let wpm = it.wpm; let timer = null; let i = 0;
  root.querySelectorAll("[data-wpm]").forEach(b => b.addEventListener("click", () => {
    wpm = +b.dataset.wpm;
    root.querySelectorAll("[data-wpm]").forEach(x => x.classList.toggle("active", x === b));
  }));
  $("#pacedStart").addEventListener("click", () => {
    if (timer) { clearInterval(timer); timer = null; $("#pacedStart").textContent = "▶︎ Iniciar"; return; }
    i = 0;
    root.querySelectorAll(".word").forEach(w => w.classList.remove("read"));
    const ms = 60000 / wpm;
    timer = setInterval(() => {
      const w = root.querySelector(`.word[data-i="${i}"]`);
      if (!w) { clearInterval(timer); timer = null; $("#pacedStart").textContent = "▶︎ Iniciar"; toast("Leitura concluída"); return; }
      w.classList.add("read");
      w.scrollIntoView({ block: "center", behavior: "smooth" });
      i++;
    }, ms);
    activeIntervals.push(timer);
    $("#pacedStart").textContent = "❚❚ Pausar";
  });
}

function renderPaused(root, it) {
  // | = pausa curta · || = pausa longa
  const html = it.body
    .replace(/\|\|/g, '<span class="pause">‖</span>')
    .replace(/\|/g, '<span class="pause">|</span>');
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center;margin-bottom:8px">| = pausa curta · ‖ = pausa longa</p>
      <p class="ex-text-marked">${html}</p>
    </div>
    <p class="muted small" style="text-align:center;margin-top:14px">Leia em voz alta respeitando os marcadores. Não tenha medo do silêncio.</p>
  `;
}

function renderMetronome(root, it) {
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center">${it.body}</p>
      <div class="metro">
        <div class="metro-dots" id="dots">
          ${[0,1,2,3].map(i => `<div class="dot" data-i="${i}"></div>`).join("")}
        </div>
        <div class="bpm-row">
          <button id="bpmDown">−</button>
          <div class="bpm" id="bpm">90</div>
          <button id="bpmUp">+</button>
        </div>
        <button class="chip active" id="metroToggle">▶︎ Tocar</button>
      </div>
    </div>
  `;
  let bpm = 90, beat = 0;
  const dots = root.querySelectorAll(".dot");
  $("#bpmUp").addEventListener("click", () => { bpm = Math.min(200, bpm + 5); $("#bpm").textContent = bpm; restart(); });
  $("#bpmDown").addEventListener("click", () => { bpm = Math.max(40, bpm - 5); $("#bpm").textContent = bpm; restart(); });
  let on = false;
  function tick() {
    dots.forEach(d => d.classList.remove("on"));
    dots[beat % 4].classList.add("on");
    // beep com WebAudio
    try {
      if (!activeAudioCtx) activeAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const o = activeAudioCtx.createOscillator();
      const g = activeAudioCtx.createGain();
      o.connect(g); g.connect(activeAudioCtx.destination);
      o.frequency.value = beat % 4 === 0 ? 880 : 660;
      g.gain.setValueAtTime(0.0001, activeAudioCtx.currentTime);
      g.gain.exponentialRampToValueAtTime(0.18, activeAudioCtx.currentTime + 0.005);
      g.gain.exponentialRampToValueAtTime(0.0001, activeAudioCtx.currentTime + 0.08);
      o.start(); o.stop(activeAudioCtx.currentTime + 0.09);
    } catch {}
    beat++;
  }
  let id = null;
  function restart() { if (id) { clearInterval(id); id = setInterval(tick, 60000 / bpm); activeIntervals.push(id); } }
  $("#metroToggle").addEventListener("click", () => {
    if (!on) {
      on = true; beat = 0;
      id = setInterval(tick, 60000 / bpm);
      activeIntervals.push(id);
      $("#metroToggle").textContent = "❚❚ Parar";
      activeMetronome = { stop: () => { clearInterval(id); on = false; } };
    } else {
      on = false; clearInterval(id);
      $("#metroToggle").textContent = "▶︎ Tocar";
    }
  });
}

function renderImprov(root, it) {
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center">Tema</p>
      <p class="improv-topic">"${it.topic}"</p>
      <p class="improv-meta">Você tem ${it.seconds}s. Pense 10s, depois fale sem parar.</p>
      <div class="timer" id="imTimer">${fmtTime(it.seconds + 10)}</div>
      <div class="ex-controls">
        <button class="chip active" id="imStart">▶︎ Iniciar</button>
        <button class="chip" id="imShuffle">Trocar tema</button>
      </div>
    </div>
    <p class="muted small" style="text-align:center;margin-top:14px">Dica: você não precisa estar certo. Só não pode parar.</p>
  `;
  let left = it.seconds + 10;
  let id = null;
  function tick() {
    left--;
    $("#imTimer").textContent = fmtTime(left);
    if (left <= 0) {
      clearInterval(id);
      $("#imTimer").textContent = "Tempo!";
      toast("Tempo encerrado");
    } else if (left === it.seconds) {
      toast("Vai!");
    }
  }
  $("#imStart").addEventListener("click", () => {
    if (id) { clearInterval(id); id = null; $("#imStart").textContent = "▶︎ Iniciar"; return; }
    id = setInterval(tick, 1000);
    activeIntervals.push(id);
    $("#imStart").textContent = "❚❚ Pausar";
  });
  $("#imShuffle").addEventListener("click", () => {
    const next = pick(CONTENT.improv.items);
    session.items[session.index] = { ...next, cat: "improv" };
    renderExercise();
  });
}

function renderRecord(root, it) {
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center;margin-bottom:8px">${it.sub || ""}</p>
      <p class="ex-prompt">${it.body}</p>
      <div class="rec-wrap">
        <div class="timer" id="recTime">00:00</div>
        <button class="rec-btn" id="recBtn" aria-label="Gravar"><div class="circle"></div></button>
        <div class="rec-meter"><div id="recBar"></div></div>
        <audio id="recPlay" controls class="hidden"></audio>
        <p class="muted small" id="recHint">Toque no círculo para gravar</p>
      </div>
    </div>
  `;
  const btn = $("#recBtn"), play = $("#recPlay"), bar = $("#recBar"), hint = $("#recHint"), tEl = $("#recTime");
  let chunks = [], start = 0, tId = null;
  btn.addEventListener("click", async () => {
    if (!activeRecorder || activeRecorder.state === "inactive") {
      try {
        activeStream = await navigator.mediaDevices.getUserMedia({ audio: true });
        activeRecorder = new MediaRecorder(activeStream);
        chunks = [];
        activeRecorder.ondataavailable = e => chunks.push(e.data);
        activeRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: chunks[0]?.type || "audio/webm" });
          play.src = URL.createObjectURL(blob);
          play.classList.remove("hidden");
          hint.textContent = "Reouça-se. Onde apressei? Onde travei?";
        };
        activeRecorder.start();
        start = performance.now();
        btn.classList.add("recording");
        btn.querySelector(".circle").outerHTML = '<div class="square"></div>';
        hint.textContent = "Gravando…";

        // meter
        activeAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const src = activeAudioCtx.createMediaStreamSource(activeStream);
        activeAnalyser = activeAudioCtx.createAnalyser();
        activeAnalyser.fftSize = 512;
        src.connect(activeAnalyser);
        const data = new Uint8Array(activeAnalyser.frequencyBinCount);
        const loop = () => {
          activeAnalyser.getByteTimeDomainData(data);
          let max = 0;
          for (let i = 0; i < data.length; i++) max = Math.max(max, Math.abs(data[i] - 128));
          bar.style.width = `${Math.min(100, (max / 128) * 180)}%`;
          activeRAF = requestAnimationFrame(loop);
        };
        loop();
        tId = setInterval(() => {
          tEl.textContent = fmtTime((performance.now() - start) / 1000);
        }, 200);
        activeIntervals.push(tId);
      } catch (e) {
        toast("Permita o microfone para gravar");
      }
    } else {
      activeRecorder.stop();
      btn.classList.remove("recording");
      btn.innerHTML = '<div class="circle"></div>';
      clearInterval(tId);
      cancelAnimationFrame(activeRAF);
      bar.style.width = "0%";
    }
  });
}

// ====== Fluency exercises ======
function renderEasyOnset(root, it) {
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center">${it.sub}</p>
      <p class="ex-prompt" style="margin-top:14px;font-size:18px">${it.body}</p>
      <div class="word-pills" id="onsetList">
        ${it.words.map(w => `<button class="pill">${w}</button>`).join("")}
      </div>
      <p class="muted small" style="text-align:center;margin-top:14px">Toque cada palavra para marcar — comece com um suspiro suave.</p>
    </div>
  `;
  root.querySelectorAll(".pill").forEach(p => {
    p.addEventListener("click", () => p.classList.toggle("done"));
  });
}

function renderProlonged(root, it) {
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center">${it.sub}</p>
      <p class="prolonged-text">${it.body}</p>
      <p class="muted small" style="text-align:center;margin-top:14px">Exagere. Sinta o ar passar nas vogais. Volte gradual.</p>
    </div>
  `;
}

function renderSteps(root, it) {
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center">${it.sub}</p>
      <p class="ex-prompt" style="font-size:17px;margin-top:14px">${it.body}</p>
      <ol class="steps">
        ${it.steps.map(s => `<li>${s}</li>`).join("")}
      </ol>
      <p class="muted small" style="text-align:center">Leia em voz alta. Pratique 3x simulando um travamento.</p>
    </div>
  `;
}

function renderPullout(root, it) {
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center">${it.sub}</p>
      <p class="ex-prompt" style="font-size:17px;margin-top:14px">${it.body}</p>
      <div class="word-pills">
        ${it.practice.map(w => `<button class="pill">${w}</button>`).join("")}
      </div>
      <p class="muted small" style="text-align:center;margin-top:14px">Fale cada palavra alongando a sílaba marcada — sentido de "deslizar".</p>
    </div>
  `;
  root.querySelectorAll(".pill").forEach(p => {
    p.addEventListener("click", () => p.classList.toggle("done"));
  });
}

function renderHierarchy(root, it) {
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center">${it.sub}</p>
      <p class="ex-prompt" style="font-size:17px;margin-top:14px">${it.body}</p>
      <ol class="steps numbered">
        ${it.levels.map(l => `<li>${l}</li>`).join("")}
      </ol>
      <p class="muted small" style="text-align:center">Marque mentalmente em qual você está hoje.</p>
    </div>
  `;
}

function renderShadow(root, it) {
  const words = it.body.split(/\s+/);
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center;margin-bottom:8px">${it.sub}</p>
      <p class="ex-text-marked" id="shadowText">${words.map((w,i)=>`<span class="word" data-i="${i}">${w}</span>`).join(" ")}</p>
      <div class="ex-controls">
        <button class="chip" data-rate="0.7">Devagar</button>
        <button class="chip active" data-rate="0.85">Normal</button>
        <button class="chip" data-rate="1.0">Natural</button>
        <button class="chip" id="shadowStart">▶︎ Iniciar coro</button>
      </div>
      <p class="muted small" style="text-align:center;margin-top:12px">Leia EM VOZ ALTA junto com a voz que vai tocar.</p>
    </div>
  `;
  let rate = it.rate || 0.85;
  let speaking = false;
  let highlightTimer = null;
  root.querySelectorAll("[data-rate]").forEach(b => b.addEventListener("click", () => {
    rate = +b.dataset.rate;
    root.querySelectorAll("[data-rate]").forEach(x => x.classList.toggle("active", x === b));
  }));
  $("#shadowStart").addEventListener("click", () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      clearInterval(highlightTimer);
      speaking = false;
      $("#shadowStart").textContent = "▶︎ Iniciar coro";
      return;
    }
    if (!("speechSynthesis" in window)) {
      toast("Seu navegador não suporta voz");
      return;
    }
    const u = new SpeechSynthesisUtterance(it.body);
    u.lang = "pt-BR";
    u.rate = rate;
    const voices = window.speechSynthesis.getVoices();
    const pt = voices.find(v => v.lang && v.lang.startsWith("pt"));
    if (pt) u.voice = pt;
    speaking = true;
    $("#shadowStart").textContent = "❚❚ Parar";
    // highlight estimado: ~2.6 palavras/segundo em rate 1.0
    let i = 0;
    const ms = (60000 / (160 * rate));
    root.querySelectorAll(".word").forEach(w => w.classList.remove("read"));
    highlightTimer = setInterval(() => {
      const w = root.querySelector(`.word[data-i="${i}"]`);
      if (!w) return;
      w.classList.add("read");
      w.scrollIntoView({ block: "center", behavior: "smooth" });
      i++;
    }, ms);
    activeIntervals.push(highlightTimer);
    u.onend = () => {
      speaking = false;
      clearInterval(highlightTimer);
      $("#shadowStart").textContent = "▶︎ Iniciar coro";
    };
    window.speechSynthesis.speak(u);
  });
}

function renderDAF(root, it) {
  root.innerHTML = `
    <div class="ex-card">
      <div class="warn-box">
        <p>⚠️ <strong>Use fones de ouvido</strong> — sem fones, vai dar microfonia (efeito Larsen).</p>
      </div>
      <p class="muted small" style="text-align:center;margin-top:12px">${it.sub}</p>
      <p class="ex-prompt" style="font-size:16px;margin-top:14px">${it.body}</p>
      <div class="ex-card" style="margin-top:14px;background:rgba(108,92,255,0.08);border-color:rgba(108,92,255,0.2)">
        <p class="muted small" style="text-align:center">Texto para ler enquanto o DAF está ativo:</p>
        <p style="text-align:center;font-size:18px;margin-top:8px">${it.readText}</p>
      </div>
      <div class="daf-controls">
        <label class="muted small">Atraso: <span id="dafMs">180</span> ms</label>
        <input type="range" id="dafRange" min="50" max="300" step="10" value="180" />
        <div class="ex-controls" style="margin-top:6px">
          <button class="chip active" id="dafToggle">▶︎ Ativar eco</button>
        </div>
      </div>
    </div>
  `;
  const range = $("#dafRange"), msEl = $("#dafMs"), toggle = $("#dafToggle");
  let on = false;
  let ctx, src, delay, gain;
  range.addEventListener("input", () => {
    msEl.textContent = range.value;
    if (delay) delay.delayTime.value = (+range.value) / 1000;
  });
  toggle.addEventListener("click", async () => {
    if (on) {
      if (ctx) { try { ctx.close(); } catch {} }
      if (activeStream) { activeStream.getTracks().forEach(t => t.stop()); activeStream = null; }
      on = false;
      toggle.textContent = "▶︎ Ativar eco";
      return;
    }
    if (!confirm("Você está usando fones de ouvido? Sem fones, vai dar microfonia.")) return;
    try {
      activeStream = await navigator.mediaDevices.getUserMedia({
        audio: { echoCancellation: false, noiseSuppression: false, autoGainControl: false }
      });
      ctx = new (window.AudioContext || window.webkitAudioContext)();
      activeAudioCtx = ctx;
      src = ctx.createMediaStreamSource(activeStream);
      delay = ctx.createDelay(1.0);
      delay.delayTime.value = (+range.value) / 1000;
      gain = ctx.createGain();
      gain.gain.value = 0.9;
      src.connect(delay);
      delay.connect(gain);
      gain.connect(ctx.destination);
      on = true;
      toggle.textContent = "❚❚ Parar eco";
      toast("Fale agora — leia o texto");
    } catch (e) {
      toast("Permita o microfone");
    }
  });
}

// ====== Expressão / Articulação ======
function renderEmotionRead(root, it) {
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center">${it.sub}</p>
      <p class="ex-prompt big" style="margin:18px 0">"${it.text}"</p>
      <div class="emotion-grid">
        ${it.emotions.map(e => `<button class="emo-pill">${e}</button>`).join("")}
      </div>
      <p class="muted small" style="text-align:center;margin-top:14px">Toque uma emoção e leia a frase com ela. Marque conforme for fazendo.</p>
    </div>
  `;
  root.querySelectorAll(".emo-pill").forEach(p => {
    p.addEventListener("click", () => p.classList.toggle("done"));
  });
}

function renderStressShift(root, it) {
  const words = it.text.split(/\s+/);
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center">${it.sub}</p>
      <p class="stress-sentence" id="stressSentence">
        ${words.map((w,i) => `<span class="sw" data-i="${i}">${w}</span>`).join(" ")}
      </p>
      <p class="muted small" style="text-align:center;margin-top:14px">Toque uma palavra → leia a frase enfatizando ELA. Sinta como o sentido muda.</p>
    </div>
  `;
  root.querySelectorAll(".sw").forEach(sw => {
    sw.addEventListener("click", () => {
      root.querySelectorAll(".sw").forEach(s => s.classList.remove("hit"));
      sw.classList.add("hit");
    });
  });
}

function renderNumbers(root, it) {
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center">${it.body}</p>
      <div class="num-list">
        ${it.sequences.map(s => `<button class="num-card">${s}</button>`).join("")}
      </div>
      <p class="muted small" style="text-align:center;margin-top:14px">Toque cada cartão pra marcar como praticado.</p>
    </div>
  `;
  root.querySelectorAll(".num-card").forEach(c => {
    c.addEventListener("click", () => c.classList.toggle("done"));
  });
}

function renderVolume(root, it) {
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center">${it.sub}</p>
      <p class="ex-prompt" style="margin:16px 0;font-size:20px">"${it.text}"</p>
      <ol class="steps numbered">
        ${it.levels.map(l => `<li>${l}</li>`).join("")}
      </ol>
      <p class="muted small" style="text-align:center">Mantenha a articulação igual em todos os volumes — só o volume muda.</p>
    </div>
  `;
}

function renderLibrary(root, it) {
  root.innerHTML = `
    <div class="ex-card">
      <p class="muted small" style="text-align:center">${it.genre}${it.author ? ` · ${it.author}` : ""}</p>
      <p class="library-text">${(it.text || "").replace(/\n/g, "<br>")}</p>
      <div class="ex-controls">
        <button class="chip active" id="libRead">🔊 Ler junto comigo</button>
      </div>
      <p class="muted small" style="text-align:center;margin-top:14px">Leia em voz alta. Use as pausas naturais da pontuação.</p>
    </div>
  `;
  let speaking = false;
  $("#libRead").addEventListener("click", () => {
    if (speaking) {
      window.speechSynthesis.cancel();
      speaking = false;
      $("#libRead").textContent = "🔊 Ler junto comigo";
      return;
    }
    if (!("speechSynthesis" in window)) { toast("Voz não suportada"); return; }
    const u = new SpeechSynthesisUtterance(it.text);
    u.lang = "pt-BR";
    u.rate = 0.9;
    const voices = window.speechSynthesis.getVoices();
    const pt = voices.find(v => v.lang && v.lang.startsWith("pt"));
    if (pt) u.voice = pt;
    speaking = true;
    $("#libRead").textContent = "❚❚ Parar";
    u.onend = () => {
      speaking = false;
      $("#libRead").textContent = "🔊 Ler junto comigo";
    };
    window.speechSynthesis.speak(u);
  });
}

// ====== List view (browse all items in a category) ======
function showList(catKey) {
  const cat = CONTENT[catKey];
  if (!cat) return;
  cleanupExercise();
  showScreen("list");
  $("#listTitle").textContent = cat.name;
  $("#listCount").textContent = `${cat.items.length} exercícios`;
  $("#listRandom").onclick = () => {
    const n = catKey === "fluency" ? 4 : 3;
    const items = [...cat.items].sort(() => Math.random() - 0.5).slice(0, Math.min(n, cat.items.length)).map(x => ({ ...x, cat: catKey }));
    startSession(items, "list:" + catKey);
  };
  const root = $("#listItems");
  root.innerHTML = "";

  // Group library by genre
  if (catKey === "library") {
    const groups = {};
    cat.items.forEach((it, i) => {
      const g = it.genre || "Outros";
      (groups[g] = groups[g] || []).push({ it, i });
    });
    Object.entries(groups).forEach(([genre, arr]) => {
      const h = document.createElement("h3");
      h.className = "list-group";
      h.textContent = genre;
      root.appendChild(h);
      arr.forEach(({ it, i }) => root.appendChild(makeListCard(it, i, catKey)));
    });
  } else {
    cat.items.forEach((it, i) => root.appendChild(makeListCard(it, i, catKey)));
  }
}

function makeListCard(it, idx, catKey) {
  const card = document.createElement("button");
  card.className = "list-card";
  const icon = exerciseIcon(it);
  const title = it.title || it.text?.slice(0, 60) || it.topic?.slice(0, 60) || titleFromType(it);
  const sub = it.sub || it.body?.slice(0, 80) || (it.type === "improv" ? `${it.seconds}s` : "") || "";
  card.innerHTML = `
    <span class="lc-icon">${icon}</span>
    <span class="lc-content">
      <span class="lc-title">${title}</span>
      ${sub ? `<span class="lc-sub muted small">${sub}</span>` : ""}
    </span>
    <span class="lc-arrow">›</span>
  `;
  card.addEventListener("click", () => {
    startSession([{ ...it, cat: catKey }], "list:" + catKey);
  });
  return card;
}

function exerciseIcon(it) {
  const map = {
    breath: "🌬️", prompt: "📝", tongueTwister: "🗣️", pacedRead: "⏱️", pausedRead: "⏸️",
    metronome: "🥁", improv: "🎤", record: "🎙️", easyOnset: "🌱", prolonged: "🐢",
    cancellation: "🔄", pullout: "↘️", shadow: "🎵", daf: "🎧", hierarchy: "📈",
    emotionRead: "🎭", stressShift: "✨", numbers: "🔢", volume: "🔊", library: "📖",
  };
  return map[it.type] || "▶︎";
}

// ===== Wire up =====
function wire() {
  $("#startDaily").addEventListener("click", () => {
    const items = buildDaily();
    startSession(items, null);
  });
  document.querySelectorAll("[data-cat]").forEach(b => b.addEventListener("click", () => {
    showList(b.dataset.cat);
  }));
  $("#listBack").addEventListener("click", () => { cleanupExercise(); showScreen("home"); renderHome(); });
  $("#exBack").addEventListener("click", () => {
    if (session && session.index > 0) { session.index--; renderExercise(); }
    else {
      cleanupExercise();
      const back = session && session.source && session.source.startsWith("list:") ? session.source.slice(5) : null;
      if (back) showList(back); else showScreen("home");
    }
  });
  $("#exClose").addEventListener("click", () => {
    cleanupExercise();
    const back = session && session.source && session.source.startsWith("list:") ? session.source.slice(5) : null;
    if (back) showList(back); else showScreen("home");
  });
  $("#exDone").addEventListener("click", () => nextExercise());
  $("#exSkip").addEventListener("click", () => nextExercise());
  $("#resetBtn").addEventListener("click", () => {
    if (!confirm("Zerar todo o progresso?")) return;
    localStorage.removeItem(KEY);
    state = defaultState();
    save();
    renderHome();
    toast("Progresso zerado");
  });
  $("#streakBtn").addEventListener("click", () => {
    toast(state.streak > 0 ? `${state.streak} dia${state.streak>1?"s":""} seguidos 🔥` : "Comece um treino pra acender 🔥");
  });
}

renderHome();
wire();
