'use strict';

let select = document.getElementById('pattern-list');

fetch('/files')
    .then(response => response.json())
    .then(data => updateSelect(data));

function updateSelect(files) {
    files.forEach(file => {
        let opt = document.createElement('option');
        opt.value = file;
        opt.innerHTML = file;
        select.appendChild(opt);
    });
}

select.addEventListener('change', function(event) {
    let file = event.target.value;
    window.location.replace('/display/' + file);
});