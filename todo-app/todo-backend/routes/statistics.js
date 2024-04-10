const express = require('express');
const router = express.Router();
const {increment, getCounter} = require('../todo-counter')

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todoCounter = await getCounter()
  res.json({'added_todos': todoCounter}).send();
});

module.exports = router;