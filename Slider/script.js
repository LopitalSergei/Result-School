const upBtn = document.querySelector('.up-button')
const downBtn = document.querySelector('.down-button')
const sidebar = document.querySelector('.sidebar')
const mainSlide = document.querySelector('.main-slide')
const slidesCount = mainSlide.querySelectorAll('div').length

let activeSlideIndex = 0

sidebar.style.top = `-${slidesCount - 1}00vh`

upBtn.addEventListener('click', () => {
	changeSlide(1)
})

downBtn.addEventListener('click', () => {
	changeSlide(0)
})

function changeSlide(direction) {
	if (direction === 1) {
		activeSlideIndex++
		if (activeSlideIndex === slidesCount) {
			activeSlideIndex = 0
		}
	} else {
		activeSlideIndex--
		if (activeSlideIndex < 0) {
			activeSlideIndex = slidesCount - 1
		}
	}

	const height = sidebar.clientHeight

	mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`

	sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`
}
