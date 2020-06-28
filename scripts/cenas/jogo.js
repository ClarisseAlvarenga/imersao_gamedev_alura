class Jogo {

  constructor() {
    this.indice = 0;
    this.mapa = fita.mapa;
    this.indice_estrela = 0;
    this.mapaEstrela = fita.estrelas;
  }

  setup() {
    cenario = new CenarioParalaxe(arrayImagem, 3);
    som = new Som(somDoJogo)
    som.toca()
    fimDeJogo = false;
    vida =  new Vida(fita.configuracoes.total,fita.configuracoes.inicial);

//personagem
    personagem = new Personagem(matriz_marvin_andando, imagemPersonagem, 220, 80, 165, 205, 579, 763);
    //matriz,imagem,x,largura,altura, larguraSprite, alturaSprite
    
//inimigos
    inimigo1 = new Inimigo(matriz_inimigo, imagemInimigo, width, 40, 165, 165, 450, 450, 10)
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
  estrelaVermelha = new Colecionavel(matriz_estrela,imagemEstrelaVermelha,width, numero_aleatorio(250, 650), 60, 60,500,500)
  estrelaAzul = new Colecionavel(matriz_estrela,imagemEstrelaAzul,width, numero_aleatorio(250, 650), 75, 75,500,500)
  estrelaAmarela = new Colecionavel(matriz_estrela,imagemEstrelaAmarela,width, numero_aleatorio(250, 650), 50, 50,500,500)
  estrelaBranca = new Colecionavel(matriz_estrela,imagemEstrelaBranca,width, numero_aleatorio(250, 650), 65, 65,500,500)
    
    estrelas.push(estrelaVermelha);
    estrelas.push(estrelaAzul);
    estrelas.push(estrelaAmarela);
    estrelas.push(estrelaBranca);
    estrelas.push(estrelaAzul);

  }

  
  


  keyPressed(key) {
    if (key === 'ArrowUp') {
      personagem.pula()
      somDoPulo.play()

    } else if(key === 'Enter'){
      window.location.reload();}

  }
  
  draw() {
      cenario.exibe();
      cenario.move();
      vida.draw();

      pontuacao.exibe();
      pontuacao.adicionarPonto();

      personagem.exibe();
      personagem.aplicaGravidade();
    
      const linhaAtual = this.mapa[this.indice]
      const linhaEstrela = this.mapaEstrela[this.indice_estrela];
      const inimigo = inimigos[linhaAtual.inimigo];
      const estrela = estrelas[linhaEstrela.estrela];
      const inimigoVisivel = inimigo.x < - inimigo.largura
      const estrelaVisivel = estrela.x < - estrela.largura
      
      inimigo.velocidade = linhaAtual.velocidade //parseInt(random(7,30));
      estrela.variacaoY = linhaEstrela.altura

      inimigo.exibe();
      inimigo.move();
    
      estrela.exibe();
      estrela.move();
      
  
      if (inimigoVisivel){
          this.indice ++;
          inimigo.aparece();
          if(this.indice >this.mapa.length -1){
            this.indice = 0;
          }  
         
          if(this.indice === 2 || this.indice === 6){
          inimigo.variacaoY = parseInt(random(250,650));
          }
      }
    
      if (estrelaVisivel){
          this.indice_estrela++;
          estrela.aparece();
          if(this.indice_estrela >this.mapaEstrela.length -1){
            this.indice_estrela = 0;
          }  
      }
  

        if(personagem.estaColidindo(inimigo)) {
          console.log('colidiu');
          vida.perdeVida();
          personagem.matriz = matriz_marvin_vida_perdida;
          setTimeout(()=>{
              personagem.matriz = matriz_marvin_andando;
              },1000)
          personagem.ficaInvencivel(1000);
          if(vida.vidas == 0){
            
            vida.perdeVida();
            noLoop();  
            GameOver();            
             
             }

        }
    
              
        if(personagem.estaColidindo(estrela)){
            console.log('colidiu estrela');  
            estrela.remove()
            somColecionavel.setVolume(0.3);
            somColecionavel.play();
            pontuacao.adicionaBonus(50)
            if(estrela.imagem == imagemEstrelaVermelha){
              vida.ganhaVida()
              pontuacao.adicionaBonus(50)
            
            }else if(estrela.imagem == imagemEstrelaAzul){
              pontuacao.adicionaBonus(20)
              personagem.ficaInvencivel(5000);
              personagem.matriz = matriz_marvin_vida_perdida;
              setTimeout(()=>{
              personagem.matriz = matriz_marvin_andando;
              },4900)
                         
            }
          
          
          
        }
        
        if(pontuacao.pontos >1000){
          
          cenario.alteraCenario(arrayImagem2)
          this.mapa = fita.mapa2;
          this.mapaEstrela = fita.estrelas2
          
        
        
        } 

        if(pontuacao.pontos >2500){
          cenario.alteraCenario(arrayImagem3)
          this.mapa = fita.mapa3
          this.mapaEstrela = fita.estrelas

         
        }

        if(pontuacao.pontos >5000){
          cenario.alteraCenario(arrayImagem4)
          this.mapa = fita.mapa4
          this.mapaEstrela = fita.estrelas2

        }

        if(pontuacao.pontos >10000){
          cenario.alteraCenario(arrayImagem)
          this.mapa = fita.mapa5
          this.mapaEstrela = fita.estrelas

        
        }
    
         
   
}

}