const express = require('express')
const router = express.Router()


const  Position = require('../models/positionSchema')

//finding all  positions
router.get('/', async (req,res) => {
    try {
        const position = await Position.find()
    res.json(position)
  //res.send('Hello')
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
    //creating a new position
    router.post('/', (req,res)=>{
        const body= req.body
        Position.create(body).then(model=> res.json(model))
    
    
    })
    // updating position
    router.put("positionUpdate/:id", (req, res) => {
        position.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then((dbPosition) => {
            res.json(dbPosition)
        });
    });

    })
        // delete position
    router.delete('/:id', async (req,res) => {
        try {
            const position = await Position.findByIdAndDelete(req.params.id)
        res.json({meeasge:"Position deleted"})
      //res.send('Hello') 
      console.log(position)
        } catch (err) {
            res.status(500).json({message: err.message})
            
        }
        })


    module.exports = router