// importar dependência
const express = require('express');//vai chamar nossas dependências
const path = require('path'); // Já faz parte do node
const pages = require('./pages.js');

// iniciando o express
const server = express() // Se a variável receber uma função, ele se torna uma função também
server

    // utilizar body do req
    .use(express.urlencoded({ extended: true })) //Extendi a urlencoded

    // utilizando os arquivos estáticos
    .use(express.static('public')) //vai pegar arquivos estáticos!

    // configurar template engina
    .set('views', path.join(__dirname, "views")) //vai buscar os arquivos da views
    .set('view engine', 'hbs')

    // rotas da aplicação (caminho)
    .get('/', pages.index)
    .get('/orphanage', pages.orphanage)
    .get('/orphanages', pages.orphanages)
    .get('/create-orphanage', pages.createOrphanage) //camelCase, ao invés de deixarmos um traço deixamos juntos e com a 1º letra maiúscula
    .post('/save-orphanage', pages.saveOrphanage)

    /*
    .get('/', (req, res) => { // a função get recebe 2 argumentos, request e response
        // console.log("oi") // vai aparecer no terminal quando eu entrar na porta do servidor
        //return response.send("Oi direto do back-end") a funcionalidade send está recebendo um argumento de texto, se irmos na porta do server, vai aparecer esse texto
        
        // console.log(path.join(__dirname, 'views', 'index.html')) //Do jeito certo, o path vai criar uma navegação do meu diretório atual pra pasta views, só colocar um contra-barra(\), mas desse modo vai servir para qualquer SO
        //console.log(request.query) //Vai pegar todos os dados depois da '?' e mostrar no terminal esses dados

        const city = req.query.city

        return res.render('index', { city }) //Quando tenho o valor igual a propriedade, eu posso deixar um nome só que ele já entende
        //response.sendFile(path.join(__dirname, 'views', 'index.html')) -> não usaremos mais dessa forma pq estamos usando o hbs em lá em cima

        // + é de cálculo ou de concatenação(juntar uma coisa com outra)
        //return response.sendFile(__dirname) // Método(função) que pede onde está o arquivo, o __dirname é o diretório atual que estou, irá aparecer no terminal
    }) 
    */

    //Função sem nome, podemos simplificar com uma arrow function: () => {}

    /* Quando eu faço alguma alteração no servidor, tenho que desligar o servidor com o CTRL + C e ligar o server de novo
    Tem uma dependência que desliga e liga o server automaticamente quando fizermos alguma alteração, o que nos facilita.
    Ela se chama nodemon, que é um monitoramento do node

    */

    /* CTRL + J -> abre o terminal existente sem adicionar um novo */

// ligar o servidor
server.listen(5500) //Vai escutar uma porta que eu designar, com isso eu desinstalei a extensão Live Server para ficar só o servidor

// node src/server.js -> mudei de arquivo e executei com o node

// console.log("Hoyen, turupom?") Não vai aparecer no browser e sim no server, pq agora estamos no back-end.

// cd  -> change directory, mudar o diretório(pasta) em que estou
// CTRL + L -> Clear

/* No terminal, usando git bash e indo para a pasta correta, se colocar no termimal
node server.js, o conteúdo do console.log aparecerá lá. */

/* npm -> Node Package Manager (Gerenciador de pacotes Node), é usado pra instalar 
plugins(dependência/biblioteca/pacotes) no node, para instalar tenho que antes iniciar um projeto usando
npm init -y, isso irá baixo um arquivo "package.json" */

/* Caminho absoluto e relativo: ./ é relativo onde estou, já a / sozinha no 
começo se refere ao início do computador

Exemplo: Estou na pasta /c/nlw3/src e quero voltar pra pra pasta nlw3

Caminho absoluto:
cd /c/nlw3

caminho relativo:
cd ../  -> estou voltado uma pasta anterior a atual

ls -> mostra o conteúdo da pasta atual
pwd -> mostra o caminho da pasta atual

JSON(JavaScript Object Notation) -> Ou seja, fazer objeto no JS em maneira de texto.
E você tem que declarar as propriedades com aspas (por causa que é texto kkk)

A última propriedade não tem ','

Iremos instalar a biblioteca 'express'

Isso irá criar uma propriedade chamada 'dependences' no json com as dependências 
que instalamos

//Use npm start para iniciar o nodemon

//DICA PRA VIDA DE PROGRAMADOR: SE ACOSTUMA COM ERROS PORRA! VOCÊ É PAGO PRA RESOLVÊ-LOS kkkkkk

/* 
Arquivo estático vc dinâmico: 
Arquivos estáticos são quando não fazem nenhuma comunicação, arquivo dinâmico é quando tem conexão com alguma 
funcionalidade, banco de dados, fazer alteração em tempo real, etc.

CTRL + F -> pesquisar palavras


GET é a requisição na url, por isso quando aparece 'Cannot GET' é que ele não está achando essa rota, no POST 
ele salva os dados.

Query strings: É a ? na URL

hbs -> handlebars, ele é um template engine

Internet: pro mundo
Intranet: interno, ou seja, está na minha máquina local

*/
