class Jogo {

  constructor() {
    this.inimigoAtual = 0;


  }

  setup() {
    cenario = new CenarioParalaxe(arrayImagem, 3);
    somDoJogo.setVolume(0.1);
    //somDoJogo.loop();
    fimDeJogo = false;



    personagem = new Personagem(matriz_marvin_andando, imagemPersonagem, 220, 80, 165, 205, 579, 763);
    //matriz,imagem,x,largura,altura, larguraSprite, alturaSprite
    inimigo1 = new Inimigo(matriz_inimigo, imagemInimigo, width, 40, 165, 165, 450, 450, 10, 100)
    inimigo2 = new Inimigo(matriz_inimigo, imagemInimigo2, width, 40, 165, 165, 450, 450, 11, 100)
    inimigo3 = new Inimigo(matriz_inimigo, imagemInimigo3, width, 40, 165, 165, 450, 450, 9, 100)
    zumbi = new Inimigo(matriz_zumbi, imagemZumbi, width * 2, 80, 250, 220, 430, 519, 6, 100);
    zumbirosa = new Inimigo(matriz_zumbi_rosa, imagemZumbiRosa, width * 2, 80, 250, 220, 521,576, 8, 100);
    morcego = new Inimigo(matrixBat, imagemBat, width - 128, numero_aleatorio(350, 650), 128, 65, 128, 65, 12, 100)

    inimigos.push(inimigo1);
    inimigos.push(zumbi);
    inimigos.push(morcego);
    inimigos.push(inimigo2);
    inimigos.push(inimigo3);
    inimigos.push(zumbirosa);

  }


  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula()
      somDoPulo.play()

    }
  }
  
  draw() {
      cenario.exibe();
      cenario.move();

      pontuacao.exibe();
      pontuacao.adicionarPonto();

      personagem.exibe();
      personagem.aplicaGravidade();
  
      const inimigo = inimigos[this.inimigoAtual];
      const inimigoVisivel = inimigo.x < - inimigo.largura

      inimigo.exibe();
      inimigo.move();
  
      if (inimigoVisivel){
          this.inimigoAtual ++;
          if(this.inimigoAtual >inimigos.length -1){
            this.inimigoAtual = 0;
          }  
          inimigo.velocidade = parseInt(random(7,30));
          if(this.inimigoAtual == 2){
          inimigo.variacaoY = parseInt(random(250,650));
          }
      }
  

        if(personagem.estaColidindo(inimigo)) {
          console.log('colidiu');
          noLoop();  
          GameOver();

        }
      
   
}

}