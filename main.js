
function preload(){

}

function setup(){
color=""
    canvas=createCanvas( 500,500)
    canvas.position(149, 200)
    video=createCapture(VIDEO)
    video.hide()

}

function draw(){
image(video,0,0,500,500)

tint(color)
}

function take_snapshot(){
    save("pranav.png")
}

function applyfilter(){
    color=document.getElementById("colorinput").value
}