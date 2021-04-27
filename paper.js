class Ball
{
    constructor(x, y, r)
    {
        var options={
            isStatic: false,
            restitution: 0.3,
            frictionAir: 0.01,
            density: 5
        

        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this.y, this.r/2, options)
        this.image = loadImage("Superhero-01.png");
        World.add(world, this.body);

    }
    display()
    {
        var paperpos=this.body.position;

        push()
        translate(paperpos.x, paperpos.y);
        ellipseMode(RADIUS)
        strokeWeight(3);
        fill(255, 0, 255)
        //ellipse(0, 0, this.r, this.r);
        imageMode(CENTER);
        image(this.image, 0, 0, 200, 200);
        pop()
    }
}
