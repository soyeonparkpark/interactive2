let clockEl = document.querySelector('#clock')
let timeEl = document.querySelector('#time')

let ding = document.querySelector('#ding')

// run getTime once on load

let colors = [
  '#0019ff',
  '#6600ff',
  '#00ff73',
  '#ff3300',
  '#0019ff',
  '#6600ff',
  '#00ff73',
  '#ff3300'
  
]


getTime();

// call getTime every 1 second going forward

setInterval(function() {
  getTime();
}, 1000);



for(let counter = 0; counter < 60; counter ++){
  let secondDiv = document.createElement('div')
  secondDiv.innerText = addZeroIfNeeded(counter)
  clockEl.appendChild(secondDiv)
}


// set up time getting function



function getTime(){
  
  ding.play()
  // get the date object
  
  let d = new Date();

  // get hours, minutes, and seconds from the date object
  
  let h = addZeroIfNeeded(d.getHours());
  let m = addZeroIfNeeded(d.getMinutes());
  let s = addZeroIfNeeded(d.getSeconds());

  // update the clock's text with our time vars
  
  let timeText = h + ":" + m 
  timeEl.innerText = timeText


  let colorIndex = m%10

  console.log(colorIndex, colors[colorIndex])

  document.body.style.background = colors[colorIndex]



  // rotate secondHand based on the second value
  
  // s ranges from 0 to 60, so to turn it into degrees
  // we need to multiply s by 6
  
  let nows = document.querySelectorAll('.now')

  for(let counter = 0; counter < nows.length; counter++){
    nows[counter].classList.remove('now')
  }

  if(clockEl.children[s]){
    clockEl.children[s].classList.add('now')  
  }
  
  
  // detect if its a minute divisible by 5
  
  if(m % 5 == 0){
  	clockEl.classList.add('aFiveMinute');
  } else {
  	clockEl.classList.remove('aFiveMinute');
  }
}

// add a zero to times below 10

function addZeroIfNeeded(i) {
    if (i < 0) {
        i = "0" + i;
    }
    return i;
}