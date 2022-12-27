const nodo = document.getElementById('carouser-handler')


const tbnHandlerDesk = 6
const tbnHandlerMobile = 17

const dataDesktop = [
  [
    {
      name: 'Patricio Sepúlveda',
      cargo: 'Co-founder & CEO',
      photo: './img/team1.png',
      desc: 'Profesional en economía y ________, cuenta con más de 47 años de experiencia en diferentes cargos directivos en el sector aéreo y aeronáutico y es nuestro fundador y CEO.',
    },
    {
      name: 'Camila Restrepo',
      cargo: 'Admin & Financial Controller',
      photo: './img/team3.png',
      desc: 'Profesional en comunicación y relaciones públicas, con más de 16 años de experiencia en el sector gremial aeronáutico y aéreo.',
    },
    {
      name: 'Christian Rendel',
      cargo: 'Planning Director',
      photo: './img/team2.jpg',
      desc: 'Ingeniero Industrial y mecánico, con más de 11 años de experiencia en general y 3 años de experiencia en el manejo y desarrollo de plataformas tecnológicas para el sector aéreo.',
    },
  ],
  [
    {
      name: 'Roberto Ilanes',
      cargo: 'Head of Operation',
      photo: './img/team5.png',
      desc: 'Profesional con más de 40 años de experiencia en operaciones en el sector aéreo.',
    },
    {
      name: 'Frank Jerez',
      cargo: 'OCC Manager',
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png",
      desc: 'Profesional con más de 25 años de experiencia en el sector aéreo en diferentes roles. ',
    },
    {
      name: 'Ignacio Gómez',
      cargo: 'Contract & Compliance Manager',
      photo: './img/team4.png',
      desc: 'Ingeniero en telecomunicaciones, con maestría en comunidades europeas, con más de 25 años de experiencia en temas administrativos, contractuales y operativos en el sector aéreo.',
    },
  ],
  [
    {
      name: 'Angela María Angarita',
      cargo: 'Business Analyst',
      photo: './img/team7.png',
      desc: 'Ingeniera Industrial, con 4 años de experiencia en general y 1 año de experiencia en el sector de transporte aéreo de carga.',
    },
    {
      name: 'Luisa Flórez G',
      cargo: 'Quality Manager',
      photo: './img/team6.png',
      desc: 'Abogado comercial y corporativo, con más de 15 años de experiencia en el sector aéreo y 2 años de experiencia como Project manager e implementación de sistemas de gestión de calidad.',
    },
    {
      name: 'Inalvis Santana',
      cargo: 'Accountant',
      photo: './img/team9.png',
      desc: 'Economista, con más de 13 años de experiencia en temas contables, financieros e impuestos en el sector servicios.',
    },
  ],
  [
    {
      name: 'Mohamed Abdelaziz',
      cargo: 'Finance Manager Reconciliations',
      photo: './img/team8.png',
      desc: 'Profesional en contabilidad con más de 11 años de experiencia en temas financieros en el sector aéreo y gremial aeronáutico. ',
    },
    {
      name: 'Carla Schoo Lastra',
      cargo: 'Revenue & Commercial Manager',
      photo: './img/team12.jpg',
      desc: 'Profesional en ingeniera comercial con 7 años de experiencia laboral en Ventas, Marketing y Control de Gestión y 1 año de experiencia en el sector aéreo.',
    },
    {
      name: 'Paola García',
      cargo: 'Accounting Assistant',
      photo: './img/team10.png',
      desc: 'Técnico en contabilidad, con 8 años de experiencia en diferentes roles y sectores de la economía. ',
    },
  ],
  [
    {
      name: 'Thais Bordarampe',
      cargo: 'Claim Analyst',
      photo: './img/team11.png',
      desc: 'Profesional en relaciones públicas, con experiencia de 7 años en el sector servicios. ',
    },
    {
      name: 'Soledad Espinosa',
      cargo: 'Operations Controller',
      photo: './img/team13.png',
      desc: 'Profesional en Sicología, con más de 20 años de experiencia en el sector servicios y aéreo.',
    },
    {
      name: 'Leonardo Chifelle',
      cargo: 'Operations Controller',
      photo: './img/team14.png',
      desc: 'Profesional en diseño gráfico y administración, con más de 23 años de experiencia en diferentes roles en el sector aéreo. ',
    },
  ],
  [
    {
      name: 'Vicente Lobos',
      cargo: 'Operations Controller',
      photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1200px-User-avatar.svg.png",
      desc: 'Profesional con 30 años de experiencia en el sector aéreo en diferentes roles.',
    },
    {
      name: 'Juan Carlos Rodríguez',
      cargo: 'Operations Controller',
      photo: './img/team15.png',
      desc: 'Profesional en administración de empresas, cuenta con más de 25 años de experiencia en  la industria aérea desempeñando diferentes roles tales como manejo en rampa, servicio a pasajeros, manejo de carga.  ',
    },
  ],
  
]



dataDesktop.forEach((list, i )=> {
  const container = 
    `<div class="carousel-item">
      <div class="d-lg-flex" id=item-${i}>

      </div>
    </div>`
  
  nodo.innerHTML += container
  i == 0 ? nodo.firstElementChild.classList.add('active') : false
    // console.log(list);

  list.forEach(user => {
    const userNodo = document.getElementById(`item-${i}`)
    
    const userContainer = 
      `<div class="employee">
        <div class="hexagon-container">
          <div class="hexagon">
            <i class="bi bi-hexagon-fill">
              <div class="hexagon-content">
                <img src="${user.photo}" alt="img">
              </div>
            </i>
          </div>
        </div>
        <div class="data-employee text-center">
          <p class="employee-name">${user.name}</p>
          <p class="employment-name">${user.cargo}</p>
          <p class="employee-description">${user.desc}</p>
        </div>
      </div>`
      user.name ? userNodo.innerHTML += userContainer : false
  });
});