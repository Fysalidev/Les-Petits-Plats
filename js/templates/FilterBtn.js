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
            catalogue.ingredientsTags.push(tag);
            break;

          case "appliance":
            catalogue.appliancesTags.push(tag);
            break;

          case "ustensil":
            catalogue.ustensilsTags.push(tag);
            break;

          default:
            console.log("error : type not found");
            break;
        }
        catalogue.tag();
        new Tag(tag, this.type).render();
      });
    });

    return ul;
  };
}
