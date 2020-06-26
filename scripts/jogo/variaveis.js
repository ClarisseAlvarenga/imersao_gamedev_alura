//Imagens Cenário
let imagemCenario;
let imagemCenario1;
let imagemCenario2;
let imagemCenario3;
let imagemCenario4;
let imagemCenario5;
let imagemCenario6;
let imagemCenario7;
let imagemCenario8;
let imagemCenario9;
let imagemTelaInicial;

//Imagens Sprites
let imagemPersonagem;
let imagemInimigo;
let imagemInimigo2;
let imagemInimigo3;
let imagemInimigoVoador;
let imagemBat;
let imagemMoeda; 
let imagemZumbi;
let imagemZumbiRosa

//Imagens dinâmicas
let imagemGameOver;


//Sons

let somDoJogo; 
let somDoPulo;
let somDoGameOver; 

//Fontes
let fonteTitulo;// Frijole
let fonteSubtitulo;//HennyPenny
let fonteGameOver;//Akronim
let fonteCreditos;//FingerPaint


//variáveis de jogo
let jogo;
let telaInicial;
let cenario;
let personagem;
let inimigo;
let inimigo1;
let inimigo2;
let inimigo3;
let morcego;
let zumbi;
let zumbirosa
let inimigoVoador;
let arrayImagem;
let pontuacao;
let fimDeJogo;
let botaoGerenciador;

let cenaAtual = 'telaInicial';
let cenas;

const inimigos = [];


//Matrizes

const matriz_inimigo = [
      [0, 0],
      [450, 0],
      [900, 0],
      [0, 450],
      [450, 450],
      [900, 450],
      [0, 900],
      [450, 900],
      [900, 900],
      [0, 1350],
      [450, 1350],
      [900, 1350],
    ]; 

const matriz_marvin_andando = [
  [1,1],
  [582,1],
  [1163,1],
  [1,766],
  [582,766],
  [1163,766],
  [1744,1],
  [1744,766],
  [1,1531],
  [582,1531]
];
const matriz_zumbi = [
  [0,0],
  [430,0],
  [860,0],
  [1290,0],
  [1720,0],
  [0,519],
  [430,519],
  [860,519],
  [1290,519],
  [1720,519],
  [0,1038],
  [430,1038],
  [860,1038],
  [1290,1038],
  [1720,1038],
  [0,1557],
  [430,1557],
  [860,1557],


];

const matriz_zumbi_rosa = [
  [0,0],
  [521,0],
  [1042,0],
  [1563,0],
  [0,576],
  [521,576],
  [1042,576],
  [1563,576],
  [0,1152],
  [521,1152],
  [1042,1152],
  [1563,1152],
  [0,1728],
  [521,1728],
  [1042,1728],
  [1563,1728],
  [0,2304],
  [521,2304],


];
  
const matrizInimigoVoador = [
  [0,0],
  [200, 0],
  [400, 0],
  [0, 150],
  [200, 150],
  [400, 150],
  [0, 300],
  [200, 300],
  [400, 300],
  [0, 450],
  [200, 450],
  [400, 450],
  [0, 600],
  [200, 600],
  [400, 600],
  [0, 750],
];


const matrixBat = [
  [0, 0],
  [0, 113],
  [0, 219]
];
  
const matriz_moeda = [
 [1,1],
 [562,1],
 [1067,1],
 [1,568],
 [265,568],
 [375,568],
 [639,568],
 [1497,1],
 [1069,568],
 [1,1134],

]

let matriz_bruxinha = [
      [0, 0],
      [220, 0],
      [440, 0],
      [660, 0],
      [0, 270],
      [220, 270],
      [440, 270],
      [660, 270],
      [0, 540],
      [220, 540],
      [440, 540],
      [660, 540],
      [0, 810],
      [220, 810],
      [440, 810],
      [660, 810],
    ];

//let x_sprite_bruxinha = 220;
//let y_sprite_bruxinha = 270;
const matriz_marvin_correndo = [
  [1,1],
  [582,1],
  [1163,1],
  [1,766],
  [582,766],
  [1163,766],
  [1744,1],
  [1744,766]];


const matrixSkeleton = [
  [0, 0],
  [235, 0],
  [500, 0],
  [770, 0]
];

const matrixGhost = [
  [0, 0],
  [241, 0],
  [468, 0],
  [709, 0]
];