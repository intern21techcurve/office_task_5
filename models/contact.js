
module.exports=(Sequelize, DataTypes) => {

const contact = Sequelize.define('contact', {
    First:{
        type: DataTypes.STRING,
        allowNull: false,

    },
    Last:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    Email:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Phone:{
        type: DataTypes.STRING,
        allowNull: false

    },
    // best decribe u 
    describe:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Message:{
        type:DataTypes.TEXT,
        allowNull: false
    },
    checkbox:{
        type:DataTypes.BOOLEAN,
        allowNull: false

    }
    
    
})
return contact
}