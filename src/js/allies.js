const alliesList = [
  {
    img: "./img/allies-Logo DJ.png",
    link: "https://djcargo.com/"
  },
  {
    img: "./img/allies-LOG - WFS CMJN.png",
    link: "https://www.wfs.aero/"
  },
  {
    img: "./img/allies-AG Logo Cargo.png",
    link: "https://airgeneral.com/"
  },
  {
    img: "./img/allies-JetBlueLogo.png",
    link: "https://www.jetblue.com/"
  },
  {
    img: "./img/allies-LOGO_GSA_FORCE.png",
    link: "https://gsaforce.com/"
  },
  {
    img: "./img/allies-GMD-LOGO.png",
    link: "https://www.gmdpr.com/"
  },
  {
    img: "./img/allies-GRAN-LOGO.png",
    link: "https://www.gmdpr.com/services/gran-contractors"
  },
  {
    img: "./img/allies-Fortune-Logo.png",
    link: "https://www.gmdpr.com/services/fortune"
  },
]
const alliesContainer = document.getElementById('container-allies')
if(alliesContainer){
  alliesContainer.innerHTML = alliesList.map(allie =>{
    let allieTemplate = `
      <a href="${allie.link}" target="_blank" rel="noopener noreferrer">
      <img src="${allie.img}" alt="">
      </a>`
    return allieTemplate
  }).join("")
}