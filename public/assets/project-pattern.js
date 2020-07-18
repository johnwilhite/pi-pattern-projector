'use strict';

let file = window.location.href.split('/').pop();
document.getElementById('pattern-name').innerHTML = file;

document.getElementById('zoom-in').addEventListener('click', function (event) {
    fetch('/display/zoom/in')
        .then(response => response.json())
        .then(data => updateZoomLevel(data));
});

document.getElementById('zoom-out').addEventListener('click', function (event) {
    fetch('/display/zoom/out')
        .then(response => response.json())
        .then(data => updateZoomLevel(data));
});

document.getElementById('zoom').addEventListener('click', function (event) {
    let amount = document.getElementById('zoom-amount').value;
    if (amount) {
        fetch('/display/zoom/' + amount)
            .then(response => response.json())
            .then(data => updateZoomLevel(data));
    }
});

document.getElementById('close').addEventListener('click', function (event) {
    fetch('/display/close');
    window.location.replace('/');
});

function updateZoomLevel(data) {
    document.getElementById('current-zoom-level').innerHTML = data.level;
}
