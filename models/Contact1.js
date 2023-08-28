const Sequelize = require("../Config/dbConnections");

const { DataTypes } = require("sequelize");


 

const Contact = Sequelize.define(

  "user",

  {

    firstName: {

      type: DataTypes.STRING,
      defaultValue: 1

      

    },

    lastName: {

      type: DataTypes.STRING,
      defaultValue: 1

    },

    Phone: {

      type: DataTypes.STRING,
      defaultValue: 1

    },
    Email:{
        type: DataTypes.STRING,
        defaultValue: 1
    },
    Describe:{
        type: DataTypes.STRING,
        defaultValue: 1

    },
    Message:{
        type: DataTypes.STRING,
        defaultValue: 1,
        

    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    

  },
},
  

  {

    updatedAt: true,

    createdAt: true,

    timestamps: true,
    paranoid: true,

  }

);


 

Contact.getAllConnection = async () => {

  try {

    let usersData = await Contact.findAll({});

    return usersData;

  } catch (error) {

    console.log(error);

    throw new Error("Unable to get all users");

  }

};

 

Contact.createConnection = async (userData) => {

  try {

    let userCreated = await Contact.create(userData);

    return userCreated;

  } catch (error) {

    console.log(error);

    throw new Error("Unable to Save User");

  }

};

(async () => {
    try {
      // Sync all models to the database
      await Sequelize.sync({force:false});
  
      console.log("Database synchronized");
    } catch (error) {
      console.error("Error synchronizing database:", error);
    }
  })();
 
Contact.sync();


 

module.exports = Contact;