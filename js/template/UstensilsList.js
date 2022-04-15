class TagList {
  constructor(data, wrapper, tags, type) {
    this.type = type
    this.data = data
    this.tags = tags
    this.$wrapper = wrapper
  }

  render = () => {

    const ul = document.createElement('ul');
    ul.classList.add(`${this.type}-list`)

    this.data.forEach((data) => {
      const li = document.createElement("li");

      li.classList.add(`${this.type}`);
      li.innerHTML = data;

      /* EVENT - openTagsBtn */

      li.addEventListener("click", (e) => {
        const query = li.textContent

        catalogue.ingredientsTags.push(query)
        catalogue.ingredients.splice(catalogue.ingredients.indexOf(query), 1)
        catalogue.updateTagLists();
        new Tag(query, this.type).render()
      });

      ul.appendChild(li);
    });

    this.$wrapper.appendChild(ul);

  }

}