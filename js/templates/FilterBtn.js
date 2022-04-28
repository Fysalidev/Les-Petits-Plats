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

      /* EVENT | create TagBtn */
      li.addEventListener("click", (e) => {
        const tag = li.textContent.toLowerCase();
        const arrowBtn = e.target.parentElement.parentElement.previousElementSibling.lastElementChild.firstElementChild;
        
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
        catalogue.toggleFilterBtn(arrowBtn);
        new TagBtn(tag, this.type).render();
      });
    });

    return ul;
  };
}
