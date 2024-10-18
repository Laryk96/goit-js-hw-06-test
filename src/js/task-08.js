const form = document.querySelector('.login-form')

form.addEventListener('submit', e => {
	e.preventDefault()

	const email = e.currentTarget.elements.email.value.trim()
	const password = e.currentTarget.elements.password.value.trim()

	if (email === '' || password === '') {
		return alert('Все поля должны быть заполнены')
	}

	const user = {
		email,
		password,
	}

	console.log(user)
	e.currentTarget.reset()
})
