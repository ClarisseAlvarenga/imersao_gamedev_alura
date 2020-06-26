
function numero_aleatorio(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function GameOver(){
    
    somDoJogo.stop()
    somDoGameOver.setVolume(0.03);
    somDoGameOver.play();
    personagem.criaEfeitoImagem(GRAY);
    //image(imagemGameOver, width - (width * 0.5)-320, height - (height * 0.5)-240, 640, 480);
    textAlign(CENTER)
    fill('#f56905')//laranja
    textFont(fonteTitulo)
    textSize(100)
    text('GAME OVER',width / 2, height/2-150 )
    textFont(fonteCreditos)
    textSize(50)
    fill('#fff')
    text("Pressione ENTER para tentar novamente.", width / 2, height/2+150 )   
    fimDeJogo = true;

}