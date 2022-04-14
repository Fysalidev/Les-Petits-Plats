class TagList {
    constructor(data, wrapper, type){
        this.data = data
        this.$wrapper = wrapper
        this.type = type
    }

    render = () => {
        
        const ul = document.createElement('ul');
        ul.classList.add(`${this.type}-list`)

        this.data.forEach((data) => {
          const li = document.createElement("li");

          li.classList.add(`${this.type}`);
          li.innerHTML = data;
         
          /* Mettre à jour le catalogue */

          li.addEventListener("click", (e) => {
            const query = li.textContent
            catalogue.tags.push(query)
            new Tag(catalogue, query).render()
            console.log(catalogue.tags)

          });

          ul.appendChild(li);
        });

        this.$wrapper.appendChild(ul);
       
    }
    
}