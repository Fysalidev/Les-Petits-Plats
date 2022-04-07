class Catalogue {
    
    constructor(data){
        this.recipes = data
        this.ingredients;
        this.ustensils;
        this.appliances;
        this.init()
    }

    init = () => {
    
    const ingredientsData = new Array()
    const ustensilsData = new Array()
    const appliancesData = new Array()
    

    recipes.forEach(recipe =>{
        ingredientsData.push(...recipe.ingredients)
        ustensilsData.push(... recipe.ustensils)
        appliancesData.push(recipe.appliance)   
    })

    const ingredientsList = new Array();

    ingredientsData.forEach(ingredient => {
      ingredientsList.push(ingredient.ingredient);
    });

    this.ingredients = Array.from(new Set(ingredientsList)).sort()
    this.ustensils = Array.from(new Set(ustensilsData)).sort()
    this.appliances = Array.from(new Set(appliancesData)).sort()
    
    }
 
}