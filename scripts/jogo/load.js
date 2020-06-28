function preload(){
  
  //CARTUCHO
  
    fita = loadJSON('fita/fita.json')
  
  //IMAGENS CENARIO
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
    imagemVida = loadImage('imagens/assets/token_vida.png')
    imagemGameOver = loadImage('imagens/assets/game-over.png');
    //fase2
    imagemCenarioa  = loadImage('imagens/cenario/cenario2/1.png');
    imagemCenarioa1 = loadImage('imagens/cenario/cenario2/2.png');
    imagemCenarioa2 = loadImage('imagens/cenario/cenario2/3.png');
    imagemCenarioa3 = loadImage('imagens/cenario/cenario2/4.png');
    imagemCenarioa4 = loadImage('imagens/cenario/cenario2/5.png');
    imagemCenarioa5 = loadImage('imagens/cenario/cenario2/5.png');
    imagemCenarioa6 = loadImage('imagens/cenario/cenario2/6.png');
    //fase3 
    imagemCenariob  = loadImage('imagens/cenario/cenario3/1.png');
    imagemCenariob1 = loadImage('imagens/cenario/cenario3/2.png');
    imagemCenariob2 = loadImage('imagens/cenario/cenario3/3.png');
    imagemCenariob3 = loadImage('imagens/cenario/cenario3/4.png');
    imagemCenariob4 = loadImage('imagens/cenario/cenario3/5.png');
    imagemCenariob5 = loadImage('imagens/cenario/cenario3/6.png');
    imagemCenariob6 = loadImage('imagens/cenario/cenario3/7.png');
    //fase4
    imagemCenarioc  = loadImage('imagens/cenario/cenario4/1.png');
    imagemCenarioc1 = loadImage('imagens/cenario/cenario4/2.png');
    imagemCenarioc2 = loadImage('imagens/cenario/cenario4/3.png');
    imagemCenarioc3 = loadImage('imagens/cenario/cenario4/4.png');
    imagemCenarioc4 = loadImage('imagens/cenario/cenario4/5.png');
    imagemCenarioc5 = loadImage('imagens/cenario/cenario4/6.png');
    imagemCenarioc6 = loadImage('imagens/cenario/cenario4/7.png');
  
    
  
  //IMAGENS SPRITES
    imagemPersonagem = loadImage('imagens/personagem/jackwalk.png');
    imagemFantasma = loadImage('imagens/inimigos/ghost.png')
    imagemInimigo = loadImage('imagens/inimigos/inimigopulando.png');
    imagemInimigo2 = loadImage('imagens/inimigos/inimigopulando2.png');
    imagemInimigo3 = loadImage('imagens/inimigos/inimigopulando3.png');
    imagemBat = loadImage('imagens/inimigos/bat.png');
    imagemMoeda = loadImage('imagens/assets/moedabronze.png')
    imagemInimigoVoador = loadImage('imagens/inimigos/gotinha-voadora.png');
    imagemZumbi = loadImage('imagens/inimigos/zumbi1.png');
    imagemZumbiRosa = loadImage('imagens/inimigos/zumbirosa.png');
    imagemGolem = loadImage('imagens/inimigos/golem1.png');

  
  //IMAGENS COLECIONÁVEIS
  
    imagemEstrelaVermelha = loadImage('imagens/assets/estrela1.png');
    imagemEstrelaBranca = loadImage('imagens/assets/estrela2.png');
    imagemEstrelaAzul = loadImage('imagens/assets/estrela3.png');
    imagemEstrelaAmarela = loadImage('imagens/assets/estrela4.png');

  
  
  //SONS
    somDoJogo = loadSound('sons/spookie.mp3');
    somDoJogo2 = loadSound('sons/Carnival_Dark.mp3');
    somDoJogo3 = loadSound('sons/Spook4.mp3');
    somDoJogo4 = loadSound('sons/Gothic_Dark.mp3');
    somDoPulo = loadSound('sons/somPulo.mp3');
    somDoGameOver = loadSound('sons/gameover.mp3');
    somColisao = loadSound('sons/Orchestra-hit.mp3');
    somColecionavel = loadSound('sons/pega_colecionavel.mp3')
    somFase = loadSound('sons/Game-level-up.mp3')
  
  
  
    pontuacao = new Pontuacao();
  //cenário fase1
    arrayImagem =[imagemCenario1,
                  imagemCenario2,
                  imagemCenario3,
                  imagemCenario4,
                  imagemCenario5,
                  imagemCenario6,
                  imagemCenario7,
                  imagemCenario8,
                  imagemCenario9]
  //cenário fase 2
    arrayImagem2 = [imagemCenarioa,
                    imagemCenarioa,
                    imagemCenarioa,
                    imagemCenarioa1, 
                    imagemCenarioa2, 
                    imagemCenarioa3, 
                    imagemCenarioa4,
                    imagemCenarioa5,
                    imagemCenarioa6]
  //cenario fase 3
      arrayImagem3 = [imagemCenariob,
                      imagemCenariob,
                      imagemCenariob,
                      imagemCenariob1,
                      imagemCenariob2, 
                      imagemCenariob3, 
                      imagemCenariob4, 
                      imagemCenariob5,
                      imagemCenariob6]
  //cenario fase 4
      arrayImagem4 = [imagemCenarioc,
                      imagemCenarioc,
                      imagemCenarioc,
                      imagemCenarioc1,
                      imagemCenarioc2, 
                      imagemCenarioc3, 
                      imagemCenarioc4, 
                      imagemCenarioc5,
                      imagemCenarioc6]
  
  
    fonteTitulo = loadFont('fontes/Frijole-Regular.ttf');// Frijole
    fonteSubtitulo = loadFont('fontes/HennyPenny-Regular.ttf');//HennyPenny
    fonteGameOver = loadFont('fontes/FingerPaint-Regular.ttf');//Akronim
    fonteCreditos = loadFont('fontes/Akronim-Regular.ttf');//FingerPaint
    
 
  
} 