const {Sequelize} = require('sequelize');

const sequelize = new Sequelize ('railway', 'root', 'JurpUALXDmWsCANepWmTIHZhYdchdSPN', {
    host: 'mysql://root:JurpUALXDmWsCANepWmTIHZhYdchdSPN@mysql.railway.internal:3306/railway', //ipdocontainer
    dialect: 'mysql',
})

try{
    sequelize.authenticate()
    console.log('Connected in dbdata sucessfull')
}catch(err){
    console.log(`No possible connected in dbdata ${err}`);
}

module.exports = sequelize 
