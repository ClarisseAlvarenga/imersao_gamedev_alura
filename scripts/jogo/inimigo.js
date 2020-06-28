class Inimigo extends Animacao{
  
  constructor(matriz,imagem,x,variacaoY,largura,altura, larguraSprite, alturaSprite, velocidade){
    super(matriz,imagem,x,variacaoY,largura,altura, larguraSprite, alturaSprite)
    this.y = height - this.altura -this.variacaoY;
    
    this.velocidade = velocidade;
    this.x = width;

}

  move(){
    
    this.x = this.x - this.velocidade 
  
  
  }
  
  aparece(){
      this.x = width;
  }
  
  
  


}