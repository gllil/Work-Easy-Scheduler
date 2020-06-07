const express = require('express')
const router = express.Router()
const adminRoutes = require('./adminRoutes')
const employeeRoutes = require('./employeeRoutes')
const schedulesRoutes = require('./schedulesRoutes')
router.use('/admin',adminRoutes)
router.use('/employee',employeeRoutes)
router.use('/schedules',schedulesRoutes)


module.exports = router

