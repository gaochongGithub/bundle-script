# 🚀 Welcome to your new awesome project!

This project has been created using **webpack-cli**, you can now run

```
npm run build
```

or

```
yarn build
```

to bundle your application

额外安装
webpack.config.js脚本设置
output是导出文件选择

npm run build进行编译

格式化脚本
npm install prettier --save-dev
npx prettier --write "dist1/raceMain.js"
npx prettier --write "zkhold/zkHoldMain.js"

raceMain如果在cocos内使用需要修改部分语法
如10n BigInt(10)
?.语法改
??语法改

点击房间时停止加载tokenlist图标
_fetchLegacyTokens禁止调用此方法




在上面的配置中，babel-loader用于处理JavaScript和TypeScript文件，而@babel/preset-env和@babel/preset-typescript用于指定Babel的预设。
npm install --save-dev @babel/core @babel/preset-env @babel/preset-typescript
npm install --save babel-loader
并在webpack.config.js配置

npm install web3

