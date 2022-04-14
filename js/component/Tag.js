class Tag {
    constructor(Catalogue, name){
        this.catalogue = Catalogue
        this.name = name
    }

    render(){

        const $wrapper = document.getElementById('tag-container');

        const $tagWrapper = document.createElement('div')
        const $divWording = document.createElement('div')
        const $divCloseTag = document.createElement('div')

        $tagWrapper.classList.add('tag', 'tag-ingredient');
        $divWording.classList.add("tag-wordin");
        $divCloseTag.classList.add("tag-wording");

        $divWording.innerHTML = `<span class="wording">${this.name}</span>`
        $divCloseTag.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        
        $tagWrapper.appendChild($divWording)
        $tagWrapper.appendChild($divCloseTag)
        $wrapper.appendChild($tagWrapper)

        $divCloseTag.addEventListener('click',(e) => {
            
            const index = this.catalogue.tags.indexOf(this.name)
            this.catalogue.tags.splice(this.catalogue.tags.indexOf(this.name),1)
            console.log(this.catalogue.tags)
            e.target.parentElement.parentElement.remove()
        })
    }
}
