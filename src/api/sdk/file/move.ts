const handle = require('./utils');

module.exports = {
    move: (fold) => {
        for (let i = 0; i < fold.foldName.length; i++) {
            const flodPath = fold.path + fold.foldName[i]
            const files = fs.readdirSync(flodPath + '/');
            let count = -1;
            let index = 1;
            for (let j = 0; j < files.length; j++) {
                const max = Math.floor(files.length / fold.count)
                if (count === index) {
                    count = 0
                    index++
                } else {
                    count++
                }
                handle.createDir(flodPath + '/' + index)
                handle.rename(flodPath + '/' + files[j], flodPath + '/' + index + '/' + files[j])
                fileRes = fold
            }
        }
    }
}