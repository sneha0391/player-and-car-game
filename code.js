var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["f7648d63-b4ca-4511-af98-8a6201d17ee3"],"propsByKey":{"f7648d63-b4ca-4511-af98-8a6201d17ee3":{"name":"car","sourceUrl":"assets/api/v1/animation-library/gamelab/RjRxbyU7.RQ5JiZhNMQ.7IoXGd_k_5.J/category_vehicles/boxcar_07.png","frameSize":{"x":400,"y":288},"frameCount":1,"looping":true,"frameDelay":45,"version":"RjRxbyU7.RQ5JiZhNMQ.7IoXGd_k_5.J","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":288},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RjRxbyU7.RQ5JiZhNMQ.7IoXGd_k_5.J/category_vehicles/boxcar_07.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//all boject

var life = 0;
var player;
var car1,car2,car3,car4,car5;
var boundry1; 
var boundry2;

//object instroduction 
var boundry1 = createSprite(190,120,420,3);
var boundry2 = createSprite(190,240,420,3);

var player = createSprite(4,177,20,20);
player.shapeColor = "blue";
player.velocityX = 0;
player.velocityY = 0;

var car1 = createSprite(70,153,15,70);
car1.shapeColor = "green";
var car2 = createSprite(129,205,15,70);
car2.shapeColor = "green";
var car3 = createSprite(190,155,15,70);
car3.shapeColor = "green";
var car4 = createSprite(248,205,15,70);
car4.shapeColor = "green";
var car5 =  createSprite(292,155,15,70);
car5.shapeColor = "green";

//function draw
function draw() {
  background("lavender");
  //createEdgeSprite
  createEdgeSprites();
  //all text and colour
  text("Lives: " + life,200,100);
  textSize(100);
  fill("black");
  strokeWeight(0);
  fill("yellow");
  rect(1,119,50,120);
  fill("pink");
  rect(352,118,50,120);
  
  //movement to object
  if (keyDown("right")) {
    player.x = player.x + 2;
  }
  if (keyDown("left")) {
    player.x = player.x - 2;
  }
  if (keyDown("down")) {
    player.y = player.y + 2;
  }
  if (keyDown("up")) {
    player.y = player.y - 2;
  }
if(
     player.isTouching(car1)||
     player.isTouching(car2)||
     player.isTouching(car3)||
     player.isTouching(car4))
  {
     player.x = 20;
     player.y = 190;
     life = life + 1;
  }
  
  
  
  drawSprites();
  ;
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
