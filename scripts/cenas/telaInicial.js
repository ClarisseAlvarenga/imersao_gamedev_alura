class TelaInicial{
  
  constructor(){} 
  setup(){}
  
  draw(){
    this._imagemDeFundo();
    this._texto();
    this._botao();
    
    //console.log('telaInicial')
  
  }
  
  _imagemDeFundo(){
    image(imagemTelaInicial, 0,0,width, height); 
  
  }
  
  _texto(){
    textSize(70);
    textFont(fonteTitulo)
    fill('#f56905')//laranja
    textAlign(CENTER)
    text('JACK PUMPKINHEAD', width/2, height/3);
    textFont(fonteCreditos)
    textSize(50);
    text('e o cemitério assombrado', width/2, (height/5*3)-50)
    textSize(40);
    fill('#fff');
    text('Para pular clique na seta pra cima / Para sair do jogo, tecle Enter', width/2, height/3*2);  
    text('poweredBy: Imersão GameDev - Alura', width/2, (height/3*3)-15);   
  
  
  }
  
  _botao(){
    botaoGerenciador.posicaoY = height/ 7* 5;
    botaoGerenciador.draw()  
    
  
  }
  
  
  
  
  
    
  
  
  }

//PoweredBy: Imersão GameDev Alura
//http://www.perametade.com/como-achar-assets-de-artes-imagens-e-sprites-para-games-2d/
//música baixada do SoundCloud https://soundcloud.com/sei_peridot/spook3
//sprites feitos com https://www.codeandweb.com/free-sprite-sheet-packer e https://www.piskelapp.com/
//sprite do jack: https://www.gameart2d.com/sprites.html
//sprite dos inimigos e cenários: https://craftpix.net/freebies