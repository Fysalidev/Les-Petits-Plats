class DataManager {
  constructor(recipes) {
    this.data = recipes;
    this.search = recipes;
    this.ingredients = [];
    this.appliances = [];
    this.ustensils = [];
    this.ingredientsTags = [];
    this.appliancesTags = [];
    this.ustensilsTags = [];
    this.cardWrapper = document.getElementById("recipes");
    this.ingredientsWrapper = document.getElementById("ingredients-wrap");
    this.ustensilsWrapper = document.getElementById("ustensils-wrap");
    this.appliancesWrapper = document.getElementById("appliances-wrap");
    this.init()
    this.render()
  }

  init = () => {
    this.ingredients = Array.from(
      new Set(
        recipes
          .map((recipe) => recipe.ingredients.map((recipe) => recipe.ingredient))
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
      new Set(
        recipes
          .map((recipe) => recipe.appliance)
          .sort()
      )
    );
  }

  filterWithSearchBar = () => {
    const searchBar = document.getElementById("search-bar");

    searchBar.addEventListener("keyup", () => {
      const query = searchBar.value.toLowerCase();
      console.log(query);
      console.log(query.length);

      if (query.length > 3) {
        this.search = this.data.filter((recipe) => {
          return (
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.ingredients.some((ingredient) =>
              ingredient.ingredient.toLowerCase().includes(query)
            )
          );
        });
      } else {
        this.search = this.data;
      }
      this.render();
    });
  }

  filterIngredientWithTag = () => {
    if (this.ingredientsTags.length > 0) {
      this.ingredientsTags.map(tag => {
        this.search = search.filter((recipe) => {
          return recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(tag)
          )
        })
      })
    }
  }

  filterApplianceWithTag = () => {
    if (this.appliancesTags.length > 0) {
      this.appliancesTags.map(tag => {
        this.search = search.filter((recipes) =>
          recipes.appliance.toLowerCase().includes(tag)
        )
      })
    }
  }

  filterUstensilWithTag = () => {
    if (this.ustensilsTags.length > 0) {
      this.ustensilsTags.map(tag => {
        this.search = search.filter((recipes) =>
          recipes.ustensils.toLowerCase().includes(tag)
        )
      })
    }
  }


  filterWithTags = () => {
    this.filterIngredientWithTag()
    this.filterApplianceWithTag()
    this.filterUstensilWithTag()
  }

  buildIngredients = () => {
    this.ingredientsWrapper.innerHTML = "";
    new TagList(this.catalogue, this.ingredientsWrapper, "ingredient").render();
  }

  buildAppliances = () => {
    this.appliancesWrapper.innerHTML = "";
    new TagList(this.catalogue, this.appliancesWrapper, "appliance").render();
  }

  buildUstensils = () => {
    this.ustensilsWrapper.innerHTML = "";
    new TagList(this.catalogue, this.ustensilsWrapper, "ustensil").render();
  }

  buildRecipes = () => {
    this.cardWrapper.innerHTML = "";

    this.search.forEach((recipe) => {
      new Recipe(recipe).render();
    })
  }

  render = () => {
    this.filterWithSearchBar();
    this.filterWithTags();
    this.buildIngredients();
    this.buildAppliances();
    this.buildUstensils();
    this.buildRecipes();
  }
}
