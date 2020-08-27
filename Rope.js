class Rope{
    constructor(bodyA, bodyB,offsetX,offsetY){

        this.offsetX=offsetX
        this.offsetY=offsetY

        var options = {
            bodyA: body1,
            pointB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
           // stiffness: 0.004,
           // length: 10
        }

       // this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

    // Attach(body){
       // this.sling.bodyA=body;
    //}

    //fly(){
        //this.sling.bodyA=null;
    //}

    display(){
       var pointA=this.rope.bodyA.position;
       var pointB=this.rope.bodyB.position;

       strokeWeight(5);
       fill(255);


       var Anchor1X=pointA.x
       var Anchor1Y=pointA.y

       var Anchor2X=pointB.x+this.offsetX
       var Anchor2Y=pointB.y+this.offsetY

       line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);


    }  
}