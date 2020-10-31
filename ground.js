class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
     
      this.width = width;//order changed 
      this.height = height;//order changed 
      this.body = Bodies.rectangle(x,y,this.width,this.height,options);//order changed 
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };