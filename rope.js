class Rope {
    constructor(body1,point) {
      var options = {
        bodyA: body1,
        pointB: point,
        length: 350,
        stiffness: 1
      }
      this.rope = Matter.Constraint.create(options);
      this.point = point;
      World.add(world, this.rope);
    }
    display(){
      var pos =this.rope.bodyA.position;
      stroke("grey");
      strokeWeight(0)
      line(pos.x,pos.y,this.point.x,this.point.y)
     
    }
  };