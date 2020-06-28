
function numero_aleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function GameOver(){
    
    som.stop()
    somDoGameOver.setVolume(0.03);
    somDoGameOver.play();
    personagem.criaEfeitoImagem(GRAY);
    //image(imagemGameOver, width - (width * 0.5)-320, height - (height * 0.5)-240, 640, 480);
    textAlign(CENTER)
    fill('#f56905')//laranja
    textFont(fonteTitulo)
    textSize(100)
    text('GAME OVER',width / 2, height/2-150 )
    textSize(50)
    text("SCORE: " + parseInt(pontuacao.pontos),width / 2, height/2+25)
    fill('#fff')
    textFont(fonteCreditos)  
    text("Pressione ENTER para tentar novamente.", width / 2, height/2+150 )   
    fimDeJogo = true;

}

function criaMatrizSprite(numS,larSp,altSp){
  //cria a matriz de sprites
  //numS = número de sprites (linha e coluna) e número de sprites utilizáveis (no spritesheet pode conter quadrados em branco, como no caso do troll)
  let matriz = Array(numS[2]); 
    let aux = 0;
    for(let i=0;i<numS[1];i++){
      for(let j=0;j<numS[0];j++){ 
       matriz[aux] = [jlarSp,ialtSp];
        console.log(matriz[aux] + ' ' + matriz.length);
        aux++;
        if(aux>=numS[2]) {
          j = numS[0];
          i = numS[1];
        }
      }
    }
  return(matriz);
}


function mudaFase(){
  somFase.setVolume(0.3)
  somFase.play()


}


