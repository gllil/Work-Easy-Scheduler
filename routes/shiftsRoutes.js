const express = require('express')
const router = express.Router()

const  Shifts = require('../models/shiftsSchema')


//creating new shifts
router.post('/', (req,res)=>{
    const body= req.body
    Shifts.create(body).then(model=> res.json(model))

})

// Getting one shift
router.get('/:id',async(req,res)=>{
    try {
        const Shifts = await Shifts.findById(req.params.id)
        res.json(shifts)
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
})


//Bringing all shifts 
router.get('/', async (req,res) => {
    try {
        const shifts = await Shifts.find()
        res.json(shifts)
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
    })

    // update shifts
    router.put("shiftsUpdate/:id", (req, res) => {
        shifts.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then((dbShifts) => {
            res.json(dbShifts)
        });
    });

    //Deleting one shift

router.delete('/:id', async (req,res) => {
    try {
        const shifts = await Shifts.findByIdAndDelete(req.params.id)
    res.json({meeasge:"shift deleted"})
  //res.send('Hello') 
  console.log(shifts)
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
    })




module.exports = router