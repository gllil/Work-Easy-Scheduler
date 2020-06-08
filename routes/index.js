const express = require('express')
const router = express.Router()
const adminRoutes = require('./adminRoutes')
const employeeRoutes = require('./employeeRoutes')
const schedulesRoutes = require('./schedulesRoutes')
router.use('/api/admin',adminRoutes)
router.use('/api/employee',employeeRoutes)
router.use('/api/schedules',schedulesRoutes)


module.exports = router

