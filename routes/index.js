const express = require("express");
const router = express.Router();
const adminRoutes = require("./adminRoutes");
const employeeRoutes = require("./employeeRoutes");
const schedulesRoutes = require("./schedulesRoutes");
const userRoutes = require("../routes/api/user");

router.use("/api/user", userRoutes);
router.use("/api/admin", adminRoutes);
router.use("/api/employees", employeeRoutes);
router.use("/api/schedules", schedulesRoutes);

module.exports = router;
