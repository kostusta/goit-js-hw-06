const categoriesRef = document.querySelectorAll('#categories > .item');
console.log(`Number of categories: ${categoriesRef.length}`);

categoriesRef.forEach(category => {
  console.log(
    `Category: ${category.firstElementChild.textContent}\nElements: ${category.lastElementChild.children.length}`,
  );
});
