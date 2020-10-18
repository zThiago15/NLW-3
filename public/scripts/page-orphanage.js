const options = { /* Vou desabilitar a movimentação do mapa, irei passar como argumento na const map */
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false, /* Scrool do mouse */
    zoomControl: false,
}

// get values from html
const lat = document.querySelector('span[data-lat]').dataset.lat
const lng = document.querySelector('span[data-lng]').dataset.lng

// create map
const map = L.map('mapid', options).setView([lat,lng], 15); 


// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' ).addTo(map); //Toda a propriedade tileLayer será adicionado a variável map

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
}) 

//create and add marker
L
.marker([lat, lng], { icon }) 
.addTo(map)

/* image galley */
function selectImage(event) {
    const button = event.currentTarget
     // console.log -> objeto com a funcionalidade log, que escreve algo. Alvo atual que dispara o evento é o botão

    console.log(button.children) // Filhos do botão, só 1: a imagem

    // remover todas as classes .active (que é só 1), para isso andaremos em todos os botões e removeremos se tiver essa classe
    const buttons = document.querySelectorAll(".images button") // query é a busca e irá selecionar todo o argumento que eu colocar
    buttons.forEach(removeActiveClass) // Para cada botão, executa a funcionalidade removeActiveClass

    function removeActiveClass(button) {
        button.classList.remove("active") /* Não preciso colocar o . de classe, pois a propriedade classList já verifica as classes e depois as remove */
    }

    // Quando eu criar uma function e colocar algo dentro das  { } irei criar um novo contexto pras coisas, então mesmo se eu tiver o mesmo de uma variável
    // do lado de fora, não irá interferir pois são diferentes. 

    /* Também podemos colocar funções dentro, uma maneira curta de colocar uma função sem nome é digitando () => {}, chamada arrow function */


    // console.log(buttons) 
    // Irá mostrar o NodeList que é parecido com o array pois uma lista de 0 até o total de objetos. Ele tem funcionalidades que você 
    // vê no __proto__


    // selecionar a imagem clicada
    const image = button.children[0] 
    const imageContainer = document.querySelector(".orphanage-details > img") //Irá pegar o primeiro nível de img que achar

    // atualizar o container de imagem
    imageContainer.src = image.src //É como o src do HTML, é onde está a imagem

    // adicionar a classe .active para este botão que foi clicado
    button.classList.add('active')
}