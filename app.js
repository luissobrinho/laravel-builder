console.log('Loading app.js')

window.document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded Complet')
    const ipc = require('electron').ipcRenderer
    const os = require('os')

    var $this = {
        path: ''
    };

    const selectDirBtn = window.document.getElementById('select-directory')

    selectDirBtn.addEventListener('click', function (event) {
        console.log('Click on selectDirBtn', ipc);
        ipc.send('open-file-dialog')
    })

    ipc.on('selected-directory', function (event, path) {
        window.document.getElementById('selected-file').innerHTML = `${path}`
    })

})