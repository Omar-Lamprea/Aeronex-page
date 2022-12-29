const btnDrop = document.getElementById('drop-main')
btnDrop.addEventListener('mouseover', (e) =>{
  $('.dropdown-toggle').dropdown('show')
})
btnDrop.addEventListener('mouseleave', (e) =>{
  $('.dropdown-toggle').dropdown('hide')
})


