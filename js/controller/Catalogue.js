class Catalogue {
  constructor(data) {
    this.catalogue = data;
    this.catalogueFiltred = data;
    this.ingredients;
    this.appliances;
    this.ustensils;
    this.ingredientsTags = [];
    this.appliancesTags = [];
    this.ustensilsTags = [];
    this.tags = [];
    this.cardWrapper = document.getElementById("recipes");
    /* this.ingredientsWrapper = document.getElementById("ingredients-wrap"); */
    this.ustensilsWrapper = document.getElementById("ustensils-wrap");
    this.appliancesWrapper = document.getElementById("appliances-wrap");
    this.init();
    this.filterWithSearchBar();
    this.render();
  }

  init = () => {
    this.ingredients = Array.from(
      new Set(
        recipes
          .map((recipe) =>
            recipe.ingredients.map((recipe) => recipe.ingredient)
          )
          .reduce((prev, curr) => prev.concat(curr))
          .sort()
      )
    );

    this.ustensils = Array.from(
      new Set(
        recipes
          .map((recipe) => recipe.ustensils)
          .reduce((prev, curr) => prev.concat(curr))
          .sort()
      )
    );

    this.appliances = Array.from(
      new Set(recipes.map((recipe) => recipe.appliance).sort())
    );
  };

  filterWithSearchBar = () => {
    const searchBar = document.getElementById("search-bar");

    searchBar.addEventListener("keyup", () => {
      const query = searchBar.value.toLowerCase();

      if (query.length > 3) {
        this.catalogueFiltred = this.catalogue.filter((recipe) => {
          return (
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.ingredients.some((ingredient) =>
              ingredient.ingredient.toLowerCase().includes(query)
            )
          );
        });
      } else {
        this.catalogueFiltred = this.catalogue;
      }
      this.render();
    });
  };

  buildIngredientsList = () => {
    new IngredientsList(this.ingredients)
  };

  buildAppliancesList = () => {};

  buildUstensilsList = () => {};

  buildTagsLists = () => {

    /* this.ingredientsWrapper.innerHTML = ""; */
    this.ustensilsWrapper.innerHTML = "";
    this.appliancesWrapper.innerHTML = "";

    this.buildIngredientsList()

    new TagList(
      this.appliances,
      this.appliancesWrapper,
      this.appliancesTags,
      "appliance"
    ).render();
    new TagList(
      this.ustensils,
      this.ustensilsWrapper,
      this.ustensilsTags,
      "ustensil"
    ).render();
  };

  displayRecipes = () => {
    this.cardWrapper.innerHTML = "";

    this.catalogueFiltred.forEach((recipe) => {
      new Recipe(recipe).render();
    });
  };

  render = () => {
    this.buildTagsLists();
    this.displayRecipes();
  };
}
