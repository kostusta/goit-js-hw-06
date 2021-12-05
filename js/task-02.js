const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const createIngredientElement = ingredient => {
  const ingredientItem = document.createElement('li');
  ingredientItem.textContent = ingredient;
  ingredientItem.classList.add('item');
  return ingredientItem;
};

const createIngredientsList = ingredients => {
  return ingredients.map(createIngredientElement);
};

const ingredientsItemsList = createIngredientsList(ingredients);

const ingredientsRef = document.getElementById('ingredients');
ingredientsRef.append(...ingredientsItemsList);
