const { ipcMain } = require('electron');
const { exec } = require('child_process');

ipcMain.on('npm', (event, command) => {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`执行出错: ${error}`);
            event.sender.send('npm', error.message);
            return;
        }
        console.log(`stdout: ${stdout}`);
        event.sender.send('npm', stdout);
    });
});
