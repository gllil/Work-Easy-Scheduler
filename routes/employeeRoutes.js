const express = require('express')
const router = express.Router()


const  Employee = require('../models/employeeSchema')

//finding all  employee
router.get('/', async (req,res) => {
    try {
        const employee = await Employee.find()
    res.json(employee)
  //res.send('Hello')
    } catch (err) {
        res.status(500).json({message: err.message})
        
    }
    //creating a new employee
    router.post('/', (req,res)=>{
        const body= req.body
        Employee.create(body).then(model=> res.json(model))
    
    
    })
    // updating employee 
    router.put("employeeUpdate/:id", (req, res) => {
        employee.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
        .then((dbEmployee) => {
            res.json(dbEmployee)
        });
    });

    })
        // delete employee
    router.delete('/:id', async (req,res) => {
        try {
            const employee = await Employee.findByIdAndDelete(req.params.id)
        res.json({meeasge:"employee deleted"})
      //res.send('Hello') 
      console.log(employee)
        } catch (err) {
            res.status(500).json({message: err.message})
            
        }
        })


    module.exports = router