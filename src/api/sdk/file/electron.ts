const fs = require('fs');
const path = require('path');
const { resolve } = require('path');
const { exec, execSync, spawn } = require('child_process');
const { ipcMain, dialog, ipcRenderer } = require('electron');
const common = require('./index');

ipcMain.on('file', (event) => {
  dialog.showOpenDialog({
    properties: ['openFile']
  }, (files) => {
    if (files) {
      event.sender?.send('selected-file', files); // 发送结果回渲染进程
    }
  });
});
// 触发文件选择
ipcRenderer?.send('file');

// 监听选择结果
ipcRenderer?.on('selected-file', (event, filePath) => {
  console.log('选中的文件路径:', filePath);
  // 读取文件
  fs.readFile(path.join(__dirname, filePath), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    // 写入文件
    fs.writeFile(path.join(__dirname, 'output.txt'), data, 'utf8', (err) => {
      if (err) throw err;
      console.log('文件已保存');
    });
  });
});
let fileRes = ''
ipcMain.on('filehandle', (event, fold) => {
  common[fold.type](fold)
  event.sender?.send('filehandle', fileRes); // 发送结果回渲染进程
});


