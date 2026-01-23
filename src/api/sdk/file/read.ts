const handle = require('./utils');

module.exports = {
    read: (fold) => {
        if (fold.foldName) {
            for (let i = 0; i < fold.foldName.length; i++) {
                const flodPath = fold.path + fold.foldName[i]
                if (fold.fileName) {
                    for (let j = 0; j < fold.fileName.length; j++) {
                        const fileName = fold.fileName[j]
                        for (let k = 0; k < fold.fileType.length; k++) {
                            const fileType = fold.fileType[k]
                            fs.readFile(flodPath + '/' + fileName.name + '.' + fileType, 'utf8', (err, data) => {
                                if (err) throw err;
                                console.log(data);
                            });
                        }
                    }
                } else {
                    let files = fs.readdirSync(flodPath + '/');
                    if (fold.fileType) {
                        files = files.filter(item => item.includes('.') ? fold.fileType.includes(item.split('.')[1]) : true)
                    }
                    fileRes = files
                    fs.writeFile(flodPath + '/index.txt', files.join('\n'), 'utf8', (err) => {
                        if (err) throw err;
                        console.log('文件已保存');
                    });
                }
            }
        } else {
            if (fold.path) {
                fileRes = resolve(__dirname, fold.path);
            } else {
                fileRes = process.cwd().replaceAll('\\', '/').replace('/src', '') + "/"
            }
        }
    }
}