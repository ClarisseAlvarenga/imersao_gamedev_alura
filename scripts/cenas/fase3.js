class Fase3 extends Jogo {

  constructor() {
    super()
    this.indice = 0;
    this.mapa = fita.mapa;
    this.indice_estrela = 0;
    this.mapaEstrela = fita.estrelas;
  }

  setup() {
    cenario = new CenarioParalaxe(arrayImagem3, 3);
    somDoJogo.setVolume(0.01);
    //somDoJogo.loop();
    fimDeJogo = false;
    vida =  new Vida(fita.configuracoes.total,fita.configuracoes.inicial);

//personagem
    personagem = new Personagem(matriz_marvin_andando, imagemPersonagem, 220, 80, 165, 205, 579, 763);
    //matriz,imagem,x,largura,altura, larguraSprite, alturaSprite
    
//inimigos
    inimigo1 = new Inimigo(matriz_inimigo, imagemGolem, width, 40, 165, 165, 450, 450, 10)
    inimigo2 = new Inimigo(matriz_inimigo, imagemInimigo2, width, 40, 165, 165, 450, 450, 11)
    inimigo3 = new Inimigo(matriz_inimigo, imagemInimigo3, width, 40, 165, 165, 450, 450, 9)
    zumbi = new Inimigo(matriz_zumbi, imagemZumbi, width * 2, 80, 250, 220, 430, 519, 6);
    zumbirosa = new Inimigo(matriz_zumbi_rosa, imagemZumbiRosa, width * 2, 80, 250, 220, 521,576, 8);
//inimigos voadores
    morcego = new Inimigo(matrixBat, imagemBat, width - 128, numero_aleatorio(250, 650), 128, 65, 128, 65, 12)
    fantasma = new Inimigo(matrixGhost, imagemFantasma, width - 128, numero_aleatorio(250, 650), 200, 50,241,1180, 12)
    
//array de inimigos

    inimigos.push(inimigo1);
    inimigos.push(zumbi);
    inimigos.push(morcego);
    inimigos.push(inimigo2);
    inimigos.push(inimigo3);
    inimigos.push(zumbirosa)
    inimigos.push(fantasma);
    
      
//colecionaveis
//matriz,imagem,x, variacaoY, largura,altura, larguraSprite, alturaSprite
  estrelaVermelha = new Colecionavel(matriz_estrela,imagemEstrelaVermelha,width, numero_aleatorio(250, 650), 50, 50,500,500)
  estrelaAzul = new Colecionavel(matriz_estrela,imagemEstrelaAzul,width, numero_aleatorio(250, 650), 50, 50,500,500)
  estrelaAmarela = new Colecionavel(matriz_estrela,imagemEstrelaAmarela,width, numero_aleatorio(250, 650), 50, 50,500,500)
  estrelaBranca = new Colecionavel(matriz_estrela,imagemEstrelaBranca,width, numero_aleatorio(250, 650), 50, 50,500,500)
    
    estrelas.push(estrelaVermelha);
    estrelas.push(estrelaAzul);
    estrelas.push(estrelaAmarela);
    estrelas.push(estrelaBranca);
    estrelas.push(estrelaAzul);

  }
}