# vue-webpack-simple


```js
  npm i simple-custom-demo

```

## 完整引入

```js
import SimpleCustomDemo from './simple-custom-demo'
Vue.use(SimpleCustomDemo)

<custom-button bgcolor="#67c23a" color="#fff">成功</custom-button>
<custom-input v-model="input2" placeholder="请输入信息"></custom-input>
```

## 按需引入

```js
import { CustomButton } from 'simple-custom-demo'
Vue.use(CustomButton)

<custom-button bgcolor="#67c23a" color="#fff">成功</custom-button>
```

```js
  npm i babel-plugin-import -D

```

### 编辑 babel.config.js

```js
  plugins: [
    ['import',
      {
        libraryName: 'simple-custom-demo',
        customName(name) {
          return `simple-custom-demo/src/packages/${name}`
        },
      }
    ]
  ]
```
