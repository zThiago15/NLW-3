// create map
const map = L.map('mapid').setView([-23.610573,-46.4989772], 13); // O objeto 'L' só existe na biblioteca
// 1 valor do array é a latitude e o 2 é a longitude, e o valor fora do Array é o zoom do mapa

// Update: mudei as coordenadas para SP

// create and add tileLayer
L.tileLayer(//A propriedade tyleLayer têm 2 argumentos: o 1 é uma string e o 2 é um objeto que 
    // tem a propriedade 'attribution' que tem um botão com link, mas não precisamos dele.
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' 
    /*
    {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    } 
    */
).addTo(map); //Toda a propriedade tileLayer será adicionado a variável map

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
}) //Dentro da funcionalidade icon temos um objeto que recebe propriedades e tem seus valores

function addMarker({id, name, lat, lng}){ //Estou colocando orphanage como objeto e pegando todos os dados nele como id, name, latitude.. etc.


    // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240,
    }).setContent(`${name} <a href="orphanage?id=${id}"><img src="/images/arrow-white.svg"> </a>`) //coloca o conteúdo que é o popup da imagem que temos  na pasta

    //Usamos a crase para colocar variáveis dentro, isso é chamado de template strings ou template literals

    //create and add marker
    L
    .marker([lat, lng], { icon }) //um objeto com um mesmo nome de uma propriedade pode colocar só o nome
    .addTo(map) //Adicionar o Marcador no mapa
    .bindPopup(popup) //Ligar o marcador com o popup(mensagem que aparece encima do balão)
    // .openPopup(); //Abrir popup. E o ';' fica sempre no final de uma instrução, então sempre que você ver um '.'
    // você sabe que ele está ligado a um objeto, mas você pode tirá-lo se quiser que normalmente não estraga o código
}

const orphanagesSpan = document.querySelectorAll('.orphanages span')
 
//Pegando e rodando uma função para cada span, criei um objeto e depois enviando para o addMarker

orphanagesSpan.forEach( span => {   
    const orphanage = {
        id: span.dataset.id, 
        name: span.dataset.name,
        lat: span.dataset.lat, 
        lng: span.dataset.lng
    }

    addMarker(orphanage)
})




// Dentro das funcionalidades, exemplo: '.map', têm argumentos e isso é como se fosse uma 
// caixa mágica que executará algo

// Tipos de dados para

/* String: ""; 
Number: 01; 
Object: {}; 
Boolean: true or false

Array: [] -> lista de valores, e contamos a partir do 0.

Exemplo: const compras ["leite", "bananas", "maças"]

compras[1] -> bananas
compras[0] -> leite

*/

/* JS
Todo objeto tem propriedades, como um celular, por exemplo

Criei um objeto { color: "red"}

Você acessa propriedades do objeto com um '.', exemplo: celular.color

Nem todas as propriedades recebem valor.

Você só coloca "" ou '' em variável do tipo string, booleano que só recebe 
true or false, por exemplo, não tem aspas.

camiseta.suja =  true

camiseta.vestir = function() {
    if(camiseta.suja) {
        // só entra nesse bloco de código se a camiseta estiver
        return "Camiseta suja"
    } else {
        return "Camiseta limpa"
    }
}

Nessa caso abaixo, só irá aparecer "Camiseta suja"  se  na função da propriedade '.verificarLimpeza' estiver escrito 'suja'.
Senão, só aparecerá "Camiseta limpa"

camiseta.vestir = function(suja) {
    if(suja) {
        // só entra nesse bloco de código se a camiseta estiver
        return "Camiseta suja"
    } else {
        return "Camiseta limpa"
    }
}

camiseta.verificarLimpeza(true)
//Irá retornar:

"Camiseta suja"



leaflet js é uma biblioteca do JS para mapas interativos

O script do js sempre fica no final para não quebrar a aplicação

O JS: 'conts' significa que ele vai permanecer
com o valor constante

'let' ou 'var', significa que o valor pode mudar

*/