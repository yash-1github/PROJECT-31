class drop { 
  constructor(x,y){

    this.body = bodies.circle(x, y , 4);
    World.add(wor , this.body);
  }
display(){ 
    fill("blue");
     ellipseMode(RADIUS);
     ellipse(this.body.position.x , this.body.position.y, 4);
}

}