
let computer = document.querySelector('.computer')
let computerDescription = document.querySelector('#computerDescription')

computer.onmouseenter = function(){

	computerDescription.classList.add('blur')
}

computer.onmouseleave = function(){

	computerDescription.classList.remove('blur')
}






let tv = document.querySelector('.tv')
let tvDescription = document.querySelector('#tvDescription')

tv.onmouseenter = function(){

	tvDescription.classList.add('blur')
}

tv.onmouseleave = function(){

	tvDescription.classList.remove('blur')
}

let phone = document.querySelector('.phone')
let phoneDescription = document.querySelector('#phoneDescription')

phone.onmouseenter = function(){

	phoneDescription.classList.add('blur')
}

phone.onmouseleave = function(){

	phoneDescription.classList.remove('blur')
}