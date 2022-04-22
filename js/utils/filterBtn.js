/* Open tagsFilterBtn */

const filterBtns = document.querySelectorAll(".filter-btn");
const input = document.getElementById("ingredient-filter-btn");
filterBtns.forEach((filterBtn) => {
  filterBtn.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.className === "fa-solid fa-chevron-down") {
      e.target.classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      e.target.classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  });
});

/* Event | tagsFilterBtn (Ingredients List...) */
input.addEventListener("keyup", (e) => {
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
});
