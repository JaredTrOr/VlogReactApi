const {Comments} = require('../config/connection');

const getComments = async (req,res) => {
    const {id} = req.params;

    try{
        

    }
    catch(err){
        res.json({success: false, msg: `ERROR: ${err}`});
    }


}