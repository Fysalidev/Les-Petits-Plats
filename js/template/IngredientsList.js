class IngredientsList {
  constructor(data) {
    this.type = "ingredient"
    this.ingredients = data
    this.$wrapper = document.getElementById('ingredients-wrap')
    this.render()
  }

  render = () => {

    const ul = document.createElement('ul')
    ul.classList.add(`${this.type}-list`)

    this.ingredients.forEach((data) => {
      const li = document.createElement("li")

      li.classList.add(`${this.type}`)
      li.innerHTML = data;

      ul.appendChild(li);

      /* EVENT - openTagsBtn */

      li.addEventListener("click", (e) => {
        const query = li.textContent

        catalogue.ingredientsTags.push(query)
        catalogue.ingredients.splice(catalogue.ingredients.indexOf(query), 1)
        catalogue.buildIngredientsList()
        new Tag(query, this.type).render()
        console.log(catalogue.ingredientsTags)
        console.log(catalogue.ingredients)
      });

    });

    this.$wrapper.appendChild(ul);

  }

}