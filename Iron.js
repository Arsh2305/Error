class Iron{
    constructor(x,y)
{
var options ={
"restitution":0.8,
"friction":3,
"density":30,

}
this.x=x
this.y=y
this.body=Bodies.rectangle(x,y,70,70,options)
this.body.height=70
this.body.width=70
World.add(world,this.body)

}
display(){

var angle=this.body.angle
push()
translate(this.x,this.y)
rotate(angle)
fill("black")
rectMode(CENTER)
rect(0,0,this.height,this.width)
pop()
}
}