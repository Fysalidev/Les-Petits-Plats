class Catalogue {
    
    constructor(data){
        this.recipes = data
        this.ingredients
        this.ustensils
        this.appliances
        this.cardWrapper = document.getElementById("recipes")
        this.ingredientsWrapper = document.getElementById('ingredients-wrap')
        this.ustensilsWrapper = document.getElementById('ustensils-wrap')
        this.appliancesWrapper = document.getElementById('appliances-wrap')
        this.init()
        this.render()
    }

    init = () => {
    
        const ingredientsList = new Array()
        const ingredientsData = new Array()
        const ustensilsData = new Array()
        const appliancesData = new Array()
        

        this.recipes.forEach(recipe =>{
            ingredientsData.push(...recipe.ingredients)
            ustensilsData.push(... recipe.ustensils)
            appliancesData.push(recipe.appliance)   
        })


        ingredientsData.forEach(ingredient => {
        ingredientsList.push(ingredient.ingredient);
        });

        this.ingredients = Array.from(new Set(ingredientsList)).sort()
        this.ustensils = Array.from(new Set(ustensilsData)).sort()
        this.appliances = Array.from(new Set(appliancesData)).sort()
    
    }

    viewRecipes = () => {

        this.cardWrapper.innerHTML = ''

        this.recipes.forEach(recipe => {
            new Card(recipe).render()
        })
    }

    viewIngredients = () => {
        this.ingredientsWrapper.innerHTML = ''
        new FilterList(this.ingredients, this.ingredientsWrapper).render()
    }

    viewUstensils = () => {
        this.ustensilsWrapper.innerHTML = ''
        new FilterList(this.ustensils, this.ustensilsWrapper).render()
    }

    viewAppliances = () => {
        this.appliancesWrapper.innerHTML = ''
        new FilterList(this.appliances, this.appliancesWrapper).render()
    }

    render = () => {
        this.viewRecipes()
        this.viewIngredients()
        this.viewUstensils()
        this.viewAppliances()
    }
}