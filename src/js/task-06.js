const inputEL = document.querySelector('#validation-input')

// inputEL.classList.add('invalid')

inputEL.addEventListener('blur', e => {
	const valueLength = e.currentTarget.value.length
	const isValid = valueLength === Number(e.currentTarget.dataset.length)

	if (!isValid) {
		e.currentTarget.classList.add('invalid')
	} else {
		e.currentTarget.classList.add('valid')
		e.currentTarget.classList.remove('invalid')
	}
})
