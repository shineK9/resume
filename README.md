# Resume

根据 [JSON 数据](./resume.json) 生成个人简历，打包时自动会同时生成 PDF 和网页两个版本。

可访问 [Vercel 部署版本](http://shinek.vercel.app) 查看最终效果

使用步骤: 

1. 编辑 `resume.json` 文件配置你的简历信息

2. 执行下面脚本安装依赖
```
npm install
// or
yarn install
```
3. 打包
```
npm run build
// or
yarn build
```
4. 预览
```
yarn preview
```