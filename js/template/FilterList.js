class FilterList {
    constructor(data, wrapper){
        this.data = data
        this.$wrapper = wrapper
        this.filterListHtml = document.createElement('ul')
        
    }

    render = () => {
        
        let html =''

        this.data.forEach(data => {
            html += `<li>${data}</li>`
        });

        this.filterListHtml.innerHTML = html
        this.$wrapper.appendChild(this.filterListHtml) 
    }
    
}