const categoriesList = document.querySelectorAll('#categories > .item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  console.log(
    `Category: ${category.firstElementChild.textContent}\nElements: ${category.lastElementChild.children.length}`,
  );
});
