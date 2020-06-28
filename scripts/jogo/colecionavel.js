class Colecionavel extends Animacao {
  constructor(matriz,imagem,x, variacaoY, largura,altura, larguraSprite, alturaSprite){
    super(matriz,imagem,x, variacaoY, largura,altura, larguraSprite, alturaSprite)
    
    this.y = height - this.altura - this.variacaoY;
    this.velocidade = 5;
  }
  
  
  

  move(){
    
    this.x = this.x - this.velocidade 
    
  }
  
  remove() {
    this.x = -100;
  }
  
  aparece(){
      this.x = width;
  }
}