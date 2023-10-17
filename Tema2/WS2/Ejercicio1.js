random0_1= Math.random()

document.write(random0_100 + "<br>")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  
  document.write(getRandomInt(100,200))