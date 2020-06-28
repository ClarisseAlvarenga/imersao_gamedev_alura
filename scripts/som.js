class Som{
  constructor(som){
    this.som = som
    
  }

  toca(){
    this.som.setVolume(0.01);
    this.som.loop();
  
  }
  
  alteraMusica(musica){
      this.stop()
      this.som = musica

  }
  
  stop(){
    
    this.som.stop()
  
  }
  
  
  
  

}