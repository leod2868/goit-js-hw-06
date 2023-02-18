

const bigliEl = document.querySelectorAll('.item');

console.log('Number of categories:', bigliEl.length);


bigliEl.forEach((liel) => {
    const liTitle = liel.querySelector(' h2 ')
    const liLi = liel.querySelectorAll( ' li ')
    console.log('Category:', liTitle.textContent)
    console.log('Elements:', liLi.length  )
})
  
