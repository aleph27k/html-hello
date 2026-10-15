const demoData = {
  users: [
    { id: "sofia-chen", name: "Sofía Chen", email: "sofia.chen@northstar.io", plan: "Enterprise", status: "Activo", company: "Northstar Labs", created: "12 feb 2025", contracts: 3, spend: "$8,420" },
    { id: "mateo-ruiz", name: "Mateo Ruiz", email: "mateo.ruiz@lumen.co", plan: "Growth", status: "Activo", company: "Lumen Studio", created: "03 mar 2025", contracts: 2, spend: "$3,150" },
    { id: "priya-shah", name: "Priya Shah", email: "priya@orbithealth.com", plan: "Enterprise", status: "Activo", company: "Orbit Health", created: "21 ene 2025", contracts: 5, spend: "$12,600" },
    { id: "diego-martin", name: "Diego Martín", email: "diego@cobaltdesign.es", plan: "Starter", status: "Pendiente", company: "Cobalt Design", created: "18 sep 2025", contracts: 1, spend: "$960" },
    { id: "amara-okafor", name: "Amara Okafor", email: "amara@fieldwork.org", plan: "Growth", status: "Activo", company: "Fieldwork", created: "07 jun 2025", contracts: 2, spend: "$2,840" },
  ],
  agents: [
    { id: "atlas", name: "Atlas", owner: "Sofía Chen", status: "Activo", skills: ["Análisis de datos", "Investigación web", "Redacción"], prompt: "Eres Atlas, un analista de datos preciso. Explica los hallazgos con claridad y cita siempre la fuente de cada conclusión." },
    { id: "nebula", name: "Nébula", owner: "Mateo Ruiz", status: "Activo", skills: ["Redacción", "Atención al cliente"], prompt: "Eres Nébula, una asistente de soporte amable. Resuelve dudas paso a paso y deriva los casos sensibles a una persona." },
    { id: "lince", name: "Lince", owner: "Priya Shah", status: "En revisión", skills: ["Análisis de datos", "Automatización", "Investigación web"], prompt: "Eres Lince, un agente de investigación. Resume la evidencia disponible y señala explícitamente cualquier incertidumbre." },
    { id: "brujula", name: "Brújula", owner: "Amara Okafor", status: "Activo", skills: ["Atención al cliente", "Automatización"], prompt: "Eres Brújula, un agente de operaciones. Prioriza respuestas útiles, consistentes y fáciles de ejecutar." },
  ],
  skills: [
    { id: "analytics", name: "Análisis de datos", description: "Interpreta conjuntos de datos y convierte resultados en conclusiones accionables.", agents: ["Atlas", "Lince"], category: "Inteligencia" },
    { id: "research", name: "Investigación web", description: "Localiza, contrasta y sintetiza información disponible en fuentes web.", agents: ["Atlas", "Lince"], category: "Inteligencia" },
    { id: "writing", name: "Redacción", description: "Genera y adapta textos claros al tono y objetivo de cada equipo.", agents: ["Atlas", "Nébula"], category: "Contenido" },
    { id: "support", name: "Atención al cliente", description: "Clasifica consultas y prepara respuestas útiles para los clientes.", agents: ["Nébula", "Brújula"], category: "Operaciones" },
    { id: "automation", name: "Automatización", description: "Coordina tareas repetitivas y flujos de trabajo entre herramientas.", agents: ["Lince", "Brújula"], category: "Operaciones" },
  ],
  contracts: [
    { id: "CN-2048", client: "Northstar Labs", agent: "Atlas", skills: [{ name: "Análisis de datos", price: 780 }, { name: "Investigación web", price: 320 }], start: "01 oct 2025", end: "31 oct 2025", total: 1100, status: "Activo" },
    { id: "CN-2047", client: "Lumen Studio", agent: "Nébula", skills: [{ name: "Redacción", price: 420 }, { name: "Atención al cliente", price: 540 }], start: "15 sep 2025", end: "15 dic 2025", total: 960, status: "Activo" },
    { id: "CN-2046", client: "Orbit Health", agent: "Lince", skills: [{ name: "Análisis de datos", price: 780 }, { name: "Investigación web", price: 320 }, { name: "Automatización", price: 460 }], start: "01 sep 2025", end: "30 nov 2025", total: 1560, status: "Activo" },
    { id: "CN-2045", client: "Fieldwork", agent: "Brújula", skills: [{ name: "Atención al cliente", price: 540 }, { name: "Automatización", price: 460 }], start: "10 ago 2025", end: "10 nov 2025", total: 1000, status: "Activo" },
  ],
  errors: [
    { id: "ERR-0831", date: "15 oct 2025 · 09:42", agent: "Atlas", type: "Timeout", severity: "Alta", description: "La consulta de análisis superó el límite de 30 segundos.", trace: "TimeoutError: execution exceeded 30000ms\n  at Atlas.runAnalysis (agent/atlas.js:84:12)\n  at processQueue (runtime/queue.js:41:9)" },
    { id: "ERR-0830", date: "15 oct 2025 · 08:17", agent: "Nébula", type: "Límite de API", severity: "Media", description: "El proveedor de lenguaje devolvió una respuesta 429.", trace: "RateLimitError: provider returned HTTP 429\n  at Nebula.reply (agent/nebula.js:52:18)\n  at handleMessage (runtime/messages.js:26:7)" },
    { id: "ERR-0829", date: "14 oct 2025 · 17:36", agent: "Lince", type: "Fuente inaccesible", severity: "Baja", description: "Una fuente de investigación rechazó la conexión.", trace: "FetchError: connection refused by source\n  at Lince.fetchSource (agent/lince.js:103:15)\n  at collectSources (runtime/research.js:61:11)" },
    { id: "ERR-0828", date: "14 oct 2025 · 14:08", agent: "Brújula", type: "Validación", severity: "Media", description: "Una tarea recibió un campo obligatorio vacío.", trace: "ValidationError: task.owner is required\n  at Brujula.createTask (agent/brujula.js:37:10)\n  at runWorkflow (runtime/workflows.js:74:5)" },
    { id: "ERR-0827", date: "13 oct 2025 · 11:54", agent: "Atlas", type: "Formato de salida", severity: "Baja", description: "La respuesta no respetó el formato JSON esperado.", trace: "OutputParseError: unexpected token at position 0\n  at Atlas.formatResult (agent/atlas.js:119:8)\n  at completeRun (runtime/runner.js:90:14)" },
    { id: "ERR-0826", date: "12 oct 2025 · 16:21", agent: "Lince", type: "Límite de API", severity: "Alta", description: "Se agotaron los reintentos al consultar el servicio externo.", trace: "RetryLimitError: 3 attempts exhausted\n  at Lince.search (agent/lince.js:72:13)\n  at investigate (runtime/research.js:28:6)" },
  ],
};

const pageInfo = {
  users: { title: "Gestión de usuarios", eyebrow: "PERSONAS", description: "Administra las cuentas, planes y actividad de tus clientes." },
  agents: { title: "Gestión de agentes", eyebrow: "AUTOMATIZACIÓN", description: "Revisa tus agentes y las habilidades que tienen disponibles." },
  skills: { title: "Catálogo de habilidades", eyebrow: "CATÁLOGO", description: "Capacidades que puedes combinar para adaptar cada agente." },
  contracts: { title: "Contratos de agentes", eyebrow: "FACTURACIÓN", description: "Consulta los alquileres activos y el detalle de sus importes." },
  errors: { title: "Registro de errores", eyebrow: "OBSERVABILIDAD", description: "Incidencias recientes detectadas durante la ejecución de agentes." },
};

const navItems = [
  ["dashboard", "Dashboard", "dashboard.html", "M4 4h7v7H4zM13 4h7v4h-7zM13 11h7v9h-7zM4 13h7v7H4z"],
  ["users", "Gestión de usuarios", "user_management.html", "M16 20v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M9.5 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8M17 11a4 4 0 0 0 0-8M21 20v-2a4 4 0 0 0-3-3.87"],
  ["agents", "Gestión de agentes", "agent_management.html", "M4 6h16v13H4zM9 11h.01M15 11h.01M9 15h6M12 3v3"],
  ["skills", "Habilidades", "skills_catalog.html", "m12 3 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Zm7 12 1 2 2 1-2 1-1 2-1-2-2-1 2-1 1-2Z"],
  ["contracts", "Contratos de agentes", "agent_contracts.html", "M4 5h16v15H4zM8 3v4m8-4v4M4 10h16M8 14h3m-3 3h7"],
  ["errors", "Registro de errores", "error_log.html", "m12 3 9 17H3L12 3Zm0 6v5m0 3h.01"],
];

const escapeHtml = (value) => String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
const themeAttrs = (light, dark) => `data-light-classes="${light}" data-dark-classes="${dark}"`;

function renderApp(view) {
  const activePage = pageInfo[view];
  if (!activePage) return;

  const nav = navItems.map(([key, label, href, path]) => {
    const active = key === view;
    const classes = active
      ? "flex min-h-11 items-center gap-3 rounded-lg bg-[#eaf4ce] px-3 text-[13px] font-semibold text-[#253321]"
      : "flex min-h-11 items-center gap-3 rounded-lg px-3 text-[13px] font-medium text-[#6d7871] transition-colors hover:bg-[#f2f5f1] hover:text-[#202a26]";
    const theme = active
      ? themeAttrs("bg-[#eaf4ce] text-[#253321]", "bg-[#344626] text-[#e8f4d4]")
      : themeAttrs("text-[#6d7871] hover:bg-[#f2f5f1] hover:text-[#202a26]", "text-[#a6b1aa] hover:bg-[#26332d] hover:text-[#f2f6f3]");
    return `<a href="${href}" class="${classes} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500" ${theme} ${active ? 'aria-current="page"' : ""}><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" class="size-[18px]" stroke="currentColor" stroke-width="1.8"><path d="${path}" stroke-linecap="round" stroke-linejoin="round"/></svg><span>${label}</span>${active ? '<span class="ml-auto size-1.5 rounded-full bg-[#53791d]" aria-hidden="true"></span>' : ""}</a>`;
  }).join("");

  document.body.className = "min-h-screen bg-[#f6f7f4] font-sans text-[#202a26] antialiased transition-colors duration-200";
  document.body.setAttribute("data-light-classes", "bg-[#f6f7f4] text-[#202a26]");
  document.body.setAttribute("data-dark-classes", "bg-[#111a17] text-[#edf2ee]");

  document.querySelector("#app").innerHTML = `
    <div class="min-h-screen lg:flex">
      <aside id="sidebar" class="fixed inset-y-0 left-0 z-40 hidden w-[268px] flex flex-col border-r border-[#dfe5df] bg-white px-5 py-6 transition-colors duration-200 lg:sticky lg:flex lg:h-screen lg:shrink-0" ${themeAttrs("border-[#dfe5df] bg-white", "border-[#293631] bg-[#19231f]")} aria-label="Navegación principal" aria-hidden="true">
        <a href="dashboard.html" class="mb-10 flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lime-500" aria-label="AgentHub, ir al Dashboard"><span class="grid size-10 place-items-center rounded-lg bg-[#d7f36a] text-[#17211d]"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" class="size-6" stroke="currentColor" stroke-width="1.8"><path d="M12 3.5 19.5 8v8L12 20.5 4.5 16V8L12 3.5Z"/><path d="m8.5 12 2.2 2.2 4.8-5"/></svg></span><span><span class="block text-[17px] font-semibold tracking-tight text-[#202a26]" ${themeAttrs("text-[#202a26]", "text-[#edf2ee]")}>AgentHub</span><span class="mt-0.5 block text-[11px] font-medium uppercase tracking-[0.12em] text-[#77817b]" ${themeAttrs("text-[#77817b]", "text-[#9daaa2]")}>Operations</span></span></a>
        <p class="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#89928c]" ${themeAttrs("text-[#89928c]", "text-[#8b9a91]")}>Workspace</p>
        <nav class="flex flex-col gap-1" aria-label="Secciones del panel">${nav}</nav>
        <div class="mt-auto rounded-lg border border-[#e5eae4] bg-[#f7f9f5] p-4" ${themeAttrs("border-[#e5eae4] bg-[#f7f9f5]", "border-[#34423b] bg-[#222e28]")}><div class="flex items-center gap-2"><span class="size-2.5 rounded-full bg-[#78a83d]"></span><p class="text-xs font-semibold text-[#39473e]" ${themeAttrs("text-[#39473e]", "text-[#dce5de]")}>Todos los sistemas operativos</p></div><p class="mt-2 pl-[18px] text-[11px] leading-5 text-[#7a867e]" ${themeAttrs("text-[#7a867e]", "text-[#a0ada4]")}>Actualizado hace unos momentos</p></div>
        <div class="mt-5 flex items-center gap-3 border-t border-[#e8ece7] pt-5" ${themeAttrs("border-[#e8ece7]", "border-[#34423b]")}><span class="grid size-9 place-items-center rounded-full bg-[#f3d5bb] text-xs font-bold text-[#583d2a]">AM</span><span class="min-w-0 flex-1"><span class="block truncate text-xs font-semibold text-[#303b34]" ${themeAttrs("text-[#303b34]", "text-[#e3eae5]")}>Alex Morgan</span><span class="mt-0.5 block text-[11px] text-[#849087]" ${themeAttrs("text-[#849087]", "text-[#9ca9a0]")}>Administrador</span></span></div>
      </aside>
      <div class="min-w-0 flex-1">
        <header class="sticky top-0 z-30 flex h-[68px] items-center justify-between border-b border-[#e6eae5] bg-[#f6f7f4]/95 px-5 backdrop-blur-sm transition-colors duration-200 sm:px-8 lg:px-10" ${themeAttrs("border-[#e6eae5] bg-[#f6f7f4]/95", "border-[#293631] bg-[#111a17]/95")}>
          <div class="flex items-center gap-3"><button id="mobile-menu-toggle" type="button" class="grid size-9 place-items-center rounded-md border border-[#dfe5df] bg-white text-[#536158] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500 lg:hidden" aria-controls="sidebar" aria-expanded="false" aria-label="Abrir navegación" ${themeAttrs("border-[#dfe5df] bg-white text-[#536158]", "border-[#36443c] bg-[#1c2822] text-[#c6d1c9]")}><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" class="size-5" stroke="currentColor" stroke-width="1.8"><path d="M4 6h16M4 12h16M4 18h16"/></svg></button><div><p class="text-[11px] font-medium text-[#89938c]" ${themeAttrs("text-[#89938c]", "text-[#9ba79f]")}>AgentHub <span class="px-1 text-[#bac2bc]">/</span> ${activePage.eyebrow}</p><h1 class="mt-0.5 text-[15px] font-semibold tracking-tight text-[#26322b]" ${themeAttrs("text-[#26322b]", "text-[#edf2ee]")}>${activePage.title}</h1></div></div>
          <button id="theme-toggle" type="button" class="flex h-9 items-center gap-2 rounded-md border border-[#dfe5df] bg-white px-3 text-[11px] font-semibold text-[#4e5b52] transition-colors hover:bg-[#f2f5f1] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-lime-500" aria-label="Cambiar a modo oscuro" aria-pressed="false" ${themeAttrs("border-[#dfe5df] bg-white text-[#4e5b52] hover:bg-[#f2f5f1]", "border-[#36443c] bg-[#1c2822] text-[#d3ddd5] hover:bg-[#29362f]")}><svg id="theme-icon" aria-hidden="true" viewBox="0 0 24 24" fill="none" class="size-4" stroke="currentColor" stroke-width="1.8"><path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z"/></svg><span id="theme-label">Modo oscuro</span></button>
        </header>
        <main class="mx-auto w-full max-w-[1440px] px-5 pb-12 pt-8 sm:px-8 sm:pt-10 lg:px-10"><section aria-labelledby="page-title"><div class="mb-7"><p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-[#76836f]" ${themeAttrs("text-[#76836f]", "text-[#a2b08f]")}>${activePage.eyebrow}</p><h2 id="page-title" class="mt-2 text-[25px] font-semibold leading-tight tracking-tight text-[#202a26]" ${themeAttrs("text-[#202a26]", "text-[#edf2ee]")}>${activePage.title}</h2><p class="mt-1.5 text-[13px] text-[#7b867e]" ${themeAttrs("text-[#7b867e]", "text-[#a4afa7]")}>${activePage.description}</p></div>${renderPageContent(view)}</section></main>
      </div>
    </div>
    <dialog id="record-modal" class="m-auto max-h-[90vh] w-[min(640px,calc(100%-2rem))] overflow-hidden rounded-xl border border-[#dfe5df] bg-white p-0 text-[#202a26] shadow-2xl backdrop:bg-[#101814]/55" ${themeAttrs("border-[#dfe5df] bg-white text-[#202a26]", "border-[#36443c] bg-[#19231f] text-[#edf2ee]")} aria-labelledby="modal-title"><div class="flex max-h-[90vh] flex-col"><header class="flex items-start justify-between gap-4 border-b border-[#e6eae5] px-5 py-4" ${themeAttrs("border-[#e6eae5]", "border-[#34423b]")}><div><p id="modal-eyebrow" class="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#718263]">DETALLE</p><h2 id="modal-title" class="mt-1 text-lg font-semibold"></h2></div><button type="button" data-modal-close class="grid size-8 shrink-0 place-items-center rounded-md text-[#758078] hover:bg-[#f0f3ef] focus-visible:outline-2 focus-visible:outline-lime-500" aria-label="Cerrar ventana" ${themeAttrs("text-[#758078] hover:bg-[#f0f3ef]", "text-[#b2beb5] hover:bg-[#2b3831]")}><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" class="size-4" stroke="currentColor" stroke-width="2"><path d="m6 6 12 12M18 6 6 18"/></svg></button></header><div id="modal-content" class="overflow-y-auto px-5 py-5"></div></div></dialog>
  `;
}

function cardClasses() {
  return `rounded-lg border border-[#e4e9e2] bg-white transition-colors duration-200`;
}

function cardThemeAttrs() {
  return themeAttrs("border-[#e4e9e2] bg-white", "border-[#2b3932] bg-[#1a2520]");
}

function textClasses(size = "text-sm", weight = "font-medium") {
  return `${size} ${weight} text-[#29352e]`;
}

function badge(label, variant = "green") {
  const variants = {
    green: ["bg-[#e7f2d7] text-[#52712b]", "bg-[#344626] text-[#d5e9b5]"],
    amber: ["bg-[#fbefcf] text-[#8a6821]", "bg-[#493b20] text-[#f0d99a]"],
    red: ["bg-[#f9e4e1] text-[#a94d45]", "bg-[#482b29] text-[#f0aaa0]"],
    blue: ["bg-[#e2eef7] text-[#426d8e]", "bg-[#263b4a] text-[#b6d3e7]"],
    gray: ["bg-[#edf0ed] text-[#66736a]", "bg-[#303b35] text-[#c3cec6]"],
  };
  const [light, dark] = variants[variant] || variants.gray;
  return `<span class="inline-flex items-center rounded-full px-2.5 py-1 text-[10px] font-semibold ${light}" ${themeAttrs(light, dark)}>${escapeHtml(label)}</span>`;
}

function renderMenu(type, record, actions) {
  const id = `${type}-${record.id}`;
  const items = actions.map(([action, label, destructive = false]) => {
    const lightClasses = destructive ? "text-[#ad5145] hover:bg-[#fff1ee]" : "text-[#435047] hover:bg-[#f2f5f1]";
    const darkClasses = destructive ? "text-[#f09a89] hover:bg-[#382a27]" : "text-[#d2ddd4] hover:bg-[#2c3932]";
    return `<button type="button" role="menuitem" class="block w-full px-3 py-2 text-left text-xs ${lightClasses}" ${themeAttrs(lightClasses, darkClasses)} data-row-action="${action}" data-record-type="${type}" data-record-id="${record.id}">${label}</button>`;
  }).join("");
  return `<div class="relative inline-block text-left"><button type="button" class="grid size-8 place-items-center rounded-md text-[#78847c] hover:bg-[#f0f3ef] focus-visible:outline-2 focus-visible:outline-lime-500" ${themeAttrs("text-[#78847c] hover:bg-[#f0f3ef]", "text-[#aab6ae] hover:bg-[#2b3831]")} aria-label="Acciones de ${escapeHtml(record.name || record.id)}" aria-haspopup="menu" aria-expanded="false" data-actions-trigger="${id}"><svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor" class="size-4"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg></button><div id="menu-${id}" role="menu" class="absolute right-0 top-9 z-20 hidden min-w-36 overflow-hidden rounded-md border border-[#e1e7e0] bg-white py-1 shadow-lg" ${themeAttrs("border-[#e1e7e0] bg-white", "border-[#39463f] bg-[#202c26]")}>${items}</div></div>`;
}

function renderTable(headers, rows) {
  const surfaceTheme = themeAttrs("bg-white", "bg-[#1a2520]");
  return `<div class="overflow-x-auto bg-white" ${surfaceTheme}><table class="w-full min-w-[720px] border-collapse bg-white text-left" ${surfaceTheme}><thead><tr>${headers.map((header) => `<th scope="col" class="border-b border-[#e8ece7] px-4 py-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#859087]" ${themeAttrs("border-[#e8ece7] text-[#859087]", "border-[#34423b] text-[#a4b0a7]")}>${header}</th>`).join("")}</tr></thead><tbody>${rows}</tbody></table></div>`;
}

function renderTableRow(cells, type, record, actions) {
  return `<tr class="border-b border-[#edf0ed] last:border-0 hover:bg-[#fafbf9]" ${themeAttrs("border-[#edf0ed] hover:bg-[#fafbf9]", "border-[#303d36] hover:bg-[#202c26]")} data-record-row="${type}-${record.id}">${cells.map((cell, index) => `<td class="px-4 py-4 align-middle ${index === 0 ? "" : ""}">${cell}</td>`).join("")}<td class="px-4 py-3 text-right">${renderMenu(type, record, actions)}</td></tr>`;
}

function renderPageContent(view) {
  if (view === "users") {
    const rows = demoData.users.map((user) => renderTableRow([
      `<div class="font-semibold text-[#29352e]" ${themeAttrs("text-[#29352e]", "text-[#e6ede7]")}>${escapeHtml(user.name)}</div><div class="mt-1 text-[11px] text-[#89948c]" ${themeAttrs("text-[#89948c]", "text-[#9eaaa2]")}>${escapeHtml(user.company)}</div>`,
      `<span class="text-xs text-[#657168]" ${themeAttrs("text-[#657168]", "text-[#b3beb6]")}>${escapeHtml(user.email)}</span>`,
      `<span class="text-xs font-medium text-[#536057]" ${themeAttrs("text-[#536057]", "text-[#c3cdc5]")}>${escapeHtml(user.plan)}</span>`,
      badge(user.status, user.status === "Activo" ? "green" : "amber"),
    ], "users", user, [["details", "Ver detalles"], ["delete", "Eliminar", true]])).join("");
    return `<div class="${cardClasses()} overflow-hidden" ${cardThemeAttrs()}>${renderTable(["Usuario", "Correo electrónico", "Plan", "Estado", ""], rows)}</div><p class="mt-3 text-[11px] text-[#89948c]" ${themeAttrs("text-[#89948c]", "text-[#9eaaa2]")}>${demoData.users.length} usuarios registrados · Datos estáticos de demostración</p>`;
  }

  if (view === "agents") {
    return `<div class="grid gap-3">${demoData.agents.map((agent, index) => `<article class="${cardClasses()} p-4 sm:p-5" data-record-row="agents-${agent.id}"><div class="flex flex-wrap items-start justify-between gap-4"><div class="flex min-w-0 items-center gap-3"><span class="grid size-10 shrink-0 place-items-center rounded-lg ${["bg-[#e6f2cf] text-[#557725]", "bg-[#dff1ed] text-[#28766b]", "bg-[#fbe9dd] text-[#a85f3e]", "bg-[#e8e5f3] text-[#685c91]"][index]}">${escapeHtml(agent.name.slice(0, 1))}</span><div class="min-w-0"><h3 class="truncate ${textClasses("text-sm", "font-semibold")}">${escapeHtml(agent.name)}</h3><p class="mt-1 text-[11px] text-[#859087]" ${themeAttrs("text-[#859087]", "text-[#a4b0a7]")}>Propietario · ${escapeHtml(agent.owner)}</p></div></div><div class="flex items-center gap-2">${badge(agent.status, agent.status === "Activo" ? "green" : "amber")}${renderMenu("agents", agent, [["details", "Ver detalles"], ["configure", "Configurar"], ["delete", "Eliminar", true]])}</div></div><div class="mt-4 border-t border-[#edf0ed] pt-3" ${themeAttrs("border-[#edf0ed]", "border-[#303d36]")}><button type="button" class="flex items-center gap-2 text-xs font-semibold text-[#596a4b] hover:text-[#3f5827] focus-visible:outline-2 focus-visible:outline-lime-500" aria-expanded="false" aria-controls="skills-${agent.id}" data-skills-toggle="${agent.id}" ${themeAttrs("text-[#596a4b]", "text-[#b5ce91]")}><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" class="size-4 transition-transform duration-300" data-chevron="${agent.id}" stroke="currentColor" stroke-width="1.8"><path d="m7 10 5 5 5-5"/></svg>Skills <span class="text-[10px] font-medium text-[#89948c]" ${themeAttrs("text-[#89948c]", "text-[#9eaaa2]")}>${agent.skills.length}</span></button><div id="skills-${agent.id}" class="grid max-h-0 grid-rows-[0fr] overflow-hidden opacity-0 transition-all duration-300" aria-hidden="true"><div class="min-h-0 overflow-hidden"><ul class="flex flex-wrap gap-2 pt-3">${agent.skills.map((skill) => `<li class="rounded-md bg-[#f1f4ed] px-2.5 py-1.5 text-[10px] font-medium text-[#58665b]" ${themeAttrs("bg-[#f1f4ed] text-[#58665b]", "bg-[#2b3932] text-[#bfcbc2]")}>${escapeHtml(skill)}</li>`).join("")}</ul></div></div></div></article>`).join("")}</div>`;
  }

  if (view === "skills") {
    return `<p class="mb-5 max-w-3xl rounded-lg border-l-2 border-[#93b757] bg-[#eef4e4] px-4 py-3 text-xs leading-6 text-[#53624b]" ${themeAttrs("bg-[#eef4e4] text-[#53624b]", "bg-[#263321] text-[#c3d3b0]")}>Una habilidad es una capacidad especializada que se habilita en un agente para ampliar las tareas que puede realizar. Puedes combinar varias habilidades según las necesidades de cada contrato.</p><div class="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">${demoData.skills.map((skill, index) => `<article class="${cardClasses()} relative p-5"><div class="flex items-start justify-between gap-3"><span class="grid size-9 place-items-center rounded-lg ${["bg-[#e6f2cf] text-[#557725]", "bg-[#dff1ed] text-[#28766b]", "bg-[#fbe9dd] text-[#a85f3e]", "bg-[#e8e5f3] text-[#685c91]", "bg-[#f7e7ba] text-[#8a6821]"][index]}"><svg aria-hidden="true" viewBox="0 0 24 24" fill="none" class="size-4" stroke="currentColor" stroke-width="1.8"><path d="m12 3 2 5 5 2-5 2-2 5-2-5-5-2 5-2 2-5Z"/></svg></span>${renderMenu("skills", skill, [["details", "Ver detalles"], ["delete", "Eliminar", true]])}</div><p class="mt-4 text-[10px] font-semibold uppercase tracking-[0.1em] text-[#87947c]" ${themeAttrs("text-[#87947c]", "text-[#a2b18f]")}>${escapeHtml(skill.category)}</p><h3 class="mt-1 ${textClasses("text-sm", "font-semibold")}">${escapeHtml(skill.name)}</h3><p class="mt-2 min-h-10 text-xs leading-5 text-[#7b877f]" ${themeAttrs("text-[#7b877f]", "text-[#a6b2aa]")}>${escapeHtml(skill.description)}</p><div class="mt-5 flex items-center justify-between border-t border-[#edf0ed] pt-3" ${themeAttrs("border-[#edf0ed]", "border-[#303d36")}><span class="text-[11px] text-[#89948c]" ${themeAttrs("text-[#89948c]", "text-[#9eaaa2]")}>Agentes habilitados</span><span class="text-sm font-semibold text-[#39473e]" ${themeAttrs("text-[#39473e]", "text-[#dce5de]")}>${skill.agents.length}</span></div></article>`).join("")}</div>`;
  }

  if (view === "contracts") {
    const rows = demoData.contracts.map((contract) => renderTableRow([
      `<span class="font-semibold text-[#3b4940]" ${themeAttrs("text-[#3b4940]", "text-[#dce5de]")}>${contract.id}</span>`,
      `<span class="text-xs text-[#58655c]" ${themeAttrs("text-[#58655c]", "text-[#b8c3bb]")}>${escapeHtml(contract.client)}</span>`,
      `<span class="text-xs font-semibold text-[#36443a]" ${themeAttrs("text-[#36443a]", "text-[#dce5de]")}>${escapeHtml(contract.agent)}</span>`,
      `<span class="text-xs text-[#68756c]" ${themeAttrs("text-[#68756c]", "text-[#b3beb6]")}>${contract.skills.length} skills</span>`,
      `<span class="whitespace-nowrap text-[11px] text-[#68756c]" ${themeAttrs("text-[#68756c]", "text-[#b3beb6]")}>${contract.start}<br>${contract.end}</span>`,
      `<span class="text-xs font-semibold text-[#29352e]" ${themeAttrs("text-[#29352e]", "text-[#e6ede7]")}>$${contract.total.toLocaleString("en-US")}</span>`,
    ], "contracts", contract, [["details", "Ver detalles"]])).join("");
    return `<div class="${cardClasses()} overflow-hidden">${renderTable(["Contrato", "Cliente", "Agente", "Habilidades", "Periodo", "Total pagado", ""], rows)}</div><p class="mt-3 text-[11px] text-[#89948c]" ${themeAttrs("text-[#89948c]", "text-[#9eaaa2]")}>${demoData.contracts.length} contratos · Importes de muestra en USD</p>`;
  }

  if (view === "errors") {
    const rows = demoData.errors.map((error) => renderTableRow([
      `<span class="font-mono text-[11px] font-semibold text-[#56645a]" ${themeAttrs("text-[#56645a]", "text-[#c1ccc4]")}>${error.id}</span>`,
      `<span class="whitespace-nowrap text-[11px] text-[#68756c]" ${themeAttrs("text-[#68756c]", "text-[#b3beb6]")}>${error.date}</span>`,
      `<span class="text-xs font-semibold text-[#36443a]" ${themeAttrs("text-[#36443a]", "text-[#dce5de]")}>${escapeHtml(error.agent)}</span>`,
      badge(`${error.type} · ${error.severity}`, error.severity === "Alta" ? "red" : error.severity === "Media" ? "amber" : "blue"),
      `<span class="max-w-[360px] text-xs leading-5 text-[#68756c]" ${themeAttrs("text-[#68756c]", "text-[#b3beb6]")}>${escapeHtml(error.description)}</span>`,
    ], "errors", error, [["details", "Ver detalles"], ["resolve", "Marcar como resuelto"]])).join("");
    return `<div class="${cardClasses()} overflow-hidden">${renderTable(["ID", "Fecha y hora", "Agente", "Tipo / gravedad", "Descripción", ""], rows)}</div><p class="mt-3 text-[11px] text-[#89948c]" ${themeAttrs("text-[#89948c]", "text-[#9eaaa2")}><span id="error-count">${demoData.errors.length}</span> registros · Datos estáticos de demostración</p>`;
  }
  return "";
}

function renderDetail(type, record) {
  const detailRows = (entries) => `<dl class="grid gap-4 sm:grid-cols-2">${entries.map(([label, value]) => `<div><dt class="text-[10px] font-semibold uppercase tracking-[0.1em] text-[#89948c]" ${themeAttrs("text-[#89948c]", "text-[#9eaaa2]")}>${label}</dt><dd class="mt-1.5 text-sm font-medium text-[#354239]" ${themeAttrs("text-[#354239]", "text-[#dce5de]")}>${escapeHtml(value)}</dd></div>`).join("")}</dl>`;
  if (type === "users") return detailRows([["Nombre", record.name], ["Correo electrónico", record.email], ["Empresa", record.company], ["Plan", record.plan], ["Estado", record.status], ["Cliente desde", record.created], ["Contratos", String(record.contracts)], ["Importe acumulado", record.spend]]);
  if (type === "agents") return `${detailRows([["Agente", record.name], ["Propietario", record.owner], ["Estado", record.status], ["Skills habilitadas", record.skills.join(", ")]])}<div class="mt-5"><h3 class="text-xs font-semibold text-[#435047]" ${themeAttrs("text-[#435047]", "text-[#dce5de]")}>Prompt del sistema</h3><p class="mt-2 rounded-md bg-[#f4f6f2] p-3 text-xs leading-5 text-[#5f6c62]" ${themeAttrs("bg-[#f4f6f2] text-[#5f6c62]", "bg-[#25312a] text-[#bac6bd]")}>${escapeHtml(record.prompt)}</p></div>`;
  if (type === "skills") return `${detailRows([["Habilidad", record.name], ["Categoría", record.category], ["Agentes habilitados", String(record.agents.length)]])}<p class="mt-5 text-xs leading-5 text-[#69766d]" ${themeAttrs("text-[#69766d]", "text-[#b1bdb4]")}>${escapeHtml(record.description)}</p><p class="mt-4 text-xs text-[#69766d]" ${themeAttrs("text-[#69766d]", "text-[#b1bdb4]")}>Agentes: ${record.agents.map(escapeHtml).join(", ")}</p>`;
  if (type === "contracts") return `${detailRows([["Contrato", record.id], ["Cliente", record.client], ["Agente", record.agent], ["Inicio", record.start], ["Finalización", record.end], ["Estado", record.status]])}<div class="mt-5 overflow-x-auto"><table class="w-full text-left text-xs"><thead><tr><th class="border-b border-[#e8ece7] py-2 font-semibold text-[#78847c]" ${themeAttrs("border-[#e8ece7] text-[#78847c]", "border-[#34423b] text-[#a4b0a7]")}>Skill contratada</th><th class="border-b border-[#e8ece7] py-2 text-right font-semibold text-[#78847c]" ${themeAttrs("border-[#e8ece7] text-[#78847c]", "border-[#34423b] text-[#a4b0a7]")}>Precio</th></tr></thead><tbody>${record.skills.map((skill) => `<tr><td class="border-b border-[#edf0ed] py-2 text-[#536057]" ${themeAttrs("border-[#edf0ed] text-[#536057]", "border-[#303d36] text-[#b8c3bb]")}>${escapeHtml(skill.name)}</td><td class="border-b border-[#edf0ed] py-2 text-right font-medium text-[#36443a]" ${themeAttrs("border-[#edf0ed] text-[#36443a]", "border-[#303d36] text-[#dce5de]")}>$${skill.price.toLocaleString("en-US")}</td></tr>`).join("")}<tr><td class="pt-3 font-semibold text-[#354239]" ${themeAttrs("text-[#354239]", "text-[#dce5de]")}>Total pagado</td><td class="pt-3 text-right font-semibold text-[#354239]" ${themeAttrs("text-[#354239]", "text-[#dce5de]")}>$${record.total.toLocaleString("en-US")}</td></tr></tbody></table></div>`;
  if (type === "errors") return `${detailRows([["Registro", record.id], ["Fecha y hora", record.date], ["Agente", record.agent], ["Tipo", record.type], ["Gravedad", record.severity]])}<div class="mt-5"><h3 class="text-xs font-semibold text-[#435047]" ${themeAttrs("text-[#435047]", "text-[#dce5de]")}>Traza del error</h3><pre class="mt-2 overflow-x-auto rounded-md bg-[#1d2822] p-4 text-[11px] leading-5 text-[#d2dfd5]">${escapeHtml(record.trace)}</pre></div>`;
  return "";
}

function initializeThemeAndNavigation() {
  const themeToggle = document.querySelector("#theme-toggle");
  const themeLabel = document.querySelector("#theme-label");
  const themeIcon = document.querySelector("#theme-icon");
  const sidebar = document.querySelector("#sidebar");
  const menuToggle = document.querySelector("#mobile-menu-toggle");
  const agentGrid = document.querySelector('#app[data-view="agents"] main section > .grid.gap-3');
  if (agentGrid) {
    agentGrid.classList.add("bg-[#f6f7f4]");
    agentGrid.setAttribute("data-light-classes", "bg-[#f6f7f4]");
    agentGrid.setAttribute("data-dark-classes", "bg-[#111a17]");
  }
  const cardSurfaces = document.querySelectorAll(
    '#app[data-view="agents"] main article, #app[data-view="skills"] main article, #app[data-view="users"] main .overflow-hidden, #app[data-view="contracts"] main .overflow-hidden, #app[data-view="errors"] main .overflow-hidden'
  );
  cardSurfaces.forEach((surface) => {
    surface.setAttribute("data-light-classes", "border-[#e4e9e2] bg-white");
    surface.setAttribute("data-dark-classes", "border-[#2b3932] bg-[#1a2520]");
  });
  const cardHeadings = document.querySelectorAll(
    '#app[data-view="agents"] main article h3, #app[data-view="skills"] main article h3'
  );
  cardHeadings.forEach((heading) => {
    heading.setAttribute("data-light-classes", "text-[#29352e]");
    heading.setAttribute("data-dark-classes", "text-[#e6ede7]");
  });
  const themeElements = document.querySelectorAll("[data-light-classes][data-dark-classes]");
  const desktopQuery = window.matchMedia("(min-width: 1024px)");

  const classListFrom = (value) => value.trim().split(/\s+/).filter(Boolean);
  const setTheme = (theme) => {
    const isDark = theme === "dark";
    document.documentElement.dataset.theme = theme;
    themeElements.forEach((element) => {
      element.classList.remove(...classListFrom(isDark ? element.dataset.lightClasses : element.dataset.darkClasses));
      element.classList.add(...classListFrom(isDark ? element.dataset.darkClasses : element.dataset.lightClasses));
    });
    themeToggle.setAttribute("aria-pressed", String(isDark));
    themeToggle.setAttribute("aria-label", isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro");
    themeLabel.textContent = isDark ? "Modo claro" : "Modo oscuro";
    themeIcon.innerHTML = isDark
      ? '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/>'
      : '<path d="M20.5 15.5A8.5 8.5 0 0 1 8.5 3.5 8.5 8.5 0 1 0 20.5 15.5Z"/>';
    try { localStorage.setItem("agenthub-theme", theme); } catch { /* Storage may be unavailable. */ }
  };
  const readTheme = () => {
    try { return localStorage.getItem("agenthub-theme") === "dark" ? "dark" : "light"; } catch { return "light"; }
  };
  const setSidebarOpen = (isOpen) => {
    const isDesktop = desktopQuery.matches;
    sidebar.classList.toggle("hidden", !isOpen && !isDesktop);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Cerrar navegación" : "Abrir navegación");
    sidebar.setAttribute("aria-hidden", String(!isOpen && !isDesktop));
  };

  themeToggle.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));
  menuToggle.addEventListener("click", () => setSidebarOpen(menuToggle.getAttribute("aria-expanded") !== "true"));
  document.addEventListener("click", (event) => {
    if (!desktopQuery.matches && menuToggle.getAttribute("aria-expanded") === "true" && !sidebar.contains(event.target) && !menuToggle.contains(event.target)) setSidebarOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") { setSidebarOpen(false); menuToggle.focus(); }
  });
  desktopQuery.addEventListener("change", () => setSidebarOpen(false));
  setTheme(readTheme());
  setSidebarOpen(false);
}

function initializeRecordInteractions() {
  const modal = document.querySelector("#record-modal");
  const modalTitle = document.querySelector("#modal-title");
  const modalContent = document.querySelector("#modal-content");
  const modalEyebrow = document.querySelector("#modal-eyebrow");
  let activeTrigger = null;

  const closeMenus = (except = null) => {
    document.querySelectorAll("[data-actions-trigger]").forEach((trigger) => {
      if (trigger === except) return;
      trigger.setAttribute("aria-expanded", "false");
      document.querySelector(`#menu-${CSS.escape(trigger.dataset.actionsTrigger)}`)?.classList.add("hidden");
    });
  };

  document.addEventListener("click", (event) => {
    const trigger = event.target.closest("[data-actions-trigger]");
    if (trigger) {
      const menu = document.querySelector(`#menu-${CSS.escape(trigger.dataset.actionsTrigger)}`);
      const shouldOpen = trigger.getAttribute("aria-expanded") !== "true";
      closeMenus(trigger);
      trigger.setAttribute("aria-expanded", String(shouldOpen));
      menu.classList.toggle("hidden", !shouldOpen);
      return;
    }

    const actionButton = event.target.closest("[data-row-action]");
    if (actionButton) {
      const { recordType, recordId, rowAction } = actionButton.dataset;
      const record = demoData[recordType]?.find((item) => item.id === recordId);
      closeMenus();
      if (!record) return;
      if (rowAction === "details" || rowAction === "configure") {
        activeTrigger = document.querySelector(`[data-actions-trigger="${recordType}-${recordId}"]`);
        const isConfig = rowAction === "configure";
        modalEyebrow.textContent = isConfig ? "CONFIGURACIÓN" : "DETALLE";
        modalTitle.textContent = isConfig ? `Configurar ${record.name}` : record.name || `${record.client} · ${record.id}`;
        modalContent.innerHTML = isConfig
          ? `<label for="agent-prompt" class="mb-2 block text-xs font-semibold text-[#435047]">Prompt del sistema</label><textarea id="agent-prompt" rows="8" class="w-full resize-y rounded-md border border-[#dfe5df] bg-white p-3 text-xs leading-5 text-[#354239] focus:border-[#8cad56] focus:outline-none focus:ring-2 focus:ring-[#dcebc6]" ${themeAttrs("border-[#dfe5df] bg-white text-[#354239]", "border-[#3b4941] bg-[#202c26] text-[#dce5de]")}>${escapeHtml(record.prompt)}</textarea><p class="mt-2 text-[10px] text-[#89948c]" ${themeAttrs("text-[#89948c]", "text-[#9eaaa2]")}>Edición local de demostración; no se guarda en un backend.</p>`
          : renderDetail(recordType, record);
        modal.showModal();
        modal.querySelector("[data-modal-close]").focus();
      } else if (rowAction === "delete") {
        const row = document.querySelector(`[data-record-row="${recordType}-${recordId}"]`);
        row?.remove();
        if (recordType === "users") demoData.users = demoData.users.filter((item) => item.id !== recordId);
        if (recordType === "agents") demoData.agents = demoData.agents.filter((item) => item.id !== recordId);
        if (recordType === "skills") demoData.skills = demoData.skills.filter((item) => item.id !== recordId);
      } else if (rowAction === "resolve") {
        const row = document.querySelector(`[data-record-row="${recordType}-${recordId}"]`);
        const typeCell = row?.children[3];
        if (typeCell) typeCell.innerHTML = `<span class="inline-flex items-center rounded-full bg-[#e7f2d7] px-2.5 py-1 text-[10px] font-semibold text-[#52712b]">Resuelto</span>`;
        demoData.errors = demoData.errors.filter((item) => item.id !== recordId);
        const count = document.querySelector("#error-count");
        if (count) count.textContent = String(demoData.errors.length);
      }
      return;
    }

    const closeButton = event.target.closest("[data-modal-close]");
    if (closeButton) { modal.close(); return; }
    if (modal.open && event.target === modal) {
      const bounds = modal.getBoundingClientRect();
      if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) modal.close();
    }
    if (!event.target.closest("[data-actions-trigger]") && !event.target.closest("[role=menu]")) closeMenus();
  });

  document.addEventListener("click", (event) => {
    const toggle = event.target.closest("[data-skills-toggle]");
    if (!toggle) return;
    const isOpen = toggle.getAttribute("aria-expanded") !== "true";
    const id = toggle.dataset.skillsToggle;
    const panel = document.querySelector(`#skills-${CSS.escape(id)}`);
    toggle.setAttribute("aria-expanded", String(isOpen));
    panel.setAttribute("aria-hidden", String(!isOpen));
    panel.classList.toggle("max-h-0", !isOpen);
    panel.classList.toggle("grid-rows-[0fr]", !isOpen);
    panel.classList.toggle("opacity-0", !isOpen);
    panel.classList.toggle("max-h-32", isOpen);
    panel.classList.toggle("grid-rows-[1fr]", isOpen);
    panel.classList.toggle("opacity-100", isOpen);
    document.querySelector(`[data-chevron="${CSS.escape(id)}"]`).classList.toggle("rotate-180", isOpen);
  });

  modal.addEventListener("close", () => activeTrigger?.focus());
}

document.addEventListener("DOMContentLoaded", () => {
  const app = document.querySelector("#app[data-view]");
  if (app) renderApp(app.dataset.view);
  initializeThemeAndNavigation();
  if (app) initializeRecordInteractions();

  document.querySelectorAll("[data-weekday-offset]").forEach((label) => {
    const date = new Date();
    date.setDate(date.getDate() - Number(label.dataset.weekdayOffset));
    label.textContent = new Intl.DateTimeFormat("es", { weekday: "short" }).format(date).replace(".", "");
  });
});
