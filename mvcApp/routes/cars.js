var express = require("express");
var router = express.Router();

var carsController = require("../controllers/cars");
/* GET home page. */
router.get("/", carsController.getAllcars);

router.post("/", carsController.createAcars);

router.get("/:id/delete", carsController.deleteAcars);

// get record details
router.get("/:id/edit", carsController.editAcars);

// update record
router.post("/:id/edit", carsController.updateAcars);

// http://localhost:3000/blog/1/delete

// get post delete
// delete
// update

module.exports = router;