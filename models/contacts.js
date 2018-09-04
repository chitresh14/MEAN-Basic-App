const mongoose = require('mongoose');
//connect to mongoDB

const contantSchema = mongoose.Schema({
    first_name:{
        type: String,
        required:true
    },
    last_name:{
        type: String,
        required:true
    },
    phone:{
        type: String,
        required:true
    }
});
const Contact = module.exports = mongoose.model('Contact', contantSchema);
