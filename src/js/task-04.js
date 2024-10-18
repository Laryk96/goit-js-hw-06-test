const refs = {
	incrementBtn: document.querySelector('[data-action="increment"]'),
	decrementBtn: document.querySelector('[data-action="decrement"]'),
	counterValue: document.querySelector('#value'),
}

const counter = {
	counterValue: 0,

	increment() {
		this.counterValue += 1
		this.updateRefsCounterValue()
	},
	decrement() {
		if (this.counterValue <= 0) return
		this.counterValue -= 1
		this.updateRefsCounterValue()
	},
	updateRefsCounterValue() {
		refs.counterValue.textContent = this.counterValue
	},
}

refs.incrementBtn.addEventListener('click', counter.increment.bind(counter))
refs.decrementBtn.addEventListener('click', counter.decrement.bind(counter))
