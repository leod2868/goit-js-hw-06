const megaCategories = document.querySelector('#categories');

const bigliEl = document.querySelectorAll('.item');

console.log('Number of categories:', bigliEl.length);


bigliEl.forEach((liel) => {
    const y = document.querySelector('.item > h2 ')
    const x = document.querySelectorAll( '.item > li ')
    console.log('Category:', y.textContent)
    console.log('Elements:', x.length  )
})
  
