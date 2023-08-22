
module.exports=(Sequelize, DataTypes) => {

const Contact = Sequelize.define('Contact', {
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
    Describe:{
        type: DataTypes.STRING,
        allowNull: false
    },
    Message:{
        type:DataTypes.TEXT,
        allowNull: false
    }
})
return Contact
}