const common = require('./sdk/file/index');
export function file(fold) {
  return common[fold.type](fold)
}
