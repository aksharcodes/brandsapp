const express = require('express');
const Brand = require('../models/brands');

const router = express.Router();

router.get('/advertisersNames',async (req,res) => {

    try{
        const result = await Brand.find({}).select(['advertiserName','-_id']);
        res.json(result)
    }
    catch(err){
        res.status(500).json({'errors' : err.message});
    }

})


router.get('/getBrands/:name',async (req,res)=>{

try{
  const result = await Brand.find({advertiserName : req.params.name});
  res.send(result);

}
catch(err){
    res.status(500).json('server error');
}

})

module.exports = router;