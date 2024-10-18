const list = document.querySelector('#categories')
const items = document.querySelectorAll('.item')

countItems(items)
headerItems(items)

function headerItems(element) {
	const details = {}

	element.forEach(el => {
		details[el.firstElementChild.textContent] =
			el.lastElementChild.children.length

		console.log(`Category: ${el.firstElementChild.textContent}`)
		console.log(`Elements: ${el.lastElementChild.children.length}`)
	})

	console.log(details)
}

function countItems(element) {
	const itemsOfElement = list.children.length

	console.log('Number of categories: -', itemsOfElement)
}
