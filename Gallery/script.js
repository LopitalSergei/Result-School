const slides = document.querySelectorAll('.slide')

let slideIndex = 1

for (let i = 0; i < slides.length; i++) {

	slides[i].addEventListener('click', () => {
		slideIndex = i
		clearActiveClasses()

		slides[i].classList.add('active')
	})

	if (slideIndex > slides.length - 1) {
		slideIndex = 0
	}
}

setInterval(scrollimage, 3000)



function clearActiveClasses() {
	slides.forEach((slide) => {
		slide.classList.remove('active')
	})
}

function scrollimage() {
	clearActiveClasses()

	slides[slideIndex++].classList.add('active')

	if (slideIndex > slides.length - 1) {
		slideIndex = 0
	}
}