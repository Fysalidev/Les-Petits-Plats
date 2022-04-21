class Catalogue {
  constructor(data) {
    this.$recipes = document.getElementById("recipes");
    this.$ingredients = document.getElementById("ingredients-wrap");
    this.$appliances = document.getElementById("appliances-wrap");
    this.$ustensils = document.getElementById("ustensils-wrap");
    this.catalogue = data;
    this.catalogueFiltred = data;
    this.catalogueTaged = new Array();
    this.ingredients = new Array();
    this.appliances = new Array();
    this.ustensils = new Array();
    this.ingredientsTags = new Array();
    this.appliancesTags = new Array();
    this.ustensilsTags = new Array();
    this.init();
  }

  /* Init */
  init = () => {
    this.searchBar();
    this.tag();
  };

  /* update searchBar */
  searchBar = () => {
    const $searchBar = document.getElementById("search-bar");
    $searchBar.addEventListener("keyup", (e) => {
      const query = e.target.value;
      if (e.target.value.length > 2) {
        this.filter(query);
        this.tag();
      } else {
        this.catalogueFiltred = this.catalogue;
        this.tag(this.catalogueFiltred);
      }
    });
  };

  /* Update Ingredients */
  updateIngredients() {
    this.ingredients = Array.from(
      new Set(
        this.catalogueTaged
          .map((recipe) =>
            recipe.ingredients.map((recipe) => recipe.ingredient)
          )
          .reduce((prev, curr) => prev.concat(curr))
          .sort()
      )
    );
    this.$ingredients.innerHTML = "";
    this.$ingredients.appendChild(
      new FilterBtn(this.ingredients, "ingredient").render()
    );
  }

  /* Update Appliances */
  updadateAppliances() {
    this.appliances = Array.from(
      new Set(this.catalogueTaged.map((recipe) => recipe.appliance).sort())
    );

    this.$appliances.innerHTML = "";
    this.$appliances.appendChild(
      new FilterBtn(this.appliances, "appliance").render()
    );
  }

  /* Update Ustensils */
  updateUstensils() {
    this.ustensils = Array.from(
      new Set(
        this.catalogueTaged
          .map((recipe) => recipe.ustensils)
          .reduce((prev, curr) => prev.concat(curr))
          .sort()
      )
    );

    this.$ustensils.innerHTML = "";
    this.$ustensils.appendChild(
      new FilterBtn(this.ustensils, "ustensil").render()
    );
  }

  /* Update recepies */
  updateRecipes = () => {
    const recipesWrapper = document.getElementById("recipes");
    recipesWrapper.innerHTML = "";
    this.catalogueTaged.forEach((recipe) => {
      new Recipe(recipe).render();
    });
  };

  /* Filter with searchBar */
  filter = (query) => {
    this.catalogueFiltred = this.catalogue.filter((recipe) => {
      return (
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.ingredients.some((ingredient) =>
          ingredient.ingredient.toLowerCase().includes(query)
        )
      );
    });
  };

  /* Filter with tags */
  tag = () => {
    if (
      this.ingredientsTags.length === 0 &&
      this.appliancesTags.length == 0 &&
      this.ustensilsTags.length === 0
    ) {
      this.catalogueTaged = this.catalogueFiltred;
    }

    /* Filter with ingredients Tags */
    if (this.ingredientsTags.length > 0) {
      this.ingredientsTags.map((tag) => {
        this.catalogueTaged = this.catalogueFiltred.filter((recipe) => {
          return recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(tag)
          );
        });
      });
    }

    /* Filter with appliances Tags */
    if (this.appliancesTags.length > 0) {
      this.appliancesTags.map((tag) => {
        this.catalogueTaged = this.catalogueFiltred.filter((recipe) => {
          return recipe.appliance.toLowerCase().includes(tag);
        });
      });
    }

    /* Filter with ustensils Tags */
    if (this.ustensilsTags.length > 0) {
      this.ustensilsTags.map((tag) => {
        this.catalogueTaged = this.catalogueFiltred.filter((recipe) => {
          return recipe.ustensils.some((ustensil) =>
            ustensil.toLowerCase().includes(tag)
          );
        });
      });
    }

    if (this.catalogueTaged.length == 0) {
      alert("Afficher un message à la place des recettes");
    } else {
      this.render();
    }
  };

  /* Render */
  render = () => {
    this.updateIngredients();
    this.updadateAppliances();
    this.updateUstensils();
    this.updateRecipes();
  };
}
