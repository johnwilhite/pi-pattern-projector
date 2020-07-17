const fs = require('fs');

module.exports = {
    getList() {
        return fs.readdirSync('./uploaded-patterns');
    },
    saveUpload(params, file) {
        let ext = file.name.substr(file.name.lastIndexOf('.') + 1);
        let fileName = `${params.brand} ${params.garment} ${params.sizes}`;
        fileName = fileName.replace(/[\W ]+/g, '_');
        fileName += `.${ext}`;

        // TODO: convert pdf to png
        // TODO: check if file already exists
        file.mv('./app/uploaded-patterns/' + fileName);
    }
}