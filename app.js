console.log('Loading app.js')
window.document.addEventListener('DOMContentLoaded', () => {
    const { ipcRenderer } = require('electron')
    console.log('DOMContentLoaded Complet')
    if(! window.localStorage.getItem('path-project') ) window.localStorage.setItem('path-project', '')
    title();
    var $this = {
        path: ''
    };

    const selectDirBtn = document.getElementById('select-directory')

    selectDirBtn.addEventListener('click', function (event) {
        console.log('Click on selectDirBtn', ipcRenderer, event);
        ipcRenderer.send('open-file-dialog')
    })

    ipcRenderer.on('selected-directory', function (event, path) {
        document.getElementById('selected-file').innerHTML = `${path}`
        window.localStorage.setItem('path-project', path)
        title();
    })


    function title() {
        document.getElementById('title').innerHTML += ' ' + window.localStorage.getItem('path-project');
    }


})