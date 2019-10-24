let element3 = document.querySelector("#element-3");
let element4 = document.querySelector("#element-4");
let element5 = document.querySelector("#element-5");
let element6 = document.querySelector("#element-6");
let element10 = document.querySelector("#element-10");
let element19 = document.querySelector("#element-19");
let element20 = document.querySelector("#element-20");
let element21 = document.querySelector("#element-21");
let element24 = document.querySelector("#element-24");
let element25 = document.querySelector("#element-25");
let element28 = document.querySelector("#element-28");
let element29 = document.querySelector("#element-29");
let element30 = document.querySelector("#element-30");
let element32 = document.querySelector("#element-32");

let element33 = document.querySelector("#element-33");
let element34 = document.querySelector("#element-34");
let element36 = document.querySelector("#element-36");
let element38 = document.querySelector("#element-38");
let element42 = document.querySelector("#element-42");







element3.addEventListener("click", function() {
  element3.animate(
    [
      {
        opacity: 0,
        marginLeft: getComputedStyle(this).marginLeft,
        fontSize: "100px",
        borderWidth: getComputedStyle(this).borderWidth


      },
      {
        opacity: 0.4,
        marginLeft: "-125px",
        fontSize: "14px",
        borderWidth: "10px",

        
      }
    ],
    {
      duration: 500,
      iterations: 1,
      fill: "forwards",

      

    }
  );
});
element3.addEventListener("click", function() {
  this.classList.add("red-background");
});
element6.addEventListener("pointermove", function(e) {
  var xPos = e.pageX - 125;
  var yPos = e.pageY - 125;

  // if(xPos < 400 && xPos > 50){
  //   if(yPos < 300 && yPos > 100){
  //     return
  //   }
  // }
  console.log(xPos,yPos)

  this.style.position = "absolute";
  this.style.top = yPos + "px";
  this.style.left = xPos + "px";
});

element4.addEventListener("click", function() {
  this.classList.add("gradient-background");
});

element5.addEventListener("click", function() {
  this.nextElementSibling.classList.toggle("circle");

});

let element10scroll = 100

element10.addEventListener('mousewheel',function(event){
  console.log(event)
  
  element10scroll += event.deltaY
  console.log(element10scroll)
  event.preventDefault()
  event.stopPropagation()
  
  if(element10scroll > 400){
    element10scroll = 400
  }
  if(element10scroll < 20){
    element10scroll = 20
  }
  
  
  element10.style.transform = 'scale(' + element10scroll/100 + ')'
  
})


element19.addEventListener("click", function() {
  this.classList.add("white");

});
element20.addEventListener("click", function() {
  this.classList.add("continue");

});

element21.addEventListener("click", function() {
  this.classList.add("move");

});
element24.addEventListener("click", function() {
  this.classList.add("slideleft");

});
element25.addEventListener("click", function() {
  this.classList.add("slideright");

});
element28.addEventListener("click", function() {
  this.classList.add("pullup");

});
element29.addEventListener("click", function() {
  this.classList.add("bounce");

});

element30.addEventListener("click", function() {
  this.classList.add("hatch");

});
element32.addEventListener("click", function() {
  this.classList.add("star");

});

element33.addEventListener("click", function() {
  this.classList.add("just");

});
element34.addEventListener("click", function() {
  this.classList.add("flow");

});



let element36scroll = 100

element36.addEventListener('mousewheel',function(event){
  console.log(event)
  
  element36scroll += event.deltaY
  console.log(element36scroll)
  event.preventDefault()
  event.stopPropagation()
  
  if(element36scroll > 400){
    element36scroll = 400
  }
  if(element36scroll < 20){
    element36scroll = 20
  }
  
  
  element36.style.transform = "skewY(30deg)";
  
})
element38.addEventListener("click", function() {
  this.nextElementSibling.classList.toggle("round");

});


let element42scroll = 100

element42.addEventListener('mousewheel',function(event){
  console.log(event)
  
  element42scroll += event.deltaY
  console.log(element42scroll)
  event.preventDefault()
  event.stopPropagation()
  
  if(element42scroll > 400){
    element42scroll = 400
  }
  if(element42scroll < 20){
    element42scroll = 20
  }
  
  
  element42.style.transform = "skew(10deg)";
  
})







