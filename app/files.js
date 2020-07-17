const fs = require('fs');


module.exports = {
    getList() {
        return fs.readdirSync('./app/uploaded-patterns');
    }
}
