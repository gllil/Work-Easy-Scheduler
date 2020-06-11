const express = require('express')
const router = express.Router()

const  Trade = require('../models/tradeSchema')


//creating new trade
router.post('/', (req,res)=>{
    const body= req.body
    Trade.create(body).then(model=> res.json(model))

})

// Getting one trade
router.get('/:id',async(req,res)=>{
    try {
        const trade = await Trade.findById(req.params.id)
        res.json(trade)
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
})


//Bringing all trades
router.get('/', async (req,res) => {
    try {
        const trade = await Trade.find()
        res.json(trade)
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
    })
        //update trade routes
    router.put("tradeUpdate/:id", (req, res) => {
        strade.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then((dbTrade) => {
            res.json(dbTrade)
        });
    });

    //Deleting one trade

router.delete('/:id', async (req,res) => {
    try {
        const trade = await Trade.findByIdAndDelete(req.params.id)
    res.json({meeasge:"trade deleted"})
  //res.send('Hello') 
  console.log(trade)
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
    })




module.exports = router