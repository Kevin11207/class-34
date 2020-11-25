class Ball {
    constructor(x,y,r){
      var options={
        'restitution':0.8,
        'friction':1.0,
        'density':0.04
      }
      this.body=Bodies.rectangle(x,y,r,options);
      this.r=r;
      World.add(world,this.body)
    }
    display(){
      var pos=this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y)
      rotate(angle)
      rectMode(CENTER)
      fill("red");
      
      ellipse(0,0,this.r);
      pop();
    }
      
    }