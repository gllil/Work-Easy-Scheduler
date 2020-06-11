const express = require('express')
const router = express.Router()

const  timeoff = require('../models/timeoffSchema')


//creating new timeoff for employee
router.post('/', (req,res)=>{
    const body= req.body
    timeoff.create(body).then(model=> res.json(model))

})

// Getting one timeoff from employee
router.get('/:id',async(req,res)=>{
    try {
        const timeoff = await timeoff.findById(req.params.id)
        res.json(shifts)
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
})


//Bringing all timeoffs of emplyees
router.get('/', async (req,res) => {
    try {
        const timeoff = await timeoff.find()
        res.json(timeoff)
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
    })

    // update timeoff
    router.put("timeoffUpdate/:id", (req, res) => {
        timeoff.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then((dbTimeoff) => {
            res.json(dbTimeoff)
        });
    });

    //Deleting one timeoff 

router.delete('/:id', async (req,res) => {
    try {
        const timeoff = await timeoff.findByIdAndDelete(req.params.id)
    res.json({meeasge:"timeoff deleted"})
  //res.send('Hello') 
  console.log(timeoff)
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
    })




module.exports = router