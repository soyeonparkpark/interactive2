


let scrollTimer
let htmlEl = document.body.parentElement


window.addEventListener('mousewheel',function(event){
	htmlEl.classList.remove('smoothScroll')
	
	let pathIndex = 0
	let isPalette = false 
	while(event.path[pathIndex]){
		if(event.path[pathIndex].id === 'palette'){
			isPalette = true
			break
		}
		pathIndex++
		
	}
	event
	// if(event.deltaY > 50){
		// window.location.href = "http://www.google.com"
	// }

	if(!isPalette){

		let page = Math.round(window.scrollX / window.innerWidth)

		window.scrollBy(event.deltaY,0)

		clearTimeout(scrollTimer)
		scrollTimer = setTimeout(function(){
			htmlEl.classList.add('smoothScroll')
			setTimeout(function(){
				window.scrollTo(page * window.innerWidth,0)
			})

		},200)

	}

	// event.preventDefault()
	// event.stopPropagation()
	// return false
})

window.requestAnimationFrame(checkPalette)

function checkPalette(){
	let scrollFar = window.scrollX/window.innerWidth + 0.07
	if(scrollFar >= 3){
		palette.classList.add('locked')
	} else {
		palette.classList.remove('locked')
	}
	window.requestAnimationFrame(checkPalette)
}

let workTiles = document.querySelectorAll('.workTile')
let palette = document.querySelector('#palette')

let open = document.querySelector('.openbox')
let close = document.querySelector('.box')

open.addEventListener('click',function(){
	palette.classList.add('open')
	close.classList.remove('hide')
	open.classList.add('hide')
})
close.addEventListener('click',function(){
	palette.classList.remove('open')
	open.classList.remove('hide')
	close.classList.add('hide')
})


for(let counter = 0; counter < workTiles.length; counter ++ ){
	workTiles[counter].addEventListener('click',function(event){

		// let xPercent = event.offsetX / workTiles[counter].clientWidth
		// let yPercent = event.offsetY / workTiles[counter].clientHeight
		let xPosition = event.target.classList.contains('left') ? 'left' : 'right'
		// if(xPercent > 0.5){
		// 	xPosition = 'right'
		// }
		let yPosition = event.target.classList.contains('up') ? 'top' : 'bottom'
		// if(yPercent > 0.5){
		// 	yPosition = 'bottom'
		// }
		
		console.log("work"+counter+"-"+xPosition+"-"+yPosition+".jpg")

		let image = new Image()
		image.src = "asset/image/work"+(counter+1)+"-"+xPosition+"-"+yPosition+".png"
		palette.querySelector('div').appendChild(image)

		image.addEventListener('dragstart',function(event){
		  event.dataTransfer.setData("text/plain", "asset/image/work"+(counter+1)+"-"+xPosition+"-"+yPosition+".png");
		})

	})
}

let boxWork = document.querySelector('.boxwork')

boxWork.addEventListener('drop',drop_handler)
boxWork.addEventListener('dragover',dragover_handler)

function dragover_handler(ev) {
 ev.preventDefault();
 ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
 ev.preventDefault();

 // Get the id of the target and add the moved element to the target's DOM
 var data = ev.dataTransfer.getData("text/plain");
 ev.target.style.backgroundImage = 'url('+data+')'
 // ev.target.appendChild(document.getElementById(data));
}
function print_current_page()
{
window.print();
}



let artLink = document.querySelectorAll('.artworkLink')
let pages = document.querySelectorAll('#pageThree .page')
let closes = document.querySelectorAll('#pageThree .close')

for(let counter = 0; counter < artLink.length; counter++){
	artLink[counter].addEventListener('click',function(event){
		event.preventDefault()
		let page = artLink[counter].getAttribute('page') * 1
		console.log(page,pages)
		pages[page - 1].classList.add('active')

		
		return false
	})
}
for(let counter = 0; counter < closes.length; counter++){
	closes[counter].addEventListener('click',function(event){
		pages[counter].classList.remove('active')
	})
}