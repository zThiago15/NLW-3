const Database = require('./db'); //não preciso colocar .js no final pq ele vai saber, daqui vou receber o database
const saveOrphanage = require('./saveOrphanage');

Database.then(async db => {    //Se eu tenho só 1 argumento, eu posso tirar dos (), senão eu deixo com () e ','

    // inserir dados na tabela 
    await saveOrphanage(db, { 
         lat: "-23.6102573",
         lng: "-46.4639772",
         name: "Lar dos meninos",
         about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
         whatsapp: "98588568589",
         images: [
             "https://images.unsplash.com/photo-1574647267419-cd3adf200aed?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9",

             "https://images.unsplash.com/photo-1596908905631-7fe2dd220d24?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9"
         ].toString(), //salvei esse array como string
         instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
         opening_hours: "Horário de visitas Das 18h até 8h",
         open_on_weekends: "0"
     }) 

    // aync await nos facilita pra n precisarmos colocar um .then, pq o await espera o código ser executado e depois vai pras próximas linhas
    // Quando eu rodar vou inserir esses dados na tabela. O id é criado automaticamente pelo SQLite

    // consultar dados da tabela. 
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // // consultar somente 1 orfanato pelo id.
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)

    // // deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages WHERE id = '3'"))
    // console.log(await db.run("DELETE FROM orphanages WHERE id = '9'"))

    //Mesmo que você delete uma tabela, a inteligência do BD irá criar outro ID para não dar problema no futuro

})