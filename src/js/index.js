const toggleResquest = (e) =>{
  const nodo = document.getElementById(e)
  const p = nodo.children[1].children[0]
  const icon = nodo.children[0].children[1].children[0]

  if(nodo.classList.contains('open')){
    nodo.classList.remove('open')
    // p.setAttribute('style', 'color:transparent')
    // nodo.setAttribute('style', 'height: 65px')
    icon.setAttribute('class', 'bi bi-plus-lg')
  }else{
    nodo.classList.add('open')
    // p.removeAttribute('style')
    // nodo.removeAttribute('style')
    icon.setAttribute('class', 'bi bi-dash-lg')
  }
}