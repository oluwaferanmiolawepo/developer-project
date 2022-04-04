const pool = require("../models/index");
const carsController = {};

carsController.getAllcars = function (req, res, next) {
  // get all posts from database
  // Replace sahmie in Blackforcesahmie with your fullname - no spaces
  pool.query("SELECT * FROM Blackforceprojectferanmi", (error, results) => {
    if (error) {
      throw error;
    }
    return res.render("cars", { carz: results.rows });
  });
};

carsController.createAcars = function (req, res, next) {
  // req.body
  let manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;

  // Replace sahmie in Blackforcesahmie with your fullname - no spaces
  pool.query(
    `INSERT INTO Blackforceprojectferanmi (TITLE, AUTHOR, BODY) VALUES ($1 , $2, $3)`,
    [manufacturer, model, color, year],
    (error, results) => {
      console.log(results);
      if (error) {
        throw error;
      }
      return res.render("cars", { carz: [] });
    }
  );
};

carsController.deleteAcars = function (req, res, next) {
  // get resource id

  const id = req.params.id;

  pool.query(
    "DELETE FROM Blackforceprojectferanmi WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/cars");
    }
  );
};

carsController.editAcars = function (req, res, next) {
  const id = req.params.id;

  pool.query(
    "SELECT * FROM Blackforceprojectferanmi WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.render("carsEdit", { carz: results.rows[0] });
    }
  );
};

carsController.updateAcars = function (req, res, next) {
  const id = req.params.id;

  let manufacturer = req.body.manufacturer;
  let model = req.body.model;
  let color = req.body.color;
  let year = req.body.year;

  pool.query(
    "UPDATE Blackforceprojectferanmi SET author = $1, title = $2, body = $3 WHERE id = $4",
    [manufacturer, model, color, year, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.redirect("/cars");
    }
  );
};

module.exports = carsController;
