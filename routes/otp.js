const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/', (req, res) => {
    // res.send("test");
    res.render('otp.html');
});

module.exports = router;