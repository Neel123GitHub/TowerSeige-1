class Hexagon{
    constructor(x,y){
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
        }
        this.body=Bodies.circle(x,y,40,options);
        this.diameter=40;
        this.image=loadImage("hexy.png");
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position
        ellipseMode(CENTER);
        fill(255,192,203);
        stroke(255,192,203);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,70,70);
        circle(pos.x,pos.y,this.diameter);
    }
}