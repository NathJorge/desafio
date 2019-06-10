var desenvolvimento = false;

var configuracoes = {
    producao: {
        server: "bandtec1.database.windows.net",
        user: "incendioflorestal1",
        password: "#Gf39265476850",
        database: "ProjetoBandtec",
        options: {
            encrypt: true
        },
        pool: {
            max: 4,
            min: 1,
            idleTimeoutMillis: 30000,
            connectionTimeout: 5000
        }
    },
    desenvolvimento: {
        server: "BASETESTE.database.windows.net",
        user: "usuariotestes",
        password: "senhatestes",
        database: "BASETESTE",
        options: {
            encrypt: true
        }
    }
}
 
var sql = require('mssql');
sql.on('error', err => {
    console.error(`Erro de Conexão: ${err}`);
});

var perfil = desenvolvimento ? 'desenvolvimento' : 'producao';

function conectar() {
  sql.close();
  return sql.connect(configuracoes[perfil])
  // return new sql.ConnectionPool();  
} 

module.exports = {
    conectar: conectar,
    sql: sql
}
