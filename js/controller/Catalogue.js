class Catalogue {
  constructor(data) {
    this.$recipes = document.getElementById("recipes");
    this.$ingredients = document.getElementById("ingredients-wrap");
    this.$appliances = document.getElementById("appliances-wrap");
    this.$ustensils = document.getElementById("ustensils-wrap");
    this.$tagsFilterBtn = document.querySelectorAll(".search-btn");
    this.$ingredientSearchInput = document.getElementById("ingredient-filter-btn");
    this.$applianceSearchInput = document.getElementById("appliance-filter-btn");
    this.$ustensilSearchInput = document.getElementById("ustensil-filter-btn");
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
    this.tagsFilterBtn();
    this.tag();
  };

  /* Init searchBar */
  searchBar = () => {
    const $searchBar = document.getElementById("search-bar");
    $searchBar.addEventListener("keyup", (e) => {
      const query = e.target.value;
      if (e.target.value.length > 2) {
        this.filter(query.toLowerCase());
        this.tag();
      } else {
        this.catalogueFiltred = this.catalogue;
        this.tag(this.catalogueFiltred);
      }
    });
  };

  /* Init tagsFilterBtn */

  toggleBtn = (elemBtn) => {
    if (elemBtn.className === "fa-solid fa-chevron-down") {
          elemBtn.classList.replace("fa-chevron-down", "fa-chevron-up");
          elemBtn.parentNode.parentNode.nextElementSibling.classList.replace(
            "list-hidden",
            "list-show"
          );
        } else {
          elemBtn.classList.replace("fa-chevron-up", "fa-chevron-down");
          elemBtn.parentNode.parentNode.nextElementSibling.classList.replace(
            "list-show",
            "list-hidden"
          );
        }
  }

  tagsFilterBtn = () => {

    /* Arrow Btn */

    this.$tagsFilterBtn.forEach((tagsFilterBtn) => {
      const arrowBtn = tagsFilterBtn.lastElementChild.firstChild;
      arrowBtn.addEventListener("click", (e) => {
        this.toggleBtn(e.target);
      });
    });

    /* Filter Ingredient List with InputBtn */

    this.$ingredientSearchInput.addEventListener("keyup", (e) => {
      if (e.target.value.length > 0) {
        const ingredientsListFiltred = this.ingredients.filter((items) =>
          items.toLowerCase().includes(e.target.value.toLowerCase())
        );

        this.$ingredients.innerHTML = "";
        this.$ingredients.appendChild(
          new FilterBtn(ingredientsListFiltred, "ingredient").render()
        );

      } else {
        this.$ingredients.innerHTML = "";
        this.$ingredients.appendChild(
          new FilterBtn(this.ingredients, "ingredient").render()
        );
      }
    });

    /* Filter Appliance List with InputBtn */

    this.$applianceSearchInput.addEventListener("keyup", (e) => {
      if (e.target.value.length > 0) {
        const appliancesListFiltred = this.appliances.filter((items) =>
          items.toLowerCase().includes(e.target.value.toLowerCase())
        );

        this.$appliances.innerHTML = "";
        this.$appliances.appendChild(
          new FilterBtn(appliancesListFiltred, "appliance").render()
        );

      } else {
        this.$appliances.innerHTML = "";
        this.$appliances.appendChild(
          new FilterBtn(this.appliances, "appliance").render()
        );
      }
    });

    /* Filter Appliance List with InputBtn */

    this.$ustensilSearchInput.addEventListener("keyup", (e) => {
      if (e.target.value.length > 0) {
        const ustensilsListFiltred = this.ustensils.filter((items) =>
          items.toLowerCase().includes(e.target.value.toLowerCase())
        );

        this.$ustensils.innerHTML = "";
        this.$ustensils.appendChild(
          new FilterBtn(ustensilsListFiltred, "ustensil").render()
        );
        
      } else {
        this.$ustensils.innerHTML = "";
        this.$ustensils.appendChild(
          new FilterBtn(this.ustensils, "ustensil").render()
        );
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

    this.catalogueTaged = this.catalogueFiltred;

    /* Filter with ingredients Tags */
    if (this.ingredientsTags.length > 0) {
      this.ingredientsTags.map((tag) => {
        this.catalogueTaged = this.catalogueTaged.filter((recipe) => {
          return recipe.ingredients.some((ingredient) =>
            ingredient.ingredient.toLowerCase().includes(tag)
          );
        });
      });
    }

    /* Filter with appliances Tags */
    if (this.appliancesTags.length > 0) {
      this.appliancesTags.map((tag) => {
        this.catalogueTaged = this.catalogueTaged.filter((recipe) => {
          return recipe.appliance.toLowerCase().includes(tag);
        });
      });
    }

    /* Filter with ustensils Tags */
    if (this.ustensilsTags.length > 0) {
      this.ustensilsTags.map((tag) => {
        this.catalogueTaged = this.catalogueTaged.filter((recipe) => {
          return recipe.ustensils.some((ustensil) =>
            ustensil.toLowerCase().includes(tag)
          );
        });
      });
    }

    if (
      this.ingredientsTags.length === 0 &&
      this.appliancesTags.length === 0 &&
      this.ustensilsTags.length === 0
    ) {
      this.render();
    }

    if (this.catalogueTaged.length === 0) {
      const alert = document.createElement("div");
      const p = document.createElement("p");
      alert.id = "alert";
      p.textContent =
        "« Aucune recette ne correspond à votre critère... vous pouvez chercher « tarte aux pommes »";
      alert.appendChild(p);
      this.$recipes.innerHTML = "";
      this.$recipes.appendChild(alert);
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
