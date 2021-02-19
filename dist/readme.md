# 初始化项目
npm init

# 安装typescript
npm i -g typescript

# 查看版本
tsc -v

# 快速生成默认的tsconfig.json配置
tsc --init

# 新建rollup配置文件,写入内容
rollup.config.js

# 在package.json中配置browser字段
"browser": "dist/index.ts"

# 安装Rollup和TypeScript相关依赖
npm i -D rollup typescript tslib rollup-plugin-node-resolve rollup-plugin-commonjs rollup-plugin-typescript

# 新建src目录及文件,写入内容
src/index.ts

# 打包测试
rollup -c

# 将package.json文件拷贝到dist目录