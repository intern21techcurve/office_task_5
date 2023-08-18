const db = require ('../models/index')

//create a main function 

const contact = db.contact_forms;
 //  Main work is started 

  const addcontact = async (req, resp) => {
    try {
        let info = {
            First: req.body.First,
            Last: req.body.Last,
            Email: req.body.Email,
            Phone: req.body.Phone,
            describe: req.body.describe,
            Message: req.body.Message,
            checkbox: req.body.checkbox? req.body.checkbox: true

        }
        const contact_forms = await contact.create(info)
        resp.status(200).send(contact_forms)
    }
    catch (err) {
        console.log("err", err)
    }

    }
  

module.exports= {
    addcontact,
}
        

