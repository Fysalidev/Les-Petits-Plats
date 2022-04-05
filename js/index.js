console.log(recipes)


// Appliances

let tabAppliances = []

recipes.forEach(recipe => {
    tabAppliances.push(recipe.appliance)
})

console.log(tabAppliances)
const appliancesSet = new Set(tabAppliances)
console.log(appliancesSet)
const appliances = Array.from(appliancesSet).sort()
console.log(appliances)

// Ustensils

let tabUstensils =[]

recipes.forEach(recipe =>{
    console.log(... recipe.ustensils)
    tabUstensils.push(... recipe.ustensils)   
})

console.log(tabUstensils)
const ustensilsSet = new Set(tabUstensils)
const ustensils = Array.from(ustensilsSet).sort()
console.log(ustensils)

// ingredients

let ingredients = new Array()

recipes.forEach(recipe => {
    ingredients.push(...recipe.ingredients)
})

console.log(ingredients)

let test = new Array()

ingredients.forEach(item => {
    test.push(item.ingredient)
})

console.log(test)



