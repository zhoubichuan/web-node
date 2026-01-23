"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { exec, execFile, spawn, fork } = require('child_process');
// const { BluetoothHciSocket } = require('bluetooth-hci-socket');
const electron_1 = require("electron");
exports.default = () => {
};
// 打开应用
electron_1.ipcMain.on('openApp', (event, path) => __awaiter(void 0, void 0, void 0, function* () {
    exec(`open ${path}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`执行出错: ${error}`);
            return;
        }
        console.log(`标准输出: ${stdout}`);
        console.log(`标准错误输出: ${stderr}`);
    });
}));
// 打开蓝牙
// ipcMain.on('bluetooth', async (event,name) => {
//     const hci = new BluetoothHciSocket();
//     await hci.connect(name); // 根据你的设备调整设备名或使用 hci.inquire() 来查找设备
//     event.sender.send('bluetooth', 'connected');
// });
// 打开日历
electron_1.ipcMain.on('calendar', (event, value) => __awaiter(void 0, void 0, void 0, function* () {
    const { date, summary, location } = JSON.parse(value);
    const scriptPath = './addCalendarEvent.scpt';
    exec(`osascript ${scriptPath} "${date}" "${summary}" "${location}"`, (error, stdout, stderr) => {
        if (error) {
            console.error(`exec error: ${error}`);
            return;
        }
        console.log(`Event added: ${stdout}`);
    });
}));
// 方法用于执行简单的 shell 命令，并缓冲输出结果
electron_1.ipcMain.on('exec', (event, data) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = JSON.parse(data);
    exec(name, (error, stdout, stderr) => {
        if (error) {
            console.error(`执行出错: ${error}`);
            return;
        }
        event.reply('exec', stdout);
        console.log(`标准输出: ${stdout}`);
        console.log(`标准错误输出: ${stderr}`);
    });
}));
// 执行可执行文件
electron_1.ipcMain.on('execFile', (event, data) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = JSON.parse(data);
    execFile(name, ['--version'], (error, stdout, stderr) => {
        if (error) {
            console.error(`执行出错: ${error}`);
            return;
        }
        event.reply('execFile', stdout);
        console.log(`标准输出: ${stdout}`);
        console.log(`标准错误输出: ${stderr}`);
    });
}));
// 流式处理子进程
electron_1.ipcMain.on('spawn', (event, data) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = JSON.parse(data);
    const ls = spawn('ls', ['-lh', '/usr']);
    ls.stdout.on('data', (data) => {
        event.reply('spawn', data);
        console.log(`标准输出: ${data}`);
    });
    ls.stderr.on('data', (data) => {
        console.error(`标准错误输出: ${data}`);
    });
    ls.on('close', (code) => {
        console.log(`子进程退出码: ${code}`);
    });
}));
// 创建 Node.js 子进程
electron_1.ipcMain.on('fork', (event, data) => __awaiter(void 0, void 0, void 0, function* () {
    const { name } = JSON.parse(data);
    const child = fork('child.js');
    child.on('message', (msg) => {
        event.reply('spawn', msg);
        console.log('来自子进程的消息:', msg);
    });
    child.send({ hello: 'world' });
}));
require("./os");
require("./file");
require("./npm");
require("./notification");
