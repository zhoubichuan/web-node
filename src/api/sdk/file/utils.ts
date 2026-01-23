const fs = require('fs');
export default {
    rename: (oldpath, newpath) => {
        fs.rename(oldpath, newpath, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('重命名成功');
            }
        })
    },
    createDir: (path) => {
        fs.mkdir(path, (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('创建成功');
            }
        })
    },
}