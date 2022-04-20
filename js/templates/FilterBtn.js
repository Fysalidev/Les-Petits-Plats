class FilterBtn {
  constructor(data, type) {
    this.type = type;
    this.data = data;
  }

  render = () => {

    /* HTML - FilterBtn */

    const ul = document.createElement("ul");
    ul.classList.add(`${this.type}-list`);

    this.data.forEach((data) => {
      const li = document.createElement("li");
      li.classList.add(`${this.type}`);
      li.innerHTML = data;
      ul.appendChild(li);

      /* EVENT - openTagsBtn */

      li.addEventListener("click", (e) => {
        const tag = li.textContent.toLowerCase();
        switch (this.type) {
          case "ingredient":
            console.log(catalogue.ingredientsTags)
            catalogue.ingredientsTags.push(tag);
            console.log(catalogue.ingredientsTags)
            catalogue.filterWithIngredientTag();
            break;

          case "appliance":
            catalogue.appliancesTags.push(tag);
            catalogue.filterWithApplianceTag();
            break;

          case "ustensil":
            catalogue.ustensilsTags.push(tag);
            catalogue.filterWithUstensilTag();
            break;

          default:
            console.log("error : type not found");
            break;
        }
        new Tag(tag, this.type).render();
      });
    });

    return ul;

  };
}
