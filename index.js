let a = 0;
let heart = [];

let bpm = 150;

let speed = 1 / bpm;
let minsize = 1.5;
let size = 1;
let period = 6;

let aniversary = new Date(2018, 02, 20)
let today = new Date();
function setup() {
    createCanvas(windowWidth, windowHeight)
    // let a = TWO_PI;
    // const r = height / 40;
    // const x = r * 16 * pow(sin(a), 3);
    // const y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
    // heart.push(createVector(x, y))
    frameRate(bpm)
    textFont('Fredoka One')
}

function draw() {
    let dif = floor((today - aniversary) / 1000);
    let years = floor((dif) / 31540000)
    let days = floor((dif - years * 31540000) / 86400)
    let hours = floor((dif - days * 86400 - years * 31540000) / 3600)
    let minutes = floor((dif - days * 86400 - years * 31540000 - hours * 3600) / 60);
    let seconds = floor((dif - days * 86400 - years * 31540000 - hours * 3600 - minutes * 60))

    background(0)
    fill('#FE8E86')
    noStroke()
    rect(0, 0, width * 2, height * 2)
    translate(width / 2, height / 4)

    heart = [];
    while (a < TWO_PI) {

        const r = height / (100 / size)
        const x = r * 16 * pow(sin(a), 3)
        const y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a))
        heart.push(createVector(x, y))
        a += 0.04
    }
    strokeJoin(ROUND)
    strokeWeight(3)
    stroke("#C51104")
    fill("#DC422A")

    let heart1 = heart.splice(0,heart.length/2)
    let heart2 = heart
    beginShape()
    for (let v of heart1) {
        vertex(v.x, v.y);
    }
    endShape()
    fill("#F1573F")

    beginShape()
    for (let v of heart2) {
        vertex(v.x, v.y);
    }
    endShape()
    strokeWeight(12)
    fill('white')
    textStyle(BOLD)
    textSize(height / (5 / size))
    text(years, 0, -windowHeight * 0.008)
    textSize(height / (10 / size))
    textStyle(NORMAL)


    // fill(color(0,0,0,0.2))
    // text("years", 0, windowHeight * 0.21)
    fill('white')
    text("years", 0, windowHeight * 0.2)

    // noStroke();

    let x = (frameCount / (bpm / period)) % period;

    size = (cos(PI * x) - sin(x * TWO_PI) - sin(x)) * 0.2 + minsize
    a = 0

    let rw = windowWidth * 0.9;
    let rh = windowHeight * 0.3;
    rectMode(CENTER)
    translate(0, windowHeight / 2);
    fill("#FF4033")
    rect(0, 0, rw, rh, 20);
    ellipseMode(CENTER)
    let cr = min(rh * 0.5, rw / 5);
    for (let i = 0; i < 4; i++) {
        let xtraspace = rw / (cr * 4);
        let x = cr * xtraspace * i - cr * (xtraspace * 2) + cr * xtraspace / 2
        let y = -cr * 0.25
        fill('#FE8E86')
        circle(x, y, cr)
        textAlign(CENTER, CENTER);
        fill('white')
        let str = ['days', 'hours', 'minutes', 'seconds'][i];
        let num = [days, hours, minutes, seconds][i];
        textSize(min((rh - cr) / 2, cr * xtraspace * 1.6 / str.length))
        text(str, x, y + cr / 2 + (rh - cr) / 4)

        textSize(cr * (1 - (num + "").length * 0.2))
        textAlign(CENTER, CENTER);
        text(num, x, y + cr * 0.25 / 3)
    }
    today = new Date();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}