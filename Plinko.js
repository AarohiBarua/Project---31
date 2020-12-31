class Plinko{
    constructor(x,y,width,height){
        var options = {
            restitution:0.8,
            friction:1.0,
            density:0.08
        }
        this.body = Bodies.circle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(5);
        stroke("yellow");
        ellipse(0,0,this.width,this.height);
        pop();
    }
}