# 自动化打包同时将源码发布到master分支，将打包后的代码发布到gh-pages分支

# 确保脚本抛出遇到的错误
set -e

# 1.发布到master分支
git init
git add -A
git commit -m 'master'
git pull origin master
git push -u origin master
git push origin master
