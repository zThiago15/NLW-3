// create map
const map = L.map('mapid').setView([-23.610573,-46.4949772], 15); 

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' )
.addTo(map); //Toda a propriedade tileLayer será adicionado a variável map

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29, 68],
}) //Dentro da funcionalidade icon temos um objeto que recebe propriedades e tem seus valores

let marker; /* let deixa com que eu altere a variável em algum momento, e consegui iniciar ela vazia pra adicionar algo depois */



// create and add marker 
map.on('click', (event) => { /* Vai pegar a latitude e longitude quando eu clicar no mapa */
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat; //Ele vai pegar os valores que estão dentro de um name=lat, no caso só tem 1
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker) //Caso o marker houver um valor, o map irá remover ele, para o marcador n ficar repetindo todas vez que eu clicar no mapa

    // add icon layer
    marker = L.marker([lat, lng], { icon }) //array com a latitude e longitude
    .addTo(map)
})

// add photo filed
function addPhotoField() {
    // pegar o container de fotos #images
    const container = document.querySelector('#images') // Guardei em memória para utilizar mais tarde
    // pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload') //QuerySelector só vai pegar o primeiro, com o All junto, ele pega tudo
    // realizar o clone da última imagem adicionada.
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true) //Como ele está num array, ele vai considerar 0 já que só tem 1 imagem, mas o length retorna 1, então para n dar erro no array, colocamos o length - 1. Ou seja se tiver 6 imagens, a última imagem no array vai ser 5, de 0 à 5.

    // verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = newFieldContainer.children[0]

    console.log(input.value == "") //Esse igual é um valor booleano, se for verdadeiro, irá executar, se não, não irá

    if(input.value == ""){
        return
    }

    // limpar o campo antes de adicionar ao container de imagens
    input.value = "" //Tem 2 filhos: input e span. Logo: 0 e 1, quero limpar o input


    // adicionar o clone ao container de #images
    container.appendChild(newFieldContainer) //Pega o filho e acrescenta ao container
}       

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        // limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo
    span.parentNode.remove() //Irá pegar o pai do span, que é o .new-upload e deletar ele inteiro
}
// Dica: veja como uma função funciona com o console.log

// select yes or no
function toggleSelect(event) {

    //retirar a class .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach(function(button) { //Vai executar essa funcionalidade para cada botão. 
        button.classList.remove('active')
    }) 
    // .forEach(button => button.classList.remove('active')) // Se só tem uma linha, não precisa das {] e se só tem 1 argumento não precisa dos parênteses em volta da função (button) =>

    // colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    //a atualizar o meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value //Colocar esse valor (0 ou 1) no open_on_weekend

    // verificar se sim ou não => coloquei o data-value: 1 no input do 'Sim' e 0 no input do 'Não'.
}

function validade(event) {
    
    // validar se lat e lng estão preenchidos
    const needsLatAndLng = false; 
    if(needsLatAndLng) {
        event.preventDefault() // Nada vai ser enviado
        alert('Selecione um ponto no mapa')
    } else {

    }


    
}