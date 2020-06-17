class Log{
    constructor(x,y,w,h,angle){
            var options={
                isStatic : true
            }
            this.body = Bodies.rectangle(x,y,w,h,angle,options);
            this.width = w;
            this.height = h;
            Matter.Body.setAngle(this.body,angle);
        }
            display(){
                var pos = this.body.position;
                var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("white");
        rect(pos.x, pos.y, this.width,this.height);
        pop();
        
            }

}