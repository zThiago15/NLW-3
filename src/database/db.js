const Database = require('sqlite-async');


function execute(db) {
    return db.exec(` 
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `)  
    //O bom da crase é que pode passar variável, é uma template literals e quebra de linhas.
    // O return depois de executar joga de volta pra continuar o .then acima
}

// Pra colocar nessa pasta o database.sqlite. Objetos promise que são aqueles que precisam terminar de ser
// executados antes de executar os outros

//Integer: dado do tipo inteiro e tem um limite de numeração, por isso deixamos o lat e lng como texto
// id é um número único

module.exports = Database.open(__dirname + '/database.sqlite').then(execute) // db é o resultado, o retorno dele vai vir para cá