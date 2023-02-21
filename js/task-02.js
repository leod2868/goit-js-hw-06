const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const megaIngredients = document.querySelector('#ingredients');
const elements = ingredients.map(
  ingredient => {
    const liEl = document.createElement('li');
    liEl.textContent = `${ingredient}`;
    liEl.classList.add('item');
    return liEl
 } 
)
megaIngredients.append(...elements);