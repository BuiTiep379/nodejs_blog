const express = require('express');
const router = express.Router();
// lấy controller
const newsController = require('../app/controllers/NewsController');

router.use('/:slug', newsController.show);

        router.use('/', newsController.index);

        module.exports = router;
