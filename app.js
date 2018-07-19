document.addEventListener('DOMContentLoaded', () => {
    const ipc = require('electron').ipcRenderer 
    const shell = require('electron').shell
    const os = require('os')

    var $this = {
        path: ''
    };

    const selectDirBtn = document.getElementById('select-directory')

    selectDirBtn.addEventListener('click', function (event) {
        ipc.send('open-file-dialog')
    })

    ipc.on('selected-directory', function (event, path) {
        document.getElementById('selected-file').innerHTML = `You selected: ${path}`
    })

    // Preload script

    // Set a variable in the page before it loads
    webFrame.executeJavaScript('window.foo = "foo";')

    // The loaded page will not be able to access this, it is only available
    // in this context
    window.bar = 'bar'

    document.addEventListener('DOMContentLoaded', () => {
        // Will log out 'undefined' since window.foo is only available in the main
        // context
        console.log(window.foo)

        // Will log out 'bar' since window.bar is available in this context
        console.log(window.bar)
    })
})