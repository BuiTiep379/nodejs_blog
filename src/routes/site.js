const express = require('express');
const router = express.Router();

const siteConstroller = require('../app/controllers/SiteController');

router.get('/search', siteConstroller.search);
router.use('/', siteConstroller.index);

module.exports = router;
