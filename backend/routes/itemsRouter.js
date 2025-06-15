const express = require('express');

const itemsRouter = express.Router();

const itemsController = require('../controllers/itemsController');

itemsRouter.get('/items', itemsController.getItems);

module.exports = itemsRouter;
