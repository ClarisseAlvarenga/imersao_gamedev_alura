class Vida {
  
    constructor(total, inicial){
      this.total = total;
      this.inicial = inicial;
      this.vidas = this.inicial;
      
      this.xInicial = 20;
      this.y = 20;
      
      
      this.largura = 70;
      this.altura = 70;
    
    }
  
    draw(){
      for(let i = 0; i < this.vidas; i++) {
        const margem = i*70;
        const posicao = this.xInicial * (1+ i);
        image(imagemVida, posicao + margem,this.y, this.largura, this.altura);   
        
        
      
      }
           
    }
  
    ganhaVida(){
      if(this.vidas <= this.total){
        this.vidas++      
      
      }
    }
    
    perdeVida(){
      
      if (this.vidas > 1){
        somColisao.play()      
      }
      
      this.vidas--;   
    
    }
      
      
    
    

  


}