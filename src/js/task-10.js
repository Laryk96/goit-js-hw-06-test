const refs = {
	controls: document.querySelector('#controls'),
	boxEl: document.querySelector('#boxes'),
	createBtn: document.querySelector('[data-create]'),
	destroyBtn: document.querySelector('[data-destroy]'),
}

refs.createBtn.addEventListener('click', () => {
	const amountElement = refs.controls.firstElementChild.value

	createBoxes(amountElement)
})

refs.destroyBtn.addEventListener('click', destroyBoxes)

function createBoxes(amount) {
	let elements = []
	const pixel = 30
	const steep = 10

	for (let i = 0; i <= amount; i += 1) {
		const newElement = document.createElement('div')
		newElement.style.width = `${pixel + steep * i}px`
		newElement.style.height = `${pixel + steep * i}px`
		newElement.style.backgroundColor = getRandomHexColor()
		elements.push(newElement)
	}
	return refs.boxEl.append(...elements)
}

function destroyBoxes() {
	refs.boxEl.innerHTML = ''
}

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`
}
