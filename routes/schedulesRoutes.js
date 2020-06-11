const express = require('express')
const router = express.Router()

const  schedules = require('../models/schedulesSchema')

// creating an employee schedule working 
router.post('/', (req,res)=>{
    const body= req.body
    schedules.create(body).then(schedule=> res.json(schedule))
})


// update Schedules
router.put("schedulesUpdate/:id", (req, res) => {
    schedules.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then((dbSchedules) => {
        res.json(dbSchedules)
    });
});



//getting all Schedules
router.get('/', async (req,res) => {
    try {
        const schedules = await Schedules.find()
        res.json(schedules)
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
    })

    // Deleting one 
    router.delete('/:id', async (req,res) => {
        try {
            const schedules = await Schedules.findByIdAndDelete(req.params.id)
        res.json({meeasge:"schedule deleted"})
      //res.send('Hello') 
      console.log(schedules)
        } catch (err) {
            res.status(500).json({message: err.message})
            
        }
        })


module.exports = router