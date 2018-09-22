# react_webpack_starter

此项目从 https://github.com/bradtraversy/react_webpack_starter fork 出来。

我把它分解成了多个分支，每一个分支只演示一个功能，目的是让学习的人能更好地跟随。

## Quick Start

```bash
# Install dependencies
npm install

# Serve on localhost:3000
npm start

# Build for production
npm run build
```

## Branches

-   master: 空壳，什么都没有。
-   01-quick-start: 快速上手。
-   02-css-loader: 演示 css-loader/sass-loader/style-loader
-   03-font-loader: 增加 font-loader
-   04-image-loader: 增加 image-loader
-   05-use-typescript: 配置 typescript，在 React 里面配置 TS 有一些麻烦，会浪费一些时间，这里配置好了。
-   06-react-router: 增加 react-router
-   07-code-split-at-router-level: 根据路由切分代码。
-   08-manifest：生成清单
-   09-caching：处理缓存
-   10-HMR：启用 HMR 机制
-   11-redux-intro: react+redux+typescript+webpack 模板项目，从 https://github.com/rokoroku/react-redux-typescript-boilerplate 拷贝的代码，整合 Redux 和 TypeScript 的过程比较繁琐，不建议直接使用 Redux，太烦人了。
-   12-mobx: mobx 的基本用法，这个例子从 https://github.com/leighhalliday/create-react-app-mobx 拷贝过来，因为这个作者给例子配了一个 31 分钟的视频，所以这里不改代码，就让它和视频里面演示的内容保持一致，视频在这里（墙）：https://www.youtube.com/watch?v=Dp75-DnGFrU 。相对于 Redux 来说，Mobx 简直是天堂，试试吧。
-   13-write-my-loader：编写自己的 loader 实例
-   14-write-my-plugin：编写自己的 plugin 实例
