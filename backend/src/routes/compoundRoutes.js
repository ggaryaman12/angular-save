// const router = require('express').Router();

// const { addCompound, getAllCompounds, getCompoundById, deleteCompound, updateCompound } = require("../controllers/compoundController");

// router.post("/addCompound", addCompound);
// router.get("/getAllCompounds", getAllCompounds);
// router.get("/getCompound/:id", getCompoundById);
// router.delete("/deleteCompound/:id", deleteCompound);
// router.put("/updateCompound/:id", updateCompound);

// module.exports = router;

const router = require('express').Router();
const compoundController = require('../controllers/compoundController')

router.route('/compounds')
    .post( compoundController.addCompound)
    .get( compoundController.getAllCompounds);

router.route('/compounds/:id')
    .get(compoundController.getCompoundById)
    .delete(compoundController.deleteCompound)
    .put(compoundController.updateCompound);

module.exports = router

// const express = require("express");
// const route = express.Router();
// const controller = require("../controllers/compoundController");
// route.get("/compound", controller.getAllCompounds);
// route.get("/compound/:id", controller.getCompound);
// route.put("/compound/:id", controller.updateCompound);
// route.post("/compound", controller.addCompound);
// route.delete("/compound/:id", controller.deleteCompound);
// module.exports = route;
