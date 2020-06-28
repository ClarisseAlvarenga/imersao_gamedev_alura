class Pontuacao {

  constructor(){    
    this.pontos = 0;   
  }
  
  exibe(){
    textAlign(RIGHT)
    fill('#fff')//laranja
    textSize(50);
    text(parseInt(this.pontos), width -30, 50)
  
  }
  
  
  adicionarPonto(){
    this.pontos = this.pontos + 0.2; 
     
  }
  
  adicionaBonus(pontos){
    this.pontos = this.pontos + pontos
  
  }
  
  
}


