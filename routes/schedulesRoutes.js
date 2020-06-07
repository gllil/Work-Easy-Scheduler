const express = require('express')
const router = express.Router()

const  schedules = require('../models/schedulesSchema')

// creating an employee schedule working 
router.post('/', (req,res)=>{
    const body= req.body
    schedules.create(body).then(schedule=> res.json(schedule))
})


//updating a schedule

router.put('/schedulesUpdate/:id', (req,res)=> {
    res.send('Updating schedule' + req.params.id)

})
// router.put('/schedulesUpdate/:id',({params}) =>{
//     db.schedules.update(
//         {
//             _id: mongojs.ObjectId(params.id)
//         },
       
//         (error,edited) => {
//             if (error){
//                 console.log(error);
//                 res.send(error);
//             }else {
//               console.log(edited); 
//             res.json(edited);
//          }
//             }
//     );
        
// });



module.exports = router