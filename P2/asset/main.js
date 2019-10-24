


let lines = document.querySelectorAll('.line')




window.requestAnimationFrame(line0Animate)

let line0Speed = 0
let line0Pos = 0

function line0Animate(){
	lines[0].style.background = "repeating-linear-gradient(to right, hsl(" + line0Pos + "deg,30%,70%), hsl(" + line0Pos + "deg,30%,70%) 2px, white 5px, white 15px)"
	console.log("background: repeating-linear-gradient(to right, hsl(" + line0Pos + "deg,50%,10%), hsl(" + line0Pos + "deg,50%,10%) 2px, white 5px, white 15px)")
	lines[0].style.backgroundPosition = line0Pos + 'px 0'
	line0Pos += line0Speed


	

	window.requestAnimationFrame(line0Animate)	
}


lines[0].addEventListener('mousemove',function(event){
		line0Speed = event.movementX / 10
		
		
	});



window.requestAnimationFrame(line1Animate)

let line1Speed = 0
let line1Pos = 0

function line1Animate(){
	lines[1].style.background = "repeating-linear-gradient(to right, hsl(" + line1Pos + "deg,30%,70%), hsl(" + line1Pos + "deg,30%,70%) 3px, white 6px, white 16px)"
	console.log("background: repeating-linear-gradient(to right, hsl(" + line1Pos + "deg,30%,10%), hsl(" + line1Pos + "deg,50%,10%) 3px, white 6px, white 16px)")
	lines[1].style.backgroundPosition = line1Pos + 'px 0'
	line1Pos += line1Speed


	

	window.requestAnimationFrame(line1Animate)	
}


lines[1].addEventListener('mousemove',function(event){
		line1Speed = event.movementX / 1
		
		
	});

window.requestAnimationFrame(line2Animate)

let line2Speed = 0
let line2Pos = 0

function line2Animate(){
	lines[2].style.background = "repeating-linear-gradient(to right, hsl(" + line2Pos + "deg,30%,70%), hsl(" + line2Pos + "deg,30%,70%) 4px, white 7px, white 18px)"
	console.log("background: repeating-linear-gradient(to right, hsl(" + line2Pos + "deg,50%,10%), hsl(" + line2Pos + "deg,50%,10%) 4px, white 7px, white 18px)")
	lines[2].style.backgroundPosition = line2Pos + 'px 0'
	line2Pos += line2Speed


	

	window.requestAnimationFrame(line2Animate)	
}


lines[2].addEventListener('mousemove',function(event){
		line2Speed = event.movementX / 7
		
		
	});





window.requestAnimationFrame(line3Animate)

let line3Speed = 0
let line3Pos = 0

function line3Animate(){
	lines[3].style.background = "repeating-linear-gradient(to right, hsl(" + line3Pos + "deg,30%,70%), hsl(" + line3Pos + "deg,30%,70%) 5px, white 8px, white 18px)"
	console.log("background: repeating-linear-gradient(to right, hsl(" + line3Pos + "deg,50%,10%), hsl(" + line3Pos + "deg,50%,10%) 5px, white 8px, white 18px)")
	lines[3].style.backgroundPosition = line3Pos + 'px 0'
	line3Pos += line3Speed


	

	window.requestAnimationFrame(line3Animate)	
}


lines[3].addEventListener('mousemove',function(event){
		line3Speed = event.movementX / 10
		
		
	});


window.requestAnimationFrame(line4Animate)

let line4Speed = 0
let line4Pos = 0

function line4Animate(){
	lines[4].style.background = "repeating-linear-gradient(to right, hsl(" + line4Pos + "deg,30%,70%), hsl(" + line4Pos + "deg,30%,70%) 6px, white 9px, white 20px)"
	console.log("background: repeating-linear-gradient(to right, hsl(" + line4Pos + "deg,50%,10%), hsl(" + line4Pos + "deg,50%,10%) 6px, white 9px, white 20px)")
	lines[4].style.backgroundPosition = line4Pos + 'px 0'
	line4Pos += line4Speed


	

	window.requestAnimationFrame(line4Animate)	
}


lines[4].addEventListener('mousemove',function(event){
		line4Speed = event.movementX / 10
		
		
	});


window.requestAnimationFrame(line5Animate)

let line5Speed = 0
let line5Pos = 0

function line5Animate(){
	lines[5].style.background = "repeating-linear-gradient(to right, hsl(" + line5Pos + "deg,30%,70%), hsl(" + line5Pos + "deg,30%,70%) 7px, white 10px, white 20px)"
	console.log("background: repeating-linear-gradient(to right, hsl(" + line5Pos + "deg,50%,10%), hsl(" + line5Pos + "deg,50%,10%) 7px, white 10px, white 20px)")
	lines[5].style.backgroundPosition = line5Pos + 'px 0'
	line5Pos += line5Speed


	

	window.requestAnimationFrame(line5Animate)	
}


lines[5].addEventListener('mousemove',function(event){
		line5Speed = event.movementX / 10
		
		
	});



window.requestAnimationFrame(line6Animate)

let line6Speed = 0
let line6Pos = 0

function line6Animate(){
	lines[6].style.background = "repeating-linear-gradient(to right, hsl(" + line6Pos + "deg,30%,70%), hsl(" + line6Pos + "deg,30%,70%) 8px, white 10px, white 20px)"
	console.log("background: repeating-linear-gradient(to right, hsl(" + line6Pos + "deg,50%,10%), hsl(" + line6Pos + "deg,50%,10%) 8px, white 10px, white 20px)")
	lines[6].style.backgroundPosition = line6Pos + 'px 0'
	line6Pos += line6Speed


	

	window.requestAnimationFrame(line6Animate)	
}


lines[6].addEventListener('mousemove',function(event){
		line6Speed = event.movementX / 10
		
		
	});


window.requestAnimationFrame(line7Animate)

let line7Speed = 0
let line7Pos = 0

function line7Animate(){
	lines[7].style.background = "repeating-linear-gradient(to right, hsl(" + line7Pos + "deg,30%,70%), hsl(" + line7Pos + "deg,30%,70%) 9px, white 11px, white 24px)"
	console.log("background: repeating-linear-gradient(to right, hsl(" + line7Pos + "deg,50%,10%), hsl(" + line7Pos + "deg,50%,10%) 9px, white 11px, white 24px)")
	lines[7].style.backgroundPosition = line7Pos + 'px 0'
	line7Pos += line7Speed


	

	window.requestAnimationFrame(line7Animate)	
}


lines[7].addEventListener('mousemove',function(event){
		line7Speed = event.movementX / 10
		
		
	});






window.requestAnimationFrame(line8Animate)

let line8Speed = 0
let line8Pos = 0

function line8Animate(){
	lines[8].style.background = "repeating-linear-gradient(to right, hsl(" + line8Pos + "deg,30%,70%), hsl(" + line8Pos + "deg,30%,70%) 10px, white 12px, white 24px)"
	console.log("background: repeating-linear-gradient(to right, hsl(" + line8Pos + "deg,50%,10%), hsl(" + line8Pos + "deg,50%,10%) 10px, white 12px, white 24px)")
	lines[8].style.backgroundPosition = line8Pos + 'px 0'
	line8Pos += line8Speed


	

	window.requestAnimationFrame(line8Animate)	
}


lines[8].addEventListener('mousemove',function(event){
		line8Speed = event.movementX / 10
		
		
	});








