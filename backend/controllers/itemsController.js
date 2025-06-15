const fs = require('fs');
const path = require('path');

const rootDir = require('../utils/pathUtil');
const items = require('../data/items');

exports.getItems = async (req, res, next) => {
  await new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve();
    }, 2000)
  );
  res.json(items);
};
