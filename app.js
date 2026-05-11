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
      { type: "tongueTwister", text: "Bagre branco, branco bagre." },
      { type: "tongueTwister", text: "A casa do padre Pedro Paulo Pereira Pinto é pintada de pinta preta, pinta branca e pinta parda." },
      { type: "tongueTwister", text: "Sabia que o sabiá sabia assobiar?" },
      { type: "tongueTwister", text: "Disse o tatu para o tatuí: \"se eu tatuasse você, você se tatuaria?\"" },
      { type: "tongueTwister", text: "Em três quintas-feiras tristes, três tigres tigrados trituravam trigo num triturador." },
      { type: "tongueTwister", text: "O caju do Cacuru é do Juca, o caju do Juca é do Cacuru." },
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
      { type: "improv", topic: "Fale sobre um livro / filme que mudou alguma coisa em você.", seconds: 90 },
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
  showScreen("home");
  renderHome();
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

// ===== Wire up =====
function wire() {
  $("#startDaily").addEventListener("click", () => {
    const items = buildDaily();
    startSession(items, null);
  });
  document.querySelectorAll("[data-cat]").forEach(b => b.addEventListener("click", () => {
    const cat = b.dataset.cat;
    const pool = CONTENT[cat].items;
    const n = cat === "fluency" ? 4 : 3;
    const items = [...pool].sort(() => Math.random() - 0.5).slice(0, Math.min(n, pool.length)).map(x => ({ ...x, cat }));
    startSession(items, cat);
  }));
  $("#exBack").addEventListener("click", () => {
    if (session && session.index > 0) { session.index--; renderExercise(); }
    else { cleanupExercise(); showScreen("home"); }
  });
  $("#exClose").addEventListener("click", () => { cleanupExercise(); showScreen("home"); });
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
