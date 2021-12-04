const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const createIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientItem = document.createElement('li');
    ingredientItem.textContent = ingredient;
    ingredientItem.classList.add('item');
    return ingredientItem;
  });
};

const ingredientsList = createIngredientsList(ingredients);

const ingredientsList = document.getElementById('ingredients');
ingredientsList.append(...ingredientsList);
