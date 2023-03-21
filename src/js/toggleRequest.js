const containerQuestions = document.getElementById('cards-question-container')

const cardList = [
  {
    id: "card-1",
    class: "card-question open",
    title: "How GSA Force/Aeronex is related to JetBlue?",
    response: "Aeronex is the exclusive representative of JetBlue cargo, and GSA Force does the sales and billing for Aeronex."
  },
  {
    id: "card-2",
    class: "card-question",
    title: "What is the cut of time for the JetBlue flights?",
    response: "4 hours cut off time for all flights."
  },
  {
    id: "card-3",
    class: "card-question",
    title: "Max dims?",
    response: "57x68x46 inches."
  },
  {
    id: "card-4",
    class: "card-question",
    title: "Max weight per piece?",
    response: "100 lbs max for seafood and 150 pounds for general cargo"
  },
  {
    id: "card-5",
    class: "card-question",
    title: "Max weight per flights?",
    response: "2,000 lbs per flight"
  },
  {
    id: "card-6",
    class: "card-question",
    title: "Does JetBlue cargo accept ULDs?",
    response: "No ULDs, only loose cargo"
  },
  {
    id: "card-7",
    class: "card-question",
    title: "Do you accept DGs?",
    response: "No, we don’t accept any kind of DG or UN"
  },
]

containerQuestions.innerHTML = cardList.map(card =>{
  let cardTemplate = `
    <div class="${card.class}" id="${card.id}">
      <div class="header-card d-flex">
        <p class="question-title p-3">${card.title}</p>
        <button onclick="toggleResquest('${card.id}')">
          <i class="bi bi-airplane-engines rotateIcon1"></i>
        </button>
      </div>
      <div class="body-card">
        <p class="p-3">${card.response}</p>
      </div>
    </div>`
  return cardTemplate
}).join("")

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