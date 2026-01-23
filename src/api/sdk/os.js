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
const os = require('os');
const { exec, execFile, spawn, fork } = require('child_process');
const electron_1 = require("electron");
// 获取系统信息
electron_1.ipcMain.on('os', (event, arg) => __awaiter(void 0, void 0, void 0, function* () {
    // 获取IP地址
    if (arg == 'ip') {
        let data = '';
        const networkInterfaces = os.networkInterfaces();
        for (const name of Object.keys(networkInterfaces)) {
            for (const net of networkInterfaces[name]) {
                // 过滤 IPv4 地址且不是回环地址
                if (net.family === 'IPv4' && !net.internal) {
                    data = net.address;
                }
            }
        }
        event.reply('os', data);
        // 获取mac地址
    }
    else if (arg == 'mac') {
        const mac = yield getMacAddress();
        event.reply('os', mac);
    }
    else {
        arg = arg || 'type';
        const data = os[arg]();
        event.reply('os', data);
    }
}));
function getMacOsMacAddress() {
    const networkInterfaces = os.networkInterfaces();
    for (const name of Object.keys(networkInterfaces)) {
        const iface = networkInterfaces[name].find(details => details.family === 'IPv4' || details.family === 'IPv6');
        if (iface && iface.mac !== '00:00:00:00:00:00' && iface.mac) {
            return iface.mac;
        }
    }
    return null; // 没有找到有效的 MAC 地址
}
function getWinOsMacAddress() {
    return new Promise((resolve, reject) => {
        exec('getmac', (error, stdout, stderr) => {
            if (error) {
                reject(error);
                return;
            }
            const lines = stdout.split('\n');
            for (const line of lines) {
                if (line.includes(' ')) { // 通常 MAC 地址前面有空格，后面紧跟网络接口名称和MAC地址
                    const mac = line.trim().split(' ')[1]; // 获取第二个字段，即MAC地址
                    if (mac && mac !== '--------') { // 检查是否为有效的MAC地址
                        resolve(mac);
                        return;
                    }
                }
            }
            resolve(null); // 没有找到有效的 MAC 地址
        });
    });
}
const getMacAddress = () => __awaiter(void 0, void 0, void 0, function* () {
    if (os.platform() === 'darwin') {
        return getMacOsMacAddress();
    }
    else if (os.platform() === 'win32') {
        return yield getWinOsMacAddress();
    }
});
