const handle = require('./utils');

module.exports = {
    create: (fold) => {
        for (let i = 0; i < fold.foldName.length; i++) {
            const flodPath = fold.path + fold.foldName[i]
            handle.createDir(flodPath)
            if (fold.fileName) {
                for (let j = 0; j < fold.fileName.length; j++) {
                    const fileName = fold.fileName[j]
                    for (let k = 0; k < fold.fileType.length; k++) {
                        const fileType = fold.fileType[k]
                        fs.writeFile(flodPath + fileName.name + '.' + fileType, fileName.content, (err) => {
                            if (err) throw err;
                            console.log('文件已保存');
                        });
                    }
                }
            }
        }
    }
}