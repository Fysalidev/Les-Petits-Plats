class Catalogue {
  constructor(data) {
    this.catalogue = data;
    this.catalogueFiltred = data;
    this.ingredients = new Array();
    this.appliances = new Array();
    this.ustensils = new Array();
    this.ingredientsTags = [];
    this.appliancesTags = [];
    this.ustensilsTags = [];
    this.cardWrapper = document.getElementById("recipes");
    this.ingredientsWrapper = document.getElementById("ingredients-wrap");
    this.ustensilsWrapper = document.getElementById("ustensils-wrap");
    this.appliancesWrapper = document.getElementById("appliances-wrap");
    /* this.init() */
    this.filterWithSearchBar();
    this.render();
  }

  updateIngredients() {
    const $wrapper = document.getElementById("ingredients-wrap");
    $wrapper.innerHTML = "";

    this.ingredients = Array.from(
      new Set(
        this.catalogueFiltred
          .map((recipe) =>
            recipe.ingredients.map((recipe) => recipe.ingredient)
          )
          .reduce((prev, curr) => prev.concat(curr))
          .sort()
      )
    );

    $wrapper.appendChild(new FilterBtn(this.ingredients, 'ingredient').render())
  }

  updadateAppliances() {
    const $wrapper = document.getElementById("appliances-wrap");
    $wrapper.innerHTML = "";

    this.appliances = Array.from(
      new Set(this.catalogueFiltred.map((recipe) => recipe.appliance).sort())
    );

    $wrapper.appendChild(new FilterBtn(this.appliances, 'appliance').render())
  }

  updateUstensils() {

    const $wrapper = document.getElementById("ustensils-wrap");
    $wrapper.innerHTML = "";

    this.ustensils = Array.from(
      new Set(
        this.catalogueFiltred
          .map((recipe) => recipe.ustensils)
          .reduce((prev, curr) => prev.concat(curr))
          .sort()
      )
    );

    $wrapper.appendChild(new FilterBtn(this.ustensils, 'ustensil').render())

  }


  /* init = () => {
    this.updateIngredients();
    this.updadateAppliances();
    this.updateUstensils();
  }; */

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

  filterWithIngredientTag = (tag) => {
    this.catalogueFiltred = this.catalogueFiltred.filter((recipe) => {
      return recipe.ingredients.some((ingredient) =>
        ingredient.ingredient.toLowerCase().includes(tag)
      );
    });

    
    this.render()
  };

  filterWithApplianceTag = (tag) => {
    this.catalogueFiltred = this.catalogueFiltred.filter((recipes) =>
      recipes.appliance.toLowerCase().includes(tag)
    );
    this.updadateAppliances()
    this.render()
  };

  filterWithUstensilTag = (tag) => {
    this.catalogueFiltred = this.catalogueFiltred.filter((recipe) => {
      return recipe.ustensils.some((ustensil) =>
        ustensil.toLowerCase().includes(tag)
      );
    });
    this.updateUstensils()
    this.render()
  };

  buildIngredientsList = () => {
    console.log();
    new IngredientsList(this.ingredients);
  };

  buildAppliancesList = () => {};

  buildUstensilsList = () => {};

  buildTagsLists = () => {
    /* this.ingredientsWrapper.innerHTML = ""; */
    this.ustensilsWrapper.innerHTML = "";
    this.appliancesWrapper.innerHTML = "";

    this.buildIngredientsList();

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

  render = () => {

    this.updateIngredients();
    this.updadateAppliances();
    this.updateUstensils();

    this.cardWrapper.innerHTML = "";
    this.catalogueFiltred.forEach((recipe) => {
      new Recipe(recipe).render();
    });
  };
}
