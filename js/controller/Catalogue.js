class Catalogue {
    constructor(data) {
        this.catalogue = data;
        this.catalogueFiltred = data;
        this.ingredients;
        this.ustensils;
        this.appliances;
        this.tags = []
        this.cardWrapper = document.getElementById("recipes");
        this.ingredientsWrapper = document.getElementById("ingredients-wrap");
        this.ustensilsWrapper = document.getElementById("ustensils-wrap");
        this.appliancesWrapper = document.getElementById("appliances-wrap");
        this.searchBar();
        this.updateTagBtn()
        
        this.render();
    }
    /* Mise en place de la bar de recherche */
    searchBar = () => {
        const searchBar = document.getElementById("search-bar");

        searchBar.addEventListener("keyup", () => {
            const query = searchBar.value.toLowerCase();
            console.log(query);
            console.log(query.length);

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

            console.log(this.catalogueFiltred);
            this.render();
        });
    };
    /* Mise à jour des boutons tag */
    updateTagBtn = () => {
        const ingredientsList = new Array();
        const ingredientsData = new Array();
        const ustensilsData = new Array();
        const appliancesData = new Array();

        this.catalogueFiltred.forEach((recipe) => {
            ingredientsData.push(...recipe.ingredients);
            ustensilsData.push(...recipe.ustensils);
            appliancesData.push(recipe.appliance);
        });

        ingredientsData.forEach((ingredient) => {
            ingredientsList.push(ingredient.ingredient);
        });

        this.ingredients = Array.from(new Set(ingredientsList)).sort();
        this.ustensils = Array.from(new Set(ustensilsData)).sort();
        this.appliances = Array.from(new Set(appliancesData)).sort();

        console.log(this.ustensils)
        console.log(this.appliances)

        this.ingredientsWrapper.innerHTML = "";
        this.ustensilsWrapper.innerHTML = "";
        this.appliancesWrapper.innerHTML = "";

        new TagList(this.ingredients,this.ingredientsWrapper,"ingredient").render();
        new TagList(this.ustensils, this.ustensilsWrapper, "ustensil").render();
        new TagList(this.appliances, this.appliancesWrapper, "appliance").render();
    };
    /* Mise à jour des recettes */
    updateRecipes = () => {
        this.cardWrapper.innerHTML = "";

        this.catalogueFiltred.forEach((recipe) => {
            new Recipe(recipe).render();
        });
    };

    render = () => {
        this.updateTagBtn();
        this.updateRecipes();
    };
}
