# claus-aka component library

### 安装最后已经发布的组件库来试试

```javascript
npm install claus-aka --save
```

### 使用

```javascript
// 加载样式
import "claus-aka/dist/index.css";
// 引入组件
import { Button } from "claus-aka";
```

### 课程亮点

- 🔥typescript with React Hooks
- ⛑️ 使用 react-testing-library 完成单元测试
- 📚 使用 storybook 本地调试和生成文档页面
- 📚 使用 react-doc-gen 自动生成文档
- 📦 使用第三方库扩充组件-(react-fontawesome, react-transition-group)
- 🎉npm publish，husky 提交发布前验证，travis CI/CD 集成，发布文档站点等

### 一些本地开发命令

```bash
// 启动本地环境
npm run stroybook

// 跑单元测试
npm test

npx jest **.test.tsx

// build可发布静态文件
npm run build

// 发布到 npm
npm run publish

// 当前项目执行
// 创建一个全局的短链接，链接到当前项目目录
npm link

// 使用项目执行
// 引用这个短链接
npm link claus-aka
```

#### 使用例子

1. claus-aka 包项目

```
npm link
```

2. claus-aka-test 使用包项目

```
npm link claus-aka
```

3. 会遇到一下问题

   > Invalid hook call. Hooks
   >
   > 原因是因为 claus-aka-test 在使用 link 来的包时，被 link 包内使用的 react 是包项目内的 react，和使用包项目依赖的 react 不是一个，所以会报警告

   解决方式

   ```
   // claus-aka
   npm link ../claus-aka-test/node_modules/react
   ```

   这样就可以是同一个 react 了

   https://reactjs.org/warnings/invalid-hook-call-warning.html

## 发布包

注册账号

```
npm whoami  检查是否登陆
npm adduser 创建账号
npm login   登陆账号
```

```

// 发布前执行
package.json
    "scripts": {
        // "prepublish": "npm run build-lib" // 即将废弃
        "prepublishOnly": "npm run build-lib" // 发布前要做的事
    }
    "files": [      // 表示要把哪些资源上传到npm仓库上去，不写默认使用 .gitignore 内的信息
        "lib"
    ],
```

```
npm publish  发布包
```

## 注意事项

解决用户安装我们的包时安装了两份 react 和 react-dom 库

用户在安装时，该处声明的依赖不会被安装

```
"peerDependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
},
```

删除 dependencies 内的两个依赖

```
"react": "^17.0.1",
"react-dom": "^17.0.1"
```

然而开发时还要使用，所以将删除的引用，重新添加到 devDependencies 中

```
"devDependencies": {
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
}
```

## 生成静态文档

```
npm run build-storybook
// 生成 storybook-static 目录
```

## 发布集成

https://travis-ci.com/
