const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer')

const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');
//vem de controller box controller 

// GET/POST/PUT/DELET

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);




routes.post("/boxes/:id/files",multer(multerConfig).single("file"), FileController.store);

module.exports = routes; 