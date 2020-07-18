const fs = require('fs');

let currentZoomLevel = 100;

module.exports = {
    display(file) {
        currentZoomLevel = 100;
        // TODO: display file
        console.log(`project ${file}`);
    },
    zoom(amount) {
        if (amount === 'in') {
            currentZoomLevel += 5;
        } else if (amount === 'out') {
            currentZoomLevel -= 5;
        } else {
            currentZoomLevel = parseFloat(amount);
        }

        // TODO: zoom
        console.log(`zoom ${amount}`);
        return currentZoomLevel;
    },
    close() {
        currentZoomLevel = 100;
        // TODO: kill display process
    }
}