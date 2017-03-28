function setup(){
    createCanvas(600,400);
    background(0);
}


function draw(){
    strokeWeight(4);
    stroke(255);
    
    var x=25;
    while(x<650){
        fill(200,25,0);
        ellipse(x,25,15,15);
        x = x + 50;
    }
    
    for(var x=3; x < 650; x = x + 50){
        fill(25,20, 100);
        ellipse(x,100,25,25);
    }
    
    for(var x=3; x < 650; x = x + 50){
        fill(25,200, 200);
        ellipse(x,50,25,25);
    }
}