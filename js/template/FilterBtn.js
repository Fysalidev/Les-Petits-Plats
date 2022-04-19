class FilterBtn {
  constructor(data, type) {
    this.type = type
    this.data = data
  }

  render = () => {

    const ul = document.createElement('ul')
    ul.classList.add(`${this.type}-list`)

    this.data.forEach((data) => {
      
      const li = document.createElement("li")
      li.classList.add(`${this.type}`)
      li.innerHTML = data;
      ul.appendChild(li);

      /* EVENT - openTagsBtn */
      
      switch (this.type) {
        
        case "ingredient":
          li.addEventListener('click', (e) => {
            const tag = li.textContent.toLocaleLowerCase()
            catalogue.filterWithIngredientTag(tag)
            new Tag(tag, this.type).render()
          })
        break;

        case "appliance":
          li.addEventListener('click', (e) => {
            const tag = li.textContent.toLocaleLowerCase()
            catalogue.filterWithApplianceTag(tag)
            new Tag(tag, this.type).render()
          })
        break;

        case "ustensil":
          li.addEventListener('click', (e) => {
            const tag = li.textContent.toLocaleLowerCase()
            catalogue.filterWithUstensilTag(tag)
            new Tag(tag, this.type).render()
          })
        break;

        default:
          console.log("error : type not found")
        break;
      }
      
    });

    return ul

  }

}