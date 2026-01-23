const handle = require('./utils');

module.exports = {
    edit: (fold) => {
        for (let i = 0; i < fold.foldName.length; i++) {
            const flodPath = fold.path + fold.foldName[i]
            for (let j = 0; j < fold.fileType.length; j++) {
                const fileType = fold.fileType[j]
                for (let k = 0; k < fold.fileName.length; k++) {
                    const fileName = fold.fileName[k]
                    handle.rename(flodPath + '/' + fileName.name + '.' + fileType, flodPath + '/' + fileName.rename)
                }
                for (let k = 0; k < fold.fileName.length; k++) {
                    const fileName = fold.fileName[k]
                    handle.rename(flodPath + '/' + fileName.rename, flodPath + '/' + fileName.rename + '.' + fileType)
                    fileRes = fold
                }
            }
        }
    }
}