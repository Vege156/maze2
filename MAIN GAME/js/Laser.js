class Laser{

    constructor(x, y, width, height){
        
        var options = {
            isStatic: false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);  
        this.width = width;
        this.height = height;
        
  
      }
      display(){
  
          rectMode(CENTER);
          var pos =this.body.position;
          fill("red");
          rect(pos.x, pos.y, this.width, this.height);
  
      }
  


}