export function file(fold) {
  window.electron?.ipcRenderer?.sendMessage('filehandle', fold);
  return new Promise((resolve) => {
    window.electron?.ipcRenderer?.once('filehandle', (arg) => {
      resolve(arg);
    });
  });
}
