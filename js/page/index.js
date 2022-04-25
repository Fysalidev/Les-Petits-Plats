const catalogue = new Catalogue(recipes)

/* tagsFilterBtn | Events */

/* const searchBtns = document.querySelector('.search-btn');
const arrowBtns = document.querySelectorAll('.filter-btn');
const input = document.getElementById('ingredient-filter-btn');

arrowBtns.forEach((arrowBtn) => {

  arrowBtn.addEventListener("click", (e) => {
    
    const list = arrowBtn.parentElement.nextElementSibling;

    if (e.target.className === "fa-solid fa-chevron-down") {
      e.target.classList.replace("fa-chevron-down", "fa-chevron-up");
      list.classList.remove("list-hidden");
      list.classList.add("list-show");

    } else {
      e.target.classList.replace("fa-chevron-up", "fa-chevron-down");
      list.classList.remove("list-show");
      list.classList.add("list-hidden");
    }
  });
}); */

/* Event | tagsFilterBtn (Ingredients List...) */
/* input.addEventListener("keyup", (e) => {
  const ingredientList = catalogue.ingredients;
  const $ingredientsListWrapper = document.getElementById("ingredients-wrap");

  if (e.target.value.length > 2) {
    const ingredientListFiltred = ingredientList.filter((items) =>
      items.toLowerCase().includes(e.target.value.toLowerCase())
    );

    console.log(ingredientListFiltred);
    $ingredientsListWrapper.innerHTML = "";
    $ingredientsListWrapper.appendChild(
      new FilterBtn(ingredientListFiltred, "ingredient").render()
    );
  } else {
    $ingredientsListWrapper.innerHTML = "";
    $ingredientsListWrapper.appendChild(
      new FilterBtn(catalogue.ingredients, "ingredient").render()
    );
  }
}); */





