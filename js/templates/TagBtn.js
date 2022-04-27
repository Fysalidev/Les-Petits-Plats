class TagBtn {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }

  render() {
    /* HTML - TagCloseBtn */

    const $wrapper = document.getElementById("tag-container");

    const $tagWrapper = document.createElement("div");
    const $divWording = document.createElement("div");
    const $divCloseTag = document.createElement("div");

    $tagWrapper.classList.add("tag", `tag-${this.type}`);
    $divWording.classList.add("tag-wordin");
    $divCloseTag.classList.add("tag-wording");

    $divWording.innerHTML = `<span class="wording">${this.name}</span>`;
    $divCloseTag.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;

    $tagWrapper.appendChild($divWording);
    $tagWrapper.appendChild($divCloseTag);
    $wrapper.appendChild($tagWrapper);

    /* EVENT - close TagBtn */

    $divCloseTag.addEventListener("click", (e) => {
      switch (this.type) {
        case "ingredient":
          catalogue.ingredientsTags.splice(
            catalogue.ingredientsTags.indexOf(this.name),
            1
          );
          break;

        case "appliance":
          catalogue.appliancesTags.splice(
            catalogue.appliancesTags.indexOf(this.name),
            1
          );
          break;

        case "ustensil":
          catalogue.ustensilsTags.splice(
            catalogue.ustensilsTags.indexOf(this.name),
            1
          );
          break;

        default:
          console.log("error : type not found");
          break;
      } // end switch

      e.target.parentElement.parentElement.remove();
      catalogue.tag();
    });
  }
}
