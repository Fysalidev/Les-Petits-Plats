const filterBtns = document.querySelectorAll('.filter-btn')
console.log(filterBtns)

filterBtns.forEach(filterBtn => {
    filterBtn.addEventListener('click', (e) => {
        console.log(e.target)
        if (e.target.className === 'fa-solid fa-chevron-down'){
            e.target.classList.replace('fa-chevron-down','fa-chevron-up')
        }else{
            e.target.classList.replace("fa-chevron-up", "fa-chevron-down");
        }

    })
})
