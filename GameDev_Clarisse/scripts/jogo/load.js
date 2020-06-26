function preload(){
    imagemTelaInicial = loadImage('imagens/assets/telainicial.png')
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
    imagemMoeda = loadImage('imagens/assets/moedabronze.png')
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemZumbi = loadImage('imagens/inimigos/zumbi1.png');
    imagemZumbiRosa = loadImage('imagens/inimigos/zumbirosa.png');
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    somDoJogo = loadSound('sons/spookie.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');
    somDoGameOver = loadSound('sons/gameover.mp3');
  
  
    pontuacao = new Pontuacao();
    arrayImagem =[imagemCenario1, imagemCenario2, imagemCenario3, imagemCenario4,imagemCenario5,imagemCenario6,imagemCenario7,imagemCenario8,imagemCenario9]
  
    fonteTitulo = loadFont('fontes/Frijole-Regular.ttf');// Frijole
    fonteSubtitulo = loadFont('fontes/HennyPenny-Regular.ttf');//HennyPenny
    fonteGameOver = loadFont('fontes/FingerPaint-Regular.ttf');//Akronim
    fonteCreditos = loadFont('fontes/Akronim-Regular.ttf');//FingerPaint
    
 
  
} 