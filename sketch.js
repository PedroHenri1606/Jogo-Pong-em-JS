//Variaveis da Bolinha
let xBolinha= 300;
let yBolinha= 200;
let diametroBolinha=20;
let raio = diametroBolinha / 2;

//Velocidade da Bolinha
let velocidadeXBolinha= 6;
let velocidadeYBolinha= 6;

//Variaveis do Canvas
let largura = 600;
let altura = 400;

//Variaveis da Raquete Esquerda
let xRaqueteEsquerda = 10;
let yRaqueteEsquerda = 150;
let larguraRaqueteEsquerda = 10;
let alturaRaqueteEsquerda = 80;

//Variaveis da Raquete Direita
let xRaqueteDireita = 580;
let yRaqueteDireita = 150;
let larguraRaqueteDireita = 10;
let alturaRaqueteDireita = 80;
let velocidadeYRaqueteDireita ;

//Variaveis dos Pontos do Placar
let meusPontos = 0;
let oponentePontos = 0;

function setup() {
  createCanvas(largura, altura);
}

function draw() {
  background(0);
  criaRaquetes();
  movimentaRaqueteEsquerda();
  criaBolinha();
  movimentacaoBolinha();
  verificaColisaoBolinha();
  verificaColisaoRaqueteEsquerda();
  movimentaRaqueteDireita();
  verificaColisaoRaqueteDireita();
  placar();
  marcaPonto();
}

function criaBolinha(){
  circle(xBolinha,yBolinha,diametroBolinha)
}

function criaRaquetes(){
  rect(xRaqueteEsquerda,yRaqueteEsquerda,larguraRaqueteEsquerda,alturaRaqueteEsquerda);
  rect(xRaqueteDireita,yRaqueteDireita,larguraRaqueteDireita,alturaRaqueteDireita);

}

function movimentaRaqueteEsquerda(){
   
  if(keyIsDown(UP_ARROW)){
    yRaqueteEsquerda-=10;
  }
  if(keyIsDown(DOWN_ARROW)){
    yRaqueteEsquerda+=10;
  }
  
   if(yRaqueteEsquerda < 0){
    yRaqueteEsquerda = 0;
  }
   if(yRaqueteEsquerda > 320){
     yRaqueteEsquerda = 320;
   }
}

function movimentacaoBolinha(){
    xBolinha+= velocidadeXBolinha;
    yBolinha+= velocidadeYBolinha;
}

function verificaColisaoBolinha(){
  if(xBolinha + raio > largura || xBolinha - raio < 0){
    velocidadeXBolinha *=-1;
  } 
  
  if(yBolinha + raio > altura || yBolinha - raio < 0){
    velocidadeYBolinha *=-1;
  }
}

function verificaColisaoRaqueteEsquerda(){
  if(xBolinha - raio < xRaqueteEsquerda + larguraRaqueteEsquerda && 
     yBolinha - raio < yRaqueteEsquerda + alturaRaqueteEsquerda && 
     yBolinha + raio > yRaqueteEsquerda ){
    velocidadeXBolinha *=-1;
  } 
}

function movimentaRaqueteDireita(){
  velocidadeYRaqueteDireita = yBolinha - yRaqueteDireita - larguraRaqueteDireita / 3 - 50;
  yRaqueteDireita += velocidadeYRaqueteDireita;
}

function verificaColisaoRaqueteDireita(){
  if(xBolinha + raio > xRaqueteDireita &&
     yBolinha + raio > yRaqueteDireita &&
     yBolinha - raio < yRaqueteDireita + alturaRaqueteDireita
     ){
    velocidadeXBolinha *=-1;
  }
}

function placar(){
  stroke(255)
  textAlign(CENTER)
  textSize(16);
  fill(color(255,140,0))  
  rect(150,10,40,20);
  fill(255);
  text(meusPontos, 170, 26);
  fill(color(255,140,0))  
  rect(450,10,40,20);
  fill(255);
  stroke(0);
  text(oponentePontos, 470, 26)
}

function marcaPonto(){
  if(xBolinha > 590){
    meusPontos+=1;
  }
  if(xBolinha < 10){
    oponentePontos+=1;
  }
}

