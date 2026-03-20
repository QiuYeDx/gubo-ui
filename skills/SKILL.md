---
name: gubo-ui
description: >-
  Guide for using @guwave/ui Vue3 component library (based on Element Plus,
  G-prefix components). Use when installing, configuring, or integrating
  @guwave/ui components in Vue3 projects. Crucial: verify .npmrc configuration
  for @guwave scope before installation. Triggers on: "@guwave/ui", "gubo-ui",
  "gubo ui", "gubo组件库", "guwave ui", "GButton", "GTable", "GForm",
  "GConfigProvider", "GDialog", "GMessage", "GInput", "GSelect",
  "element-plus私有库", "Vue3组件库".
---

# @guwave/ui 使用指南

基于 Element Plus 的企业级 Vue 3 组件库，使用 TypeScript 编写，组件统一采用 **`G` 前缀**（如 `GButton`、`GTable`）。

- **包名**：`@guwave/ui`
- **Vue 版本要求**：`vue ^3.5.22`
- **样式方案**：SCSS（theme-chalk），需单独导入 CSS
- **组件前缀**：`G`（模板中使用 `<g-button>` 或 `<GButton>`）

## 补充参考文档索引

| 文件                           | 内容                                                   |
| ------------------------------ | ------------------------------------------------------ |
| [components.md](components.md) | 完整组件列表、分类导入速查表、所有导出符号清单         |
| [examples.md](examples.md)     | 常用组件详细代码示例：表单验证、表格、弹窗、消息通知等 |

## 前提条件：.npmrc 配置

`@guwave/ui` 托管在私有仓库，安装前**必须**确保项目根目录下存在 `.npmrc` 文件，并正确配置 `@guwave` 作用域的仓库地址。

检查或创建 `.npmrc`，确保包含以下内容：

```ini
@guwave:registry=http://192.168.2.210:7001/
```

完整 `.npmrc` 示例：

```ini
registry=https://registry.npmmirror.com/

# 必须配置 @guwave 作用域指向私有仓库
@guwave:registry=http://192.168.2.210:7001/
```

## 安装

确认 `.npmrc` 配置正确后，执行安装命令：

**pnpm（推荐）：**

```bash
pnpm i @guwave/ui
```

**npm：**

```bash
npm i @guwave/ui
```

**yarn：**

```bash
yarn add @guwave/ui
```

### 安装失败排查

1. 确认 `.npmrc` 中 `@guwave:registry` 配置正确
2. 确认能访问 `http://192.168.2.210:7001/`（需在内网环境）
3. 删除 `node_modules` 和锁文件后重试：

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

## 导入方式

### 方式一：完整引入（推荐快速上手）

一次性注册所有组件、指令和插件：

```typescript
// main.ts
import { createApp } from 'vue'
import GuboUI from '@guwave/ui'
import '@guwave/ui/dist/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(GuboUI)
app.mount('#app')
```

带全局配置的完整引入：

```typescript
import GuboUI from '@guwave/ui'
import zhCn from '@guwave/ui/es/locale/lang/zh-cn.mjs'

app.use(GuboUI, {
  locale: zhCn,
  size: 'default',
  zIndex: 3000,
})
```

### 方式二：按需引入（推荐生产环境）

按需导入组件，支持 Tree Shaking，减小打包体积：

```vue
<script setup lang="ts">
import { GButton, GForm, GFormItem, GInput } from '@guwave/ui'
import '@guwave/ui/dist/index.css'
</script>

<template>
  <g-form :model="formData">
    <g-form-item label="用户名">
      <g-input v-model="formData.username" />
    </g-form-item>
    <g-form-item>
      <g-button type="primary" @click="onSubmit">提交</g-button>
    </g-form-item>
  </g-form>
</template>
```

导入类型：

```typescript
import type { ButtonProps, FormInstance, TableColumnCtx } from '@guwave/ui'
```

### 样式导入

```typescript
// 全量样式（推荐）
import '@guwave/ui/dist/index.css'

// 或按组件导入样式（需配置构建工具插件）
import '@guwave/ui/es/components/button/style/css'
```

## GConfigProvider 全局配置

`GConfigProvider` 用于统一管理子组件的全局配置，建议包裹在应用最外层。

```vue
<script setup lang="ts">
import { GConfigProvider } from '@guwave/ui'
import zhCn from '@guwave/ui/es/locale/lang/zh-cn.mjs'
</script>

<template>
  <g-config-provider :locale="zhCn" size="default" :z-index="3000">
    <App />
  </g-config-provider>
</template>
```

### ConfigProvider 属性

| 属性        | 类型                              | 默认值 | 说明                 |
| ----------- | --------------------------------- | ------ | -------------------- |
| `locale`    | `Language`                        | `en`   | 国际化语言包         |
| `size`      | `'large' \| 'default' \| 'small'` | —      | 全局组件尺寸         |
| `zIndex`    | `number`                          | —      | 全局 z-index 起始值  |
| `namespace` | `string`                          | `'el'` | CSS 类名前缀         |
| `button`    | `ButtonConfigContext`             | —      | Button 全局默认配置  |
| `message`   | `MessageConfigContext`            | —      | Message 全局默认配置 |
| `a11y`      | `boolean`                         | `true` | 是否启用无障碍功能   |

## 国际化

内置 60+ 种语言包，从 `@guwave/ui/es/locale/lang/` 导入：

```typescript
// 中文
import zhCn from '@guwave/ui/es/locale/lang/zh-cn.mjs'
// 英文
import en from '@guwave/ui/es/locale/lang/en.mjs'
// 日文
import ja from '@guwave/ui/es/locale/lang/ja.mjs'
```

动态切换语言：

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { GConfigProvider } from '@guwave/ui'
import zhCn from '@guwave/ui/es/locale/lang/zh-cn.mjs'
import en from '@guwave/ui/es/locale/lang/en.mjs'

const locale = ref(zhCn)
const toggleLang = () => {
  locale.value = locale.value === zhCn ? en : zhCn
}
</script>

<template>
  <g-config-provider :locale="locale">
    <App />
    <g-button @click="toggleLang">切换语言</g-button>
  </g-config-provider>
</template>
```

## 组件概览

> 完整组件列表和导入速查见 [components.md](components.md)

| 类别     | 组件                                                                                                                                                                                                                          |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 通用     | Button, Icon, Link, Text, Scrollbar                                                                                                                                                                                           |
| 布局     | Container, Aside, Header, Footer, Main, Row, Col, Space, Divider, Splitter                                                                                                                                                    |
| 导航     | Affix, Anchor, Backtop, Breadcrumb, Dropdown, Menu, PageHeader, Pagination, Steps, Tabs                                                                                                                                       |
| 数据录入 | Autocomplete, Cascader, Checkbox, ColorPicker, DatePicker, Form, Input, InputNumber, InputTag, Mention, Radio, Rate, Select, SelectV2, Slider, Switch, TimePicker, TimeSelect, Transfer, TreeSelect, Upload                   |
| 数据展示 | Avatar, Badge, Calendar, Card, Carousel, Collapse, Countdown, Descriptions, Empty, Image, Pagination, Progress, Result, Segmented, Skeleton, Statistic, Table, TableV2, Tag, Timeline, Tooltip, Tour, Tree, TreeV2, Watermark |
| 反馈     | Alert, Dialog, Drawer, Loading, Message, MessageBox, Notification, Popconfirm, Popover                                                                                                                                        |
| 其他     | ConfigProvider, InfiniteScroll, CollapseTransition, Teleport, VirtualList                                                                                                                                                     |

## 快速示例

### Button 按钮

```vue
<script setup lang="ts">
import { GButton, GSpace } from '@guwave/ui'
</script>

<template>
  <g-space>
    <g-button>默认按钮</g-button>
    <g-button type="primary">主要按钮</g-button>
    <g-button type="success">成功按钮</g-button>
    <g-button type="warning">警告按钮</g-button>
    <g-button type="danger">危险按钮</g-button>
    <g-button type="info">信息按钮</g-button>
  </g-space>
  <g-space>
    <g-button plain>朴素按钮</g-button>
    <g-button round>圆角按钮</g-button>
    <g-button circle>圆</g-button>
    <g-button dashed>虚线按钮</g-button>
    <g-button text>文字按钮</g-button>
    <g-button link>链接按钮</g-button>
    <g-button :loading="true">加载中</g-button>
  </g-space>
</template>
```

### Form + Input 表单

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { GButton, GForm, GFormItem, GInput } from '@guwave/ui'

import type { FormInstance, FormRules } from '@guwave/ui'

const formRef = ref<FormInstance>()
const form = ref({ username: '', password: '' })

const rules: FormRules = {
  username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 6, message: '密码不少于6位', trigger: 'blur' },
  ],
}

const onSubmit = async () => {
  const valid = await formRef.value?.validate().catch(() => false)
  if (valid) console.log('提交:', form.value)
}

const onReset = () => formRef.value?.resetFields()
</script>

<template>
  <g-form ref="formRef" :model="form" :rules="rules" label-width="80px">
    <g-form-item label="用户名" prop="username">
      <g-input v-model="form.username" placeholder="请输入用户名" />
    </g-form-item>
    <g-form-item label="密码" prop="password">
      <g-input v-model="form.password" type="password" show-password />
    </g-form-item>
    <g-form-item>
      <g-button type="primary" @click="onSubmit">提交</g-button>
      <g-button @click="onReset">重置</g-button>
    </g-form-item>
  </g-form>
</template>
```

### Message / Notification / MessageBox

```vue
<script setup lang="ts">
import { GButton, GMessage, GMessageBox, GNotification } from '@guwave/ui'

const showMessage = () => {
  GMessage.success('操作成功')
}

const showNotify = () => {
  GNotification({
    title: '提示',
    message: '这是一条通知消息',
    type: 'info',
  })
}

const showConfirm = () => {
  GMessageBox.confirm('确定要删除吗？', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      GMessage.success('删除成功')
    })
    .catch(() => {
      GMessage.info('已取消')
    })
}
</script>

<template>
  <g-button @click="showMessage">消息提示</g-button>
  <g-button @click="showNotify">通知</g-button>
  <g-button @click="showConfirm">确认框</g-button>
</template>
```

> 更多组件示例见 [examples.md](examples.md)

## 指令

内置自定义指令，通过 `app.use(GuboUI)` 全量引入时自动注册，按需使用时需手动导入：

| 指令                | 说明                           |
| ------------------- | ------------------------------ |
| `v-loading`         | 加载指令，在元素上显示加载状态 |
| `v-infinite-scroll` | 无限滚动指令                   |
| `ClickOutside`      | 点击外部检测                   |
| `vRepeatClick`      | 长按重复触发                   |
| `TrapFocus`         | 焦点陷阱                       |
| `Mousewheel`        | 鼠标滚轮事件规范化             |

```vue
<template>
  <div v-loading="isLoading">加载中的内容</div>

  <div v-infinite-scroll="loadMore" :infinite-scroll-distance="100">
    <div v-for="item in list" :key="item.id">{{ item.name }}</div>
  </div>
</template>
```

## 注意事项

- **禁止使用 `@element-plus/icons-vue`**：团队有独立的图标方案，**不要**在代码中导入或使用 `@element-plus/icons-vue`。生成示例代码时也不要引入该图标库。如需图标，请咨询用户团队使用的图标库
- **组件前缀为 `G`**：所有组件导出名以 `G` 开头（`GButton`、`GTable` 等），模板中可用 `<g-button>` 或 `<GButton>`
- **样式必须导入**：无论全量还是按需引入组件，都需要导入 CSS 样式文件，建议在项目入口文件导入
- **`GMessage` / `GNotification` / `GMessageBox` 是命令式 API**：通过函数调用使用，非模板组件
- **`GConfigProvider` 建议包裹在应用最外层**：统一管理语言、尺寸、z-index 等全局配置
- **日期相关组件默认使用 `dayjs`**：DatePicker、TimePicker、Calendar 等
- **`GLoading` 同时提供指令和服务两种用法**：`v-loading` 指令用于局部加载，`GLoading.service()` 用于全屏加载
- **Tree Shaking 支持**：按需导入时未使用的组件不会打入最终产物
- **TypeScript 全局类型支持**：在 `tsconfig.json` 中添加 `"types": ["@guwave/ui/global"]` 可获得模板中组件的类型提示
