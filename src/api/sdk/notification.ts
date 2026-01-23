
import { Notification }  from 'electron';
const { ipcMain } = require('electron');
function showNotification(title:string, body:string) {
  new Notification({ title, body }).show();
}
// 获取系统信息
ipcMain.on('notifications', async (event, arg) => {
  const {title='',content=''} =JSON.parse(arg)
  showNotification(title, content)
  event.reply('notifications', arg);
});
