const SQLite = require('sqlite3');
const OpenDataBase = require('sqlite').open;

let DataBase;

async function Open(){
    try {
        DataBase = await OpenDataBase({
            filename:"../Packages-Nuget-Server.db",
            driver:SQLite.Database
        })
    } catch (error) {
        console.log(`Error abriendo la base de datos ${error}`)
    }
}
module.exports = DataBase;