let element3 = document.querySelector("#element-3");
let element4 = document.querySelector("#element-4");
let element5 = document.querySelector("#element-5");
let element6 = document.querySelector("#element-6");
let element10 = document.querySelector("#element-10");

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



