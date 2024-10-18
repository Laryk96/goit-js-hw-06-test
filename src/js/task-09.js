const widgetTxt = document.querySelector('.widget span')
const changeColorBtn = document.querySelector('.change-color')

changeColorBtn.addEventListener('click', () => {
	const bodyStyleEl = document.body.style
	bodyStyleEl.backgroundColor = `${getRandomHexColor()}`
	widgetTxt.textContent = bodyStyleEl.backgroundColor
})

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`
}
