class Tag {
    constructor(name, type){
        this.name = name
        this.type = type
    }

    render(){
        
        /* HTML - TagCloseBtn */

        const $wrapper = document.getElementById('tag-container');

        const $tagWrapper = document.createElement('div')
        const $divWording = document.createElement('div')
        const $divCloseTag = document.createElement('div')

        $tagWrapper.classList.add('tag',`tag-${this.type}`);
        $divWording.classList.add("tag-wordin");
        $divCloseTag.classList.add("tag-wording");

        $divWording.innerHTML = `<span class="wording">${this.name}</span>`
        $divCloseTag.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        
        $tagWrapper.appendChild($divWording)
        $tagWrapper.appendChild($divCloseTag)
        $wrapper.appendChild($tagWrapper)

        /* EVENT - closeTagBtn */

        $divCloseTag.addEventListener('click',(e) => {
            catalogue.ingredientsTags.splice(catalogue.ingredientsTags.indexOf(this.name),1)
            catalogue.ingredients.push(this.name)
            catalogue.ingredients.sort()
            catalogue.buildIngredientsList()
            e.target.parentElement.parentElement.remove()
        })

    }
}
