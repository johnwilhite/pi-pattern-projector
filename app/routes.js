const path = require('path');
const express = require('express');
const router = express.Router();

const fileService = require('./files');

router.use(express.json());

// use express to serve static files
router.use(express.static('public'));

router.get('/', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
});

router.post('/upload', (req, res) => {
    let file = req.files.file;

    // TODO: throw error if not pdf

    fileService.saveUpload(req.body, file);
    res.send('Uploaded');
});

router.get('/files', (req, res) => {
    const fileList = fileService.getList();
    res.json(fileList);
});

module.exports = router;