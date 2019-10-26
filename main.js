var canvas = document.getElementsByTagName("canvas")[0];
canvas.width = innerWidth;
canvas.height = innerHeight;
var c = canvas.getContext('2d');

var initDistance = innerHeight/8;
var distance = initDistance;
var size = innerHeight/4;
c.fillStyle = "rgba(200,0,0,0.2)";

class Ball
{
  constructor(angle)
  {
    this.angle = angle;
    this.x = Math.cos(this.angle/180*Math.PI)*distance+canvas.width/2;
    this.y = Math.sin(this.angle/180*Math.PI)*distance+canvas.height/2;
  }

  update()
  {
    this.x = Math.cos(this.angle/180*Math.PI)*distance+canvas.width/2;
    this.y = Math.sin(this.angle/180*Math.PI)*distance+canvas.height/2;
  }

  draw()
  {
    c.beginPath();
    c.arc(this.x,this.y,size,0,Math.PI*2);
    //c.stroke();
    c.fill();
  }
}

var ballz = [];
for(let i=0;i<8;i++)
{
  ballz.push(new Ball((360/8)*i));
}

var timeout = 0;
var cycle = 3;
function animate()
{
  c.clearRect(0,0,canvas.width,canvas.height);
  distance = (Math.sin((cycle+90)/180*Math.PI)+1)*initDistance/2;
  if(timeout<=0)cycle+=3;
  if(cycle%180==0 && timeout<=0)timeout=70;
  timeout--;

  for(let i=0;i<ballz.length;i++)
  {
    ballz[i].update();
    ballz[i].draw();
  }
  window.requestAnimationFrame(animate);
}
animate();
