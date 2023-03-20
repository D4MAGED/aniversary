// Enable the utc and timezone plugins
dayjs.extend(dayjs_plugin_utc);
dayjs.extend(dayjs_plugin_timezone);
dayjs.extend(dayjs_plugin_dayOfYear);

let a = 0;
let heart = [];

let bpm = 60;

let minsize = 1.5;
let size = 1;
let saved = [];


const params = new Proxy(new URLSearchParams(window.location.search), {
  get: (searchParams, prop) => searchParams.get(prop),
});
// Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
let annDate = params.date ?? '2018-03-20'; // "some_value"


const name1 = params.name1 ?? "Thomass";
const name2 = params.name2 ?? "Sam";
if((name1 && name2) && (name1 !== "Thomass" || name2 !== "Sam")) document.title = `${name1} + ${name2} Forever!`;

const anniversary = dayjs.tz(annDate, 'America/Toronto').startOf('day');
let today = dayjs.tz(dayjs(), 'America/Toronto');

let fireworksActive = false;

function fireworks(){
  const isAnniversaryToday = today.format("MM-DD") === anniversary.format("MM-DD");
  if(!isAnniversaryToday && fireworksActive){
    let particles = tsParticles.domItem(0);

    // play will start the animations, if the move is not enabled it won't enable it, it just updates the frame
    particles.stop();
     particles = tsParticles.domItem(1);

    // play will start the animations, if the move is not enabled it won't enable it, it just updates the frame
    particles.stop();
  }
if (isAnniversaryToday && !fireworksActive) {
  fireworksActive = true;
  tsParticles.load("tsparticles", {
    "fullScreen": {
      "zIndex": 1
    },
    "particles": {
      "number": {
        "value": 50
      },
      "color": {
        "value": [
          "#B6E6BD",
          "#AC9AF1",
          "#F7C8EE",
          "#FFEFB0",
          "#FFCA96",
          "#F59A8E"
        ]
      },
      "shape": {
        "type": [
          "circle",
          "square",
          "triangle",
          "polygon"
        ],
        "options": {
          "polygon": [
            {
              "sides": 5
            },
            {
              "sides": 6
            }
          ]
        }
      },
      "opacity": {
        "value": 1,
        "animation": {
          "enable": true,
          "minimumValue": 0,
          "speed": 2,
          "startValue": "max",
          "destroy": "min"
        }
      },
      "size": {
        "value": 4,
        "random": {
          "enable": true,
          "minimumValue": 2
        }
      },
      "links": {
        "enable": false
      },
      "life": {
        "duration": {
          "sync": true,
          "value": 5
        },
        "count": 1
      },
      "move": {
        "enable": true,
        "gravity": {
          "enable": true,
          "acceleration": 10
        },
        "speed": {
          "min": 10,
          "max": 20
        },
        "decay": 0.1,
        "direction": "none",
        "straight": false,
        "outModes": {
          "default": "destroy",
          "top": "none"
        }
      },
      "rotate": {
        "value": {
          "min": 0,
          "max": 360
        },
        "direction": "random",
        "move": true,
        "animation": {
          "enable": true,
          "speed": 60
        }
      },
      "tilt": {
        "direction": "random",
        "enable": true,
        "move": true,
        "value": {
          "min": 0,
          "max": 360
        },
        "animation": {
          "enable": true,
          "speed": 60
        }
      },
      "roll": {
        "darken": {
          "enable": true,
          "value": 25
        },
        "enable": true,
        "speed": {
          "min": 15,
          "max": 25
        }
      },
      "wobble": {
        "distance": 30,
        "enable": true,
        "move": true,
        "speed": {
          "min": -15,
          "max": 15
        }
      }
    },
    "emitters": {
      "life": {
        "count": 0,
        "duration": 0.1,
        "delay": 0.4
      },
      "rate": {
        "delay": 0.1,
        "quantity": 150
      },
      "size": {
        "width": 0,
        "height": 0
      }
    }
  }).then(container => {
    console.log("callback - tsparticles config loaded");
  });

  tsParticles.load("tsparticles2", {
    "fullScreen": {
      "zIndex": 1
    },
    "particles": {
      "color": {
        "value": [
          "#FFFFFF",
          "#FFd700"
        ]
      },
      "move": {
        "direction": "bottom",
        "enable": true,
        "outModes": {
          "default": "out"
        },
        "size": true,
        "speed": {
          "min": 1,
          "max": 3
        }
      },
      "number": {
        "value": 500,
        "density": {
          "enable": true,
          "area": 800
        }
      },
      "opacity": {
        "value": 1,
        "animation": {
          "enable": false,
          "startValue": "max",
          "destroy": "min",
          "speed": 0.3,
          "sync": true
        }
      },
      "rotate": {
        "value": {
          "min": 0,
          "max": 360
        },
        "direction": "random",
        "move": true,
        "animation": {
          "enable": true,
          "speed": 60
        }
      },
      "tilt": {
        "direction": "random",
        "enable": true,
        "move": true,
        "value": {
          "min": 0,
          "max": 360
        },
        "animation": {
          "enable": true,
          "speed": 60
        }
      },
      "shape": {
        "type": [
          "circle",
          "square",
          "triangle",
          "polygon"
        ],
        "options": {
          "polygon": [
            {
              "sides": 5
            },
            {
              "sides": 6
            }
          ]
        }
      },
      "size": {
        "value": {
          "min": 2,
          "max": 4
        }
      },
      "roll": {
        "darken": {
          "enable": true,
          "value": 30
        },
        "enlighten": {
          "enable": true,
          "value": 30
        },
        "enable": true,
        "speed": {
          "min": 15,
          "max": 25
        }
      },
      "wobble": {
        "distance": 30,
        "enable": true,
        "move": true,
        "speed": {
          "min": -15,
          "max": 15
        }
      }
    }
  });
  
const particles = tsParticles.domItem(0);

// play will start the animations, if the move is not enabled it won't enable it, it just updates the frame
particles.play();
}

}


function setup() {
  createCanvas(windowWidth, windowHeight);
  // let a = TWO_PI;
  // const r = height / 40;
  // const x = r * 16 * pow(sin(a), 3);
  // const y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
  // heart.push(createVector(x, y))
  frameRate(60);
  textFont("Fredoka One");
}

function draw() {
  // const date1 = anniversary.clone();
  // const date2 = today.clone();

  // // Calculate the total difference in years, months, and days
  // const years = date2.diff(date1, 'years');
  // date1.add(years, 'years');

  // const days = date2.diff(date1, 'days');

  // // Calculate the total difference in hours, minutes, and seconds
  // const hours = date2.diff(date1, 'hours') % 24;
  // const minutes = date2.diff(date1, 'minutes') % 60;
  // const seconds = date2.diff(date1, 'seconds') % 60;

  // Log the duration between the anniversary and today
  //   console.log(
  //     years +
  //       " years, " +
  //       days +
  //       " days, " +
  //       hours +
  //       " hours, " +
  //       minutes +
  //       " minutes, " +
  //       seconds +
  //       " seconds"
  //   );

  // Define the two dates
    // Define the anniversary date at midnight in the America/Toronto timezone
    
    // Define today's date and time in the America/Toronto timezone

    // Calculate the total difference in years
    const years = today.diff(anniversary, 'year');
    const dateWithYearsAdded = anniversary.add(years, 'year');
    
    // Calculate the remaining difference in days
    const days = today.diff(dateWithYearsAdded, 'day');

    // Calculate the total difference in hours, minutes, and seconds
    const hours = today.diff(dateWithYearsAdded, 'hour') % 24;
    const minutes = today.diff(dateWithYearsAdded, 'minute') % 60;
    const seconds = today.diff(dateWithYearsAdded, 'second') % 60;

  // Log the results
  const output = `Difference: ${years} years, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;
  // console.log(output);
  fill("#FE8E86");
  noStroke();
  rect(0, 0, width * 2, height * 2);
  translate(width / 2, height / 4);

  let x = round((frameCount * (2 / bpm)) % 2, 2);
  size = (cos(PI * (x - 0.2021)) - sin((x - 0.2021) * TWO_PI)) * 0.2 + minsize;
  a = 0;

  heart = [];

  while (a < TWO_PI) {
    const r = height / (100 / size);
    const n = r * 16 * pow(sin(a), 3);
    const y = -r * (13 * cos(a) - 5 * cos(2 * a) - 2 * cos(3 * a) - cos(4 * a));
    heart.push(createVector(n, y));
    a += 0.04;
  }

  strokeJoin(ROUND);
  strokeWeight(3);
  stroke("#C51104");
  fill("#DC422A");

  let heart1 = heart.splice(0, heart.length / 2);
  let heart2 = heart;
  beginShape();
  for (let v of heart1) {
    vertex(v.x, v.y);
  }
  endShape();
  fill("#F1573F");

  beginShape();
  for (let v of heart2) {
    vertex(v.x, v.y);
  }
  endShape();
  strokeWeight(12);
  fill("white");
  textStyle(BOLD);
  textSize(height / (5 / size));
  text(years, 0, -windowHeight * 0.008);
  textSize(height / (10 / size));
  textStyle(NORMAL);

  // fill(color(0,0,0,0.2))
  // text("years", 0, windowHeight * 0.21)
  fill("white");
  text("years", 0, windowHeight * 0.2);

  // noStroke();

  strokeWeight(12 * min(height / 1000, width / 1080));
  let rw = windowWidth * 0.95;
  let rh = windowHeight * 0.3;
  rectMode(CENTER);
  translate(0, windowHeight / 2);
  fill("#FF4033");
  rect(0, 0, rw, rh, 20);
  ellipseMode(CENTER);
  let cr = min(rh * 0.5, rw / 5);
  for (let i = 0; i < 4; i++) {
    let xtraspace = rw / (cr * 4);
    let x = cr * xtraspace * i - cr * (xtraspace * 2) + (cr * xtraspace) / 2;
    let y = -cr * 0.25;
    fill("#FE8E86");
    circle(x, y, cr);
    textAlign(CENTER, CENTER);
    fill("white");
    let str = ["days", "hours", "minutes", "seconds"][i];
    let num = [days, hours, minutes, seconds][i];
    textSize(min((rh - cr) / 2, (cr * xtraspace * 1.6) / str.length));
    text(str, x, y + cr / 2 + (rh - cr) / 4);

    textSize(cr * (1 - (num + "").length * 0.2));
    textAlign(CENTER, CENTER);
    text(num, x, y + (cr * 0.25) / 3);
  }
  today = dayjs.tz(dayjs(), 'America/Toronto');

  fireworks();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
