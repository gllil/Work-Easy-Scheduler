const express = require('express')
const router = express.Router()
const  Admin = require('../models/adminSchema')


//Bringing all admin info 
router.get('/', async (req,res) => {
try {
    const admin = await Admin.find()
    res.json(admin)
} catch (err) {
    res.status(500).json({message: err.message})
    
}
})

// Getting one admin
router.get('/:id',async(req,res)=>{
    try {
        const admin = await Admin.findById(req.params.id)
        res.json(admin)
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
//res.send(req.params.id)
})

// Creating a new admin 
router.post('/', (req,res)=>{
    const body= req.body
    Admin.create(body).then(model=> res.json(model))


})

//Updating admin update
router.put("adminUpdate/:id", (req, res) => {
    admin.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then((dbAdmin) => {
        res.json(dbAdmin)
    });
});


//Deleting one 

router.delete('/:id', async (req,res) => {
    try {
        const admin = await Admin.findByIdAndDelete(req.params.id)
    res.json({meeasge:"admin deleted"})
  //res.send('Hello') 
  console.log(admin)
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
    })


module.exports = router

