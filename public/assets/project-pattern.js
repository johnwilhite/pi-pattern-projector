'use strict';

let file = window.location.href.split('/').pop();
document.getElementById('pattern-name').innerHTML = file;

document.getElementById('zoom-in').addEventListener('click', function (event) {
    updateZoomLevel('in');
});

document.getElementById('zoom-out').addEventListener('click', function (event) {
    updateZoomLevel('out');
});

document.getElementById('zoom').addEventListener('click', function (event) {
    let amount = document.getElementById('zoom-amount').value;
    if (amount) { updateZoomLevel(amount); }
});

document.getElementById('close').addEventListener('click', function (event) {
    fetch('/display/close');
    window.location.replace('/');
});

function updateZoomLevel(value) {
    fetch('/display/zoom/' + value)
        .then(response => response.json())
        .then(data => function() {
            document.getElementById('current-zoom-level').innerHTML = data.level;
        });
}
