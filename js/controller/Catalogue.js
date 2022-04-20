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
    
    this.filterWithSearchBar();
    this.render();
  }
  /* Filtrer avec la searchBar */
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
  /* Mise à jour de la liste d'ingrédients */
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

    $wrapper.appendChild(
      new FilterBtn(this.ingredients, "ingredient").render()
    );
  }
  /* Mise à jour de la liste d'appliances */
  updadateAppliances() {
    const $wrapper = document.getElementById("appliances-wrap");
    $wrapper.innerHTML = "";

    this.appliances = Array.from(
      new Set(this.catalogueFiltred.map((recipe) => recipe.appliance).sort())
    );

    $wrapper.appendChild(new FilterBtn(this.appliances, "appliance").render());
  }
  /* Mise à jour de la liste d'ustensils */
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

    $wrapper.appendChild(new FilterBtn(this.ustensils, "ustensil").render());
  }
  /* Filter les tags ingrédients */
  filterWithIngredientTag = () => {
    if(this.ingredientsTags.length > 0) {
      this.ingredientsTags.map(tag =>{
        this.catalogueFiltred = this.catalogueFiltred.filter((recipe) => {
          return recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(tag)
          );
        });
      })
      this.render();
    }
  };
  /* Filter les tags appliances */
  filterWithApplianceTag = () => {
    if(this.appliancesTags.length > 0) {
      this.appliancesTags.map(tag =>{
        this.catalogueFiltred = this.catalogueFiltred.filter((recipe) => {
          return recipe.appliance.toLowerCase().includes(tag);
        });
      } )
    }
    this.render();
  };
  /* Filter les tags ustensils */
  filterWithUstensilTag = () => {
    if(this.ustensilsTags.length > 0) {
      this.ustensilsTags.map(tag =>{
        this.catalogueFiltred = this.catalogueFiltred.filter((recipe) => {
          return recipe.ustensils.some((ustensil) =>
            ustensil.toLowerCase().includes(tag)
          );
        });
      } )
    }
    this.render();
  };
  /* Render */
  render = () => {
    this.updateIngredients();
    this.updadateAppliances();
    this.updateUstensils();


    const recipesWrapper = document.getElementById("recipes");
    recipesWrapper.innerHTML = "";
    this.catalogueFiltred.forEach((recipe) => {
      new Recipe(recipe).render();
    });
  };
}
