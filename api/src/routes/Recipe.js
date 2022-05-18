const express = require('express');
const {getByName, getIdRecipe, getPost} = require('../controllers/Recipe.controllers');
const router = express.Router();

router.get('/',getByName);
router.get('/:id', getIdRecipe);
router.post('/create',getPost);






module.exports = router;