
//let imagemCenario;
let imagemCenario1;
let imagemCenario2;
let imagemCenario3;
let imagemCenario4;
let imagemCenario5;
let imagemCenario6;
let imagemCenario7;
let imagemCenario8;
let imagemCenario9;
let imagemPersonagem;
let imagemGameOver;
let cenario;
let personagem;
let somDoJogo;
let inimigo;
let zumbi;
let inimigoVoador;
let imagemInimigo;
let matriz_inimigo;
let matriz_marvin_andando;
let arrayImagem;
let matriz_zumbi;
let matrizInimigoVoador;
let pontuacao;

const inimigos = [];

function preload(){
  //imagemCenario = loadImage('imagens/cenario/cemiterio.png');
    imagemCenario1 = loadImage('imagens/cenario/1.png')
    imagemCenario2 = loadImage('imagens/cenario/2.png')
    imagemCenario3 = loadImage('imagens/cenario/3.png')
    imagemCenario4 = loadImage('imagens/cenario/4.png')
    imagemCenario5 = loadImage('imagens/cenario/5.png')
    imagemCenario6 = loadImage('imagens/cenario/6.png')
    imagemCenario7 = loadImage('imagens/cenario/7.png')
    imagemCenario8 = loadImage('imagens/cenario/8.png')
    imagemCenario9 = loadImage('imagens/cenario/9.png')
    imagemPersonagem = loadImage('imagens/personagem/jackwalk.png');
    imagemInimigo = loadImage('imagens/inimigos/inimigopulando.png');
    imagemInimigo2 = loadImage('imagens/inimigos/inimigopulando2.png');
    imagemInimigo3 = loadImage('imagens/inimigos/inimigopulando3.png');
    imagemBat = loadImage('imagens/inimigos/bat.png');
  
  
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemZumbi = loadImage('imagens/inimigos/zumbi1.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    somDoJogo = loadSound('sons/spookie.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');
    somDoGameOver = loadSound('sons/gameover.mp3');
    pontuacao = new Pontuacao();
    arrayImagem =[imagemCenario1, imagemCenario2, imagemCenario3, imagemCenario4,imagemCenario5,imagemCenario6,imagemCenario7,imagemCenario8,imagemCenario9]
  matriz_inimigo = [
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
  matriz_marvin_andando = [
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
  matriz_zumbi = [
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
  
matrizInimigoVoador = [
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


matrixBat = [
  [0, 0],
  [0, 113],
  [0, 219]
];

  
  
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  cenario = new CenarioParalaxe(arrayImagem,  3);
  frameRate(40);
  somDoJogo.loop();


  personagem = new Personagem(matriz_marvin_andando, imagemPersonagem, 220,80,165, 205, 579,763);
  //matriz,imagem,x,largura,altura, larguraSprite, alturaSprite
  inimigo = new Inimigo(matriz_inimigo, imagemInimigo,width,40,165,165, 450, 450, 10, 180)
  inimigo2 = new Inimigo(matriz_inimigo, imagemInimigo2,width,40,165,165, 450, 450, 10,5000)
  inimigo3 = new Inimigo(matriz_inimigo, imagemInimigo3,width,40,165,165, 450, 450, 10,1000)
  zumbi = new Inimigo(matriz_zumbi, imagemZumbi, width*2,80, 250,220, 430,519, 7, 2500);
  //inimigoVoador = new Inimigo(matrizInimigoVoador, imagemInimigoVoador, width - 80, 200, 100, 75, 200, 150, 10, 1500);
  morcego = new Inimigo(matrixBat, imagemBat, width - 128, numero_aleatorio(350,650), 128, 65, 128, 65, 20, 0)
  
  inimigos.push(inimigo);
  inimigos.push(zumbi);
  inimigos.push(morcego);
  inimigos.push(inimigo2);
  inimigos.push(inimigo3);
  //inimigos.push(inimigoVoador);
  
}

function keyPressed(){
  if( key === 'ArrowUp'){
    personagem.pula()
    somDoPulo.play() 
  }  
  else if(fimDeJogo && key === 'Enter'){
    window.location.reload();
  }

}



function draw() {
  cenario.exibe();
  cenario.move();
    
  pontuacao.exibe();
  pontuacao.adicionarPonto();
 
  personagem.exibe();
  personagem.aplicaGravidade();
  
  

  inimigos.forEach(inimigo => {
    inimigo.exibe();
    inimigo.move();
  
  if(personagem.estaColidindo(inimigo)) {
    console.log('colidiu');
    noLoop();  
    GameOver();

  }
})
 
  
}


function numero_aleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function GameOver(){
    somDoJogo.stop()
    somDoGameOver.play();
    image(imagemGameOver, width - (width * 0.5)-320, height - (height * 0.5)-240, 640, 480);
    textAlign(CENTER)
    text("Pressione ENTER para tentar novamente.", width / 2, height/2+150 )   
    fimDeJogo = true;

}

//música baixada do SoundCloud https://soundcloud.com/sei_peridot/spook3
//sprite feito com https://www.codeandweb.com/free-sprite-sheet-packer
//sprite dos inimigos https://craftpix.net/freebies/free-fallen-angel-chibi-2d-game-sprites/

  //background(255,200,255); - cor no plano de fundo
  //circle(mouseX,mouseY,50); - criando um círculo que acompanha o mouse

