const toggleResquest = (e) =>{
  // const p = nodo.children[1].children[0]
  const nodo = document.getElementById(e)
  const icon = nodo.children[0].children[1].children[0]

  if(nodo.classList.contains('open')){
    nodo.classList.remove('open')
    icon.classList.remove('rotateIcon1')
    icon.classList.add('rotateIcon2')
  }else{
    nodo.classList.add('open')
    icon.classList.remove('rotateIcon2')
    icon.classList.add('rotateIcon1')
  }
}