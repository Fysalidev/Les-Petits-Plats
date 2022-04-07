class Card {
  constructor() {
    this.recipes = catalogue.recipes;
    this.ingredients = catalogue.ingredients;
    this.$cardWrapper = document.getElementById('recipes')
    this.cardBuild()
  }

  startHtmlCardBuilder = () => {
    alert('start')
    console.log(this.recipes)
    console.log(this.ingredients)
    let html = `
        <li>
            <article class="card-container">
                <div class="card_image-container">
                </div>
                <div class="card_items-container">
                    <div class="card_items-title">
                        <h3 class="recipe-title">${this.recipes.name}</h3>
                        <p>
                            <span class="clock">
                                <i class="fa-regular fa-clock"></i>
                            </span>
                            <span class="recipe-duration">
                                ${this.recipes.duration}
                            </span>
                        </p>
                    </div>
                    <div class="card_items-recipe">
                        <ul class="recipes_ingredients-list">
    `

    console.log(html)

    return html;
  };

  ingredientsHtmlBuilder = () => {
        
        let html =''
        
        this.ingredients.forEach((obj) => {

            console.log(obj)

            html +='<li>'
        
            if (obj.hasOwnProperty('ingredient')) {
                html += `<span class="ingredient">${obj.ingredient}</span>`
            }
            
            if (obj.hasOwnProperty('quantity')){
                html += `<span class="ingredient">${obj.quantity}</span>`
            }
            
            if (obj.hasOwnProperty('unit')){
                html += `<span class="ingredient">${obj.quantity}</span>`
            }
            
            html +='</li>'

        } )

        return html

    }

  endHtmlBuilder = () => {
    alert('end')
    const html = `
            </ul>
            <div class="recipe_description">
              <p>
                ${this.recipes.description}
              </p>
            </div>
          </div>
        </div>
      </article>
    </li>
  `
    console.log(html)
    return html;
  };

  cardBuild = () => {

    this.$cardWrapper.innerHTML = ''

    let html = ''
    html += this.startHtmlCardBuilder()
    html += this.ingredientsHtmlBuilder()
    html += this.endHtmlBuilder()

    console.log(html)

   this.$cardWrapper = html

  }
}
