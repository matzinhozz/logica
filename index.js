let heroi = ["Ashe", "Lucian", "Kaisa", "Jynx", "Caitlyn", "Ziggs", "Yasuo", "Tristana", "Leona", "Pyke"];
let xp = [900, 1002, 2002, 6002, 7002, 8002, 9002, 11000];
let elo = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

// Função para escolher um herói aleatório
function escolherHeroi() {
  let numeroAleatorioHeroi = Math.floor(Math.random() * heroi.length);
  return heroi[numeroAleatorioHeroi];
}

// Função para gerar um XP aleatório com base no elo
function gerarXP(elo) {
  switch (elo) {
    case "Ferro":
      return 900;
    case "Bronze":
      return 2002;
    case "Prata":
      return 7002;
    case "Ouro":
      return 8002;
    case "Platina":
      return 9002;
    case "Ascendente":
      return 1100;
    default:
      return 0; // Elo não encontrado
  }
}

// Escolher um elo aleatório
let numeroAleatorioElo = Math.floor(Math.random() * elo.length);
let eloAleatorio = elo[numeroAleatorioElo];

// Gerar XP com base no elo
let xpAleatorio = gerarXP(eloAleatorio);

// Escolher um herói aleatório
let heroiAleatorio = escolherHeroi();

console.log("você é um(a) " + heroiAleatorio + "com a experiência " + xpAleatorio + "no elo " + eloAleatorio);
