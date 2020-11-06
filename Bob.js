class Bob{
    constructor(x,y,radius,options){
        var options = {
            isStatic:false,
            restitution:1,
            density:0.8,
            friction:0
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.x = x;
        this.y = y;
        this.radius = 20;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}