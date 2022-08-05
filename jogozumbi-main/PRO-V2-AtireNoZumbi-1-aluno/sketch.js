var bg,bgImg;
var player, shooterImg, shooter_shooting;


function preload(){
  bgImg=loadImage("assets/bg.jpeg")
  shooterImg=loadImage("assets/shooter_2.png")
  shooter_shooting=loadImage("assets/shooter_3.png")
}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adicionando a imagem de fundo
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
  bg.addImage(bgImg)

  //criando o sprite do jogador
  player = createSprite(displayWidth-1150, displayHeight-300, 50, 50);
player.addImage(shooterImg)
player.scale=0.3
}

function draw() {
  background(0); 
 //movendo o jogador para cima e para baixo e tornando o jogo compatível com dispositivos móveis usando toques
  if(keyDown("UP_ARROW")||touches.length>0){
    player.y = player.y-30
  }
  if(keyDown("DOWN_ARROW")||touches.length>0){
    player.y = player.y+ 30
  }

  //solte balas e mude a imagem do atirador para a posição de tiro quando a tecla de espaço for pressionada
  if(keyWentDown("space")){
    player.addImage(shooter_shooting)
     
  }
  //o jogador volta à imagem original quando pararmos de pressionar a barra de espaço
  if(keyWentUp("space")){
    player.addImage(shooterImg)
     
  }
  drawSprites();

}
