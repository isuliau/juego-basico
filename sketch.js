
var hello
function setup() {
  createCanvas(500,500);
  hello = createSprite(200,200,30,30)
}

function draw()
{
  background(30);
drawSprites();

if (keyDown(DOWN_ARROW)){
hello.y = hello.y + 5;
}
if (keyDown(UP_ARROW)){
hello.y = hello.y - 5;
}
if (keyDown(LEFT_ARROW)){
  hello.x = hello.x - 5;
}
if (keyDown(RIGHT_ARROW)){
  hello.x = hello.x + 5;
}
}