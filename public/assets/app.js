'use strict';

fetch('/files')
    .then(response => response.json())
    .then(data => updateSelect(data));


function updateSelect(files) {
    let select = document.getElementById('pattern-list');
    files.forEach(file => {
        let opt = document.createElement('option');
        opt.value = file;
        opt.innerHTML = file;
        select.appendChild(opt);
    });
}