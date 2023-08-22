const db = require ('../models/Dbconnectons')
const { validateContact, handleValidationErrors } = require('../Validation/contactValidation');

//create a main function 

const Contact = db.contactForms;
 //  Main work is started 

  const addcontact = async (req, resp) => {
    try {
        let info = {
            First: req.body.First,
            Last: req.body.Last,
            Email: req.body.Email,
            Phone: req.body.Phone,
            Describe: req.body.Describe,
            Message: req.body.Message,
            
        }
        const contact_forms = await Contact.create(info)
        resp.status(200).send(contact_forms)
    }
    catch (err) {
        console.log("err", err)
    }


    }
    const getAllConnection = async (req, resp) => {
        try {
            const allConnections = await Contact.findAll();
            resp.status(200).send({ allConnections })
        }
        catch (err) {
            console.log('err', err)
        }
    }
    
module.exports= {
    addcontact,
    getAllConnection
}
        

