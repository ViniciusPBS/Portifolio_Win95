function atualizarRelogio() {
  const agora = new Date();

  // Obtém horas, minutos e segundos
  let horas = agora.getHours();
  let minutos = agora.getMinutes();

  // Adiciona um zero à esquerda se for menor que 10
  horas = horas < 10 ? "0" + horas : horas;
  minutos = minutos < 10 ? "0" + minutos : minutos;

  // Atualiza os elementos HTML
  document.getElementById("hora").innerText = horas;
  document.getElementById("minuto").innerText = minutos;
}

/* Executa a função imediatamente e depois a cada segundo */
atualizarRelogio();
setInterval(atualizarRelogio, 1000);


/* codigo para mover as janelas */
const janelas = document.querySelectorAll(".janela");

let zIndexAtual = 1;

janelas.forEach((janela) => {
  const header = janela.querySelector("header");

  let offsetX = 0;
  let offsetY = 0;
  let isDragging = false;

  // quando clicar na janela → ativar
  janela.addEventListener("mousedown", () => {
    // remove ativa de todas
    janelas.forEach(j => j.classList.remove("ativa"));

    // ativa essa
    janela.classList.add("ativa");

    // traz pra frente
    zIndexAtual++;
    janela.style.zIndex = zIndexAtual;
  });

  // iniciar arrasto
  header.addEventListener("mousedown", (e) => {
    isDragging = true;

    offsetX = e.clientX - janela.offsetLeft;
    offsetY = e.clientY - janela.offsetTop;
  });

  // mover
  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      janela.style.position = "absolute";
      janela.style.left = (e.clientX - offsetX) + "px";
      janela.style.top = (e.clientY - offsetY) + "px";
    }
  });

  // parar
  document.addEventListener("mouseup", () => {
    isDragging = false;
  });
});


/* abas abertas na taskbar */
const taskbar = document.getElementById("apps-abertos");

// abrir app pelo ícone
document.querySelectorAll(".iconImg").forEach(icon => {
  icon.addEventListener("click", () => {
    const id = icon.dataset.app;
    const janela = document.getElementById(id);

    if (!janela) return;

    janela.style.display = "block";
    ativarJanela(janela);
    adicionarNaTaskbar(janela, id);
  });
});

// ativar janela
function ativarJanela(janela) {
  document.querySelectorAll(".janela").forEach(j => j.classList.remove("ativa"));
  janela.classList.add("ativa");

  zIndexAtual++;
  janela.style.zIndex = zIndexAtual;

  atualizarTaskbar(janela.id);
}

// adicionar na taskbar
function adicionarNaTaskbar(janela, id) {
  if (document.querySelector(`[data-task="${id}"]`)) return;

  const btn = document.createElement("div");
  btn.classList.add("app-task");
  btn.innerText = id;
  btn.dataset.task = id;

  btn.addEventListener("click", () => {
    if (janela.style.display === "block") {
      janela.style.display = "none";
      ativarJanela(janela);
    } if (janela.style.display === "none") {
      janela.style.display = "block";
    }
  });

  taskbar.appendChild(btn);
}


// atualizar visual da taskbar
function atualizarTaskbar(idAtivo) {
  document.querySelectorAll(".app-task").forEach(btn => {
    btn.classList.remove("ativo");
    if (btn.dataset.task === idAtivo) {
      btn.classList.add("ativo");
    }
  });
}

/* remova da taskbar */
function removerDaTaskbar(id) {
  const btn = document.querySelector(`[data-task="${id}"]`);
  if (btn) btn.remove();
}


/* campo minado */

const game = document.getElementById("game");

const rows = 8;
const cols = 8;
const minesCount = 10;

let grid = [];

// criar grid
function createGrid() {
  grid = [];
  game.innerHTML = "";

  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < cols; c++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");

      cell.dataset.row = r;
      cell.dataset.col = c;

      game.appendChild(cell);

      row.push({
        element: cell,
        mine: false,
        revealed: false
      });

      cell.addEventListener("click", () => revealCell(r, c));
    }
    grid.push(row);
  }

  placeMines();
}

/* botoes da janela */
document.querySelectorAll(".janela").forEach(janela => {
  const botoes = janela.querySelectorAll(".botoes");

  const btnMin = botoes[0];
  const btnMax = botoes[1];
  const btnClose = botoes[botoes.length - 1];

  // minimizar
  btnMin?.addEventListener("click", (e) => {
    e.stopPropagation();
    janela.style.display = "none";
  });

  // fechar
  btnClose?.addEventListener("click", (e) => {
    e.stopPropagation();

    janela.style.display = "none";

    // remove da taskbar
    removerDaTaskbar(janela.id);
  });

  // maximizar
  let maximizado = false;

  btnMax?.addEventListener("click", (e) => {
    e.stopPropagation();

    if (!maximizado) {
      janela.dataset.oldTop = janela.style.top;
      janela.dataset.oldLeft = janela.style.left;
      janela.dataset.oldWidth = janela.style.width;
      janela.dataset.oldHeight = janela.style.height;

      janela.style.top = "0";
      janela.style.left = "0";
      janela.style.width = "100%";
      janela.style.height = "calc(100% - 50px)";

      maximizado = true;
    } else {
      janela.style.top = janela.dataset.oldTop;
      janela.style.left = janela.dataset.oldLeft;
      janela.style.width = janela.dataset.oldWidth;
      janela.style.height = janela.dataset.oldHeight;

      maximizado = false;
    }
  });
});

/* campo minado */
function placeMines() {
  let placed = 0;

  while (placed < minesCount) {
    let r = Math.floor(Math.random() * rows);
    let c = Math.floor(Math.random() * cols);

    if (!grid[r][c].mine) {
      grid[r][c].mine = true;
      placed++;
    }
  }
}

// contar minas ao redor
function countMines(r, c) {
  let count = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      let nr = r + i;
      let nc = c + j;

      if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
        if (grid[nr][nc].mine) count++;
      }
    }
  }

  return count;
}

// revelar célula
function revealCell(r, c) {
  let cell = grid[r][c];

  if (cell.revealed) return;

  cell.revealed = true;
  cell.element.classList.add("revealed");

  if (cell.mine) {
    cell.element.textContent = "💣";
    cell.element.classList.add("mine");
    alert("💥 Game Over!");
    createGrid();
    return;
  }

  let count = countMines(r, c);

  if (count > 0) {
    cell.element.textContent = count;
  } else {
    // abrir área vazia
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        let nr = r + i;
        let nc = c + j;

        if (nr >= 0 && nr < rows && nc >= 0 && nc < cols) {
          revealCell(nr, nc);
        }
      }
    }
  }
}

// iniciar jogo
createGrid();
