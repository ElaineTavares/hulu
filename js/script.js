let sectionDiversos = document.getElementById('diversos');
const sportsBtn = document.getElementById('sportsBtn');
const newsBtn = document.getElementById('newsBtn');
const eventsBtn = document.getElementById('eventsBtn');
let diversosH2 = document.querySelector('.diversosH2');
let diversosP = document.querySelector('.diversosP');
let icone1 = document.getElementById('icone1');
let icone2 = document.getElementById('icone2');
let icone3 = document.getElementById('icone3');
let icone4 = document.getElementById('icone4');
const containerBtn = document.getElementById('containerBtn');
let containerHidden = document.getElementById('containerHidden');


sportsBtn.addEventListener('click', () => {
    event.preventDefault();
    sectionDiversos.style.backgroundImage="url(../img/sport-background.jpg)";//ALTERAR BACKGROUND IMAGE
    diversosH2.innerHTML = `Live Sports`;//ALTERAR TEXTO
    diversosP.innerHTML = `Catch your games at home or on the go. Stream live games from major college and pro leagues.`
    icone1.setAttribute('src', '../img/sport-icone1.png');//ALTERAR IMAGEM DO ATRIBUTO SRC
    icone2.setAttribute('src', '../img/sport-icone2.png');
    icone3.setAttribute('src', '../img/sport-icone3.svg');
    icone4.setAttribute('src', '../img/sport-icone4.png');
   

    if(newsBtn.classList == 'active' || eventsBtn.classList == 'active'){
        newsBtn.classList.remove('active');//REMOVE CLASSE
        eventsBtn.classList.remove('active');
        sportsBtn.classList.add('active');//ADICIONA CLASSE
    }
})

newsBtn.addEventListener('click', () => {
    event.preventDefault();
    sectionDiversos.style.backgroundImage="url(../img/news-background.jpg)";
    diversosH2.innerHTML = `Breaking News`;
    diversosP.innerHTML = `Keep pace with what's going on locally and globally with trusted opinions from all the top news networks.`
    icone1.setAttribute('src', '../img/news-icone1.png');
    icone2.setAttribute('src', '../img/news-icone2.svg');
    icone3.setAttribute('src', '../img/news-icone3.png');
    icone4.setAttribute('src', '../img/news-icone4.svg');
   

    if(sportsBtn.classList == 'active' || eventsBtn.classList == 'active'){
        sportsBtn.classList.remove('active');
        eventsBtn.classList.remove('active');
        newsBtn.classList.add('active');
    }
})

eventsBtn.addEventListener('click', () => {
    event.preventDefault();
    sectionDiversos.style.backgroundImage="url(../img/events-background.jpg)";
    diversosH2.innerHTML = `Biggest Events`;
    diversosP.innerHTML = `Spectacular, can't-miss moments like the Olympics, Grammys®, Oscars®, Emmys®, and more.`
    icone1.setAttribute('src', '../img/events-icone1.png');
    icone2.setAttribute('src', '../img/events-icone2.png');
    icone3.setAttribute('src', '../img/events-icone3.png');
    icone4.setAttribute('src', '../img/eventos-icone4.png');
    
    if(sportsBtn.classList == 'active' || newsBtn.classList == 'active'){
        sportsBtn.classList.remove('active');
        newsBtn.classList.remove('active');
        eventsBtn.classList.add('active');
    }
})


containerBtn.addEventListener('click', () =>{
    event.preventDefault();
    if(containerHidden.style.display === 'none'){
        containerHidden.style.display = 'block';
        containerBtn.innerHTML = `Hide Add-ons<i class="bi bi-chevron-up"></i>`;
    } else {
        containerHidden.style.display = 'none';
        containerBtn.innerHTML = `Show Add-ons<i class="bi bi-chevron-down"></i>`;
    } 
})


const myObserver = new IntersectionObserver ((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting === true){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
    })
});

const elements = document.querySelectorAll('.escondido')

elements.forEach((element) => myObserver.observe(element))




