const rangeEl = document.querySelector('#font-size-control')
const textEl = document.querySelector('#text')

rangeEl.addEventListener('input', e => {
	const value = e.currentTarget.value

	textEl.style.fontSize = `${value}px`
})
