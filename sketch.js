
function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(40);
    telaInicial = new TelaInicial();
    telaProximaFase = new TelaInicial();
    jogo = new Jogo();
    
      cenas ={
      jogo,
      telaInicial, 
    
    };
    jogo.setup()
     
    botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
    
}

function keyPressed(){
      jogo.keyPressed();

      if(key === 'Enter'){
          window.location.reload();
      }

    }



function draw() {
  cenas[cenaAtual].draw();
}






