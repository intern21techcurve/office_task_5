
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('abhis', 'root', '9899803387Ak@',{
        host: 'localhost',
        dialect: 'mysql'
})

sequelize.authenticate().then(() => {
    console.log('connected')
})
    .catch(err => {
        console.log("error" + err)
    })
const db = {}
db.sequelize = sequelize
db.sequelize = sequelize
db.contactForms = require('./contact.js')(sequelize, DataTypes)
db.sequelize.sync({ force: false })
    .then(() => {
        console.log('Sync is done')
    })
module.exports = db;