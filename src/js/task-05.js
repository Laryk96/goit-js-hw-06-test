const refs = {
	input: document.querySelector('#name-input'),
	output: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', el => {
	const userName = el.currentTarget.value.trim()

	refs.output.textContent = userName !== '' ? userName : 'Anonymous'
})
