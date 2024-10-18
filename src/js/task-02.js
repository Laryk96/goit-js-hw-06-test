const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
]

const ingredientsList = document.querySelector('#ingredients')

function createItemsMarkup(data) {
	return data.map(ing => {
		const item = document.createElement('li')

		item.textContent = ing
		item.classList.add('item')

		return item
	})
}

ingredientsList.append(...createItemsMarkup(ingredients))
