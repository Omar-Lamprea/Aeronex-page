const alliesList = [
  {
    img: "./img/allies-Logo DJ.png",
    link: "https://djcargo.com/",
    stations: "STI - SDQ"
  },
  {
    img: "./img/allies-LOG - WFS CMJN.png",
    link: "https://www.wfs.aero/",
    stations: ""
  },
  {
    img: "./img/allies-AG Logo Cargo.png",
    link: "https://airgeneral.com/",
    stations: "FLL - TPA - MCO - ORD"
  },
  {
    img: "./img/allies-JetBlueLogo.png",
    link: "https://www.jetblue.com/",
    stations: ""
  },
  {
    img: "./img/allies-LOGO_GSA_FORCE.png",
    link: "https://gsaforce.com/",
    stations: ""
  },
  {
    img: "./img/allie-alliance-logo.svg",
    link: "https://www.allianceairlines.com.au/",
    stations: "MIA - JFK - EWR - ATL - SFO - LAX - LAS"
  },
  {
    img: "./img/allies-GMD-LOGO.png",
    link: "https://www.gmdpr.com/",
    stations: ""
  },
  
  {
    img: "./img/allies-ESCM LOGO.png",
    link: "https://www.eckertseamans.com/",
    stations: ""
  },
  {
    img: "./img/allies-IBS-Logo.png",
    link: "https://www.ibsplc.com/",
    stations: ""
  },
  {
    img: "./img/allies-Logo-Altitute.png",
    link: "https://www.tenaciousaltitude.com/",
    stations: ""
  },
  
]
const alliesContainer = document.getElementById('container-allies')
if(alliesContainer){
  alliesContainer.innerHTML = alliesList.map(allie =>{
    let allieTemplate = `
      <a href="${allie.link}" target="_blank" rel="noopener noreferrer">
        <img src="${allie.img}" alt="">
        <p class="allie-stations">${allie.stations}</p>
      </a>`
    return allieTemplate
  }).join("")
}