function preload()
{
    
}

function setup()
{
    canvas=createCanvas(640,480);
    canvas.position(150,150);
    video=createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 230, 150, 220, 200);
    fill(255,0,0);
    stroke(255, 0,0);
    circle(599,420,70);
    circle(530,420,70);
    fill(0,0,255);
    stroke(0, 0,255);
    circle(460,420,70);
    circle(390,420,70);
    fill(0,255,0);
    stroke(0, 255,0);
    circle(320,420,70);
    circle(250,420,70);
    fill(200,0,100);
    stroke(200,0,100);
    circle(180,420,70);
    circle(110,420,70);
    
    
    fill(255,0,0);
    stroke(255, 0,0)
    circle(110,350, 70);
    fill(0,0,255);
    stroke(255, 0,0)
    circle(110,280,70);
    fill(0,255,0);
    stroke(0, 0,255);
    circle(110,210,70);
    fill(200,0,100);
    stroke(200, 0,100)
    circle(110,140,70);
    fill(255,0,0);
    stroke(255,0,0);
    circle(110,70,70);
    
    
    fill(255,0,0);
    stroke(255, 0,0);
    circle(110,70,70);
    circle(180,70,70);
    fill(0,0,255);
    stroke(0, 0,255);
    circle(250,70,70);
    circle(320,70,70);
    fill(0,255,0);
    stroke(0, 255,0);
    circle(390,70,70);
    circle(460,70,70);
    fill(200,0,100);
    stroke(200,0,100);
    circle(530,70,70);
    circle(600,70,70);
    
    fill(200,0,100);
    stroke(200, 0,100)
    circle(600,350, 70);
    fill(0,0,255);
    stroke(255, 0,0)
    circle(600,280,70);
    fill(0,255,0);
    stroke(0, 0,255);
    circle(600,210,70);
    fill(255,0,0);
    stroke(255, 0,0)
    circle(600,140,70);
    
    
}

function take_snapshot()
{
    save('sia_photo_frame.png');
}


