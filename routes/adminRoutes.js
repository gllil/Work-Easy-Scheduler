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

//Updating one
router.patch('/:id',(req, res)=>{

})

//Deleting one 

router.delete('/:id',(req,res)=>{

})
module.exports = router

