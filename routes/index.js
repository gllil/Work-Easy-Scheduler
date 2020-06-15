const express = require('express')
const router = express.Router()
const adminRoutes = require('./adminRoutes')
const employeeRoutes = require('./employeeRoutes')
const schedulesRoutes = require('./schedulesRoutes')
const userRoutes = require('../routes/api/user')
const shiftsRoutes = require('./shiftsRoutes')
const tradeRoutes = require('./tradeRoutes')
const timeoffRoutes = require('./timeoffRoutes')
const positionRoutes = require('./positionRoutes')


router.use('/api/position',positionRoutes)
router.use('/api/timeoff',timeoffRoutes)
router.use('/api/trade',tradeRoutes)
router.use('/api/shifts',shiftsRoutes)
router.use('/api/user',userRoutes)
router.use('/api/admin',adminRoutes)
router.use('/api/employee',employeeRoutes)
router.use('/api/schedules',schedulesRoutes)


module.exports = router

