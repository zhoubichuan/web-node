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
const electron_1 = require("electron");
const { ipcMain } = require('electron');
function showNotification(title, body) {
    new electron_1.Notification({ title, body }).show();
}
// 获取系统信息
ipcMain.on('notifications', (event, arg) => __awaiter(void 0, void 0, void 0, function* () {
    const { title = '', content = '' } = JSON.parse(arg);
    showNotification(title, content);
    event.reply('notifications', arg);
}));
