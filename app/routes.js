const path = require('path');
const express = require('express');
const router = express.Router();

const fileService = require('./files');
const displayService = require('./display');

router.use(express.json());
router.use(express.static('public'));

router.get('/', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
});

router.post('/upload', (req, res) => {
    let file = req.files.file;

    // TODO: throw error if not pdf

    fileService.saveUpload(req.body, file);
});

router.get('/files', (req, res) => {
    const fileList = fileService.getList();
    res.json(fileList);
});

router.get('/display/:file', (req, res) => {
    displayService.display(req.params.file);
    res.sendFile(path.resolve('public/project-pattern.html'));
});

router.get('/display/zoom/:amount', (req, res) => {
    level = displayService.zoom(req.params.amount);
    res.json({level});
});

router.get('/display/close', (req, res) => {
    displayService.close();
});

module.exports = router;