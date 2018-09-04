const express =require('express');
const router = express.Router();

const Contact = require('../models/contacts');

router.get('/contacts',(req,res,next)=>{
   // res.send('Retriving the contacts');
   Contact.find((err, contacts)=>{
       res.json(contacts);
   });
});

//add data
router.post('/contact',(req,res,next)=>{
    let newContact = new Contact({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone: req.body.phone
    });
    newContact.save((err, contact)=>{
        if(err)
        {
            res.json({msg:'fail to add contacts'});
        }else{
            res.json({msg:'contacts added successfully'}); 
        }
    });
});

// delete data
router.delete('/contact/:id',(req,res,next)=>{
    Contact.remove({_id: req.params.id}, (err,result)=>{
        if(err)
        {
            res.json(err);            
        }else{
            res.json(result);
        }
    });
});
module.exports = router;