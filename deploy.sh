#!/usr/bin/env sh

echo "########################"

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cp -Rf ./dist/ ../victorsonger.github.com

# cd ../victorsonger.github.com

# git add -A
# git commit -m '主页结构调整'
# git push

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

# git init
# git add -A
# git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f https://github.com/victorsonger/victorsonger.github.com.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

cd -