# 常用组件示例

## Table 表格

### 基础表格

```vue
<script setup lang="ts">
import { GTable, GTableColumn } from '@guwave/ui'

const tableData = [
  { date: '2025-01-01', name: '张三', address: '北京市朝阳区' },
  { date: '2025-01-02', name: '李四', address: '上海市浦东新区' },
  { date: '2025-01-03', name: '王五', address: '广州市天河区' },
]
</script>

<template>
  <g-table :data="tableData" stripe border>
    <g-table-column prop="date" label="日期" width="180" />
    <g-table-column prop="name" label="姓名" width="120" />
    <g-table-column prop="address" label="地址" />
  </g-table>
</template>
```

### 排序与筛选

```vue
<script setup lang="ts">
import { GTable, GTableColumn } from '@guwave/ui'

const tableData = [
  { date: '2025-01-01', name: '张三', age: 30, status: 'active' },
  { date: '2025-01-02', name: '李四', age: 25, status: 'inactive' },
  { date: '2025-01-03', name: '王五', age: 35, status: 'active' },
]
</script>

<template>
  <g-table
    :data="tableData"
    :default-sort="{ prop: 'age', order: 'ascending' }"
  >
    <g-table-column prop="name" label="姓名" />
    <g-table-column prop="age" label="年龄" sortable />
    <g-table-column
      prop="status"
      label="状态"
      :filters="[
        { text: '激活', value: 'active' },
        { text: '未激活', value: 'inactive' },
      ]"
      :filter-method="(value: string, row: any) => row.status === value"
    />
  </g-table>
</template>
```

### 自定义列（插槽）

```vue
<script setup lang="ts">
import { GButton, GMessage, GTable, GTableColumn, GTag } from '@guwave/ui'

interface Row {
  name: string
  status: 'success' | 'warning' | 'danger'
  tag: string
}

const tableData: Row[] = [
  { name: '张三', status: 'success', tag: 'VIP' },
  { name: '李四', status: 'warning', tag: '普通' },
]

const handleEdit = (row: Row) => GMessage.info(`编辑: ${row.name}`)
const handleDelete = (row: Row) => GMessage.warning(`删除: ${row.name}`)
</script>

<template>
  <g-table :data="tableData">
    <g-table-column prop="name" label="姓名" />
    <g-table-column label="状态">
      <template #default="{ row }">
        <g-tag :type="row.status">{{ row.tag }}</g-tag>
      </template>
    </g-table-column>
    <g-table-column label="操作" width="200">
      <template #default="{ row }">
        <g-button type="primary" link @click="handleEdit(row)">编辑</g-button>
        <g-button type="danger" link @click="handleDelete(row)">删除</g-button>
      </template>
    </g-table-column>
  </g-table>
</template>
```

## Dialog 对话框

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { GButton, GDialog, GForm, GFormItem, GInput } from '@guwave/ui'

const visible = ref(false)
const form = ref({ name: '', email: '' })
</script>

<template>
  <g-button type="primary" @click="visible = true">打开对话框</g-button>

  <g-dialog v-model="visible" title="新建用户" width="500px">
    <g-form :model="form" label-width="80px">
      <g-form-item label="姓名">
        <g-input v-model="form.name" />
      </g-form-item>
      <g-form-item label="邮箱">
        <g-input v-model="form.email" />
      </g-form-item>
    </g-form>
    <template #footer>
      <g-button @click="visible = false">取消</g-button>
      <g-button type="primary" @click="visible = false">确定</g-button>
    </template>
  </g-dialog>
</template>
```

## Drawer 抽屉

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { GButton, GDrawer } from '@guwave/ui'

const visible = ref(false)
</script>

<template>
  <g-button @click="visible = true">打开抽屉</g-button>

  <g-drawer v-model="visible" title="详情" direction="rtl" size="400px">
    <p>抽屉内容</p>
    <template #footer>
      <g-button @click="visible = false">关闭</g-button>
    </template>
  </g-drawer>
</template>
```

## Select 选择器

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { GOption, GSelect } from '@guwave/ui'

const value = ref('')
const options = [
  { value: 'beijing', label: '北京' },
  { value: 'shanghai', label: '上海' },
  { value: 'guangzhou', label: '广州' },
  { value: 'shenzhen', label: '深圳' },
]
</script>

<template>
  <g-select v-model="value" placeholder="请选择城市" clearable filterable>
    <g-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </g-select>
</template>
```

### SelectV2 虚拟化选择器（大数据量）

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { GSelectV2 } from '@guwave/ui'

const value = ref('')
const options = Array.from({ length: 10000 }, (_, i) => ({
  value: `option-${i}`,
  label: `选项 ${i}`,
}))
</script>

<template>
  <g-select-v2
    v-model="value"
    :options="options"
    placeholder="请选择（支持万级数据）"
    filterable
    style="width: 240px"
  />
</template>
```

## DatePicker 日期选择器

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { GDatePicker } from '@guwave/ui'

const date = ref('')
const dateRange = ref<[string, string]>(['', ''])
</script>

<template>
  <!-- 单日期 -->
  <g-date-picker
    v-model="date"
    type="date"
    placeholder="选择日期"
    format="YYYY-MM-DD"
    value-format="YYYY-MM-DD"
  />

  <!-- 日期范围 -->
  <g-date-picker
    v-model="dateRange"
    type="daterange"
    range-separator="至"
    start-placeholder="开始日期"
    end-placeholder="结束日期"
    value-format="YYYY-MM-DD"
  />
</template>
```

## Tabs 标签页

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { GTabPane, GTabs } from '@guwave/ui'

const activeTab = ref('first')
</script>

<template>
  <g-tabs v-model="activeTab" type="border-card">
    <g-tab-pane label="用户列表" name="first">用户列表内容</g-tab-pane>
    <g-tab-pane label="配置管理" name="second">配置管理内容</g-tab-pane>
    <g-tab-pane label="角色管理" name="third">角色管理内容</g-tab-pane>
  </g-tabs>
</template>
```

## Upload 上传

```vue
<script setup lang="ts">
import { GButton, GMessage, GUpload } from '@guwave/ui'

import type { UploadFile, UploadProps } from '@guwave/ui'

const handleSuccess: UploadProps['onSuccess'] = (response, file, fileList) => {
  GMessage.success(`${file.name} 上传成功`)
}

const handleError: UploadProps['onError'] = (error, file) => {
  GMessage.error(`${file.name} 上传失败`)
}

const beforeUpload: UploadProps['beforeUpload'] = (rawFile) => {
  if (rawFile.size > 5 * 1024 * 1024) {
    GMessage.error('文件大小不能超过 5MB')
    return false
  }
  return true
}
</script>

<template>
  <g-upload
    action="https://your-api.com/upload"
    :on-success="handleSuccess"
    :on-error="handleError"
    :before-upload="beforeUpload"
    :limit="3"
    multiple
  >
    <g-button type="primary">点击上传</g-button>
    <template #tip>
      <div style="color: #999; font-size: 12px">只能上传 5MB 以内的文件</div>
    </template>
  </g-upload>
</template>
```

## Tree 树形控件

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { GTree } from '@guwave/ui'

import type { TreeData } from '@guwave/ui'

const treeData: TreeData = [
  {
    label: '一级 1',
    children: [
      {
        label: '二级 1-1',
        children: [{ label: '三级 1-1-1' }, { label: '三级 1-1-2' }],
      },
    ],
  },
  {
    label: '一级 2',
    children: [{ label: '二级 2-1' }, { label: '二级 2-2' }],
  },
]

const handleNodeClick = (data: any) => {
  console.log('点击节点:', data.label)
}
</script>

<template>
  <g-tree
    :data="treeData"
    show-checkbox
    default-expand-all
    node-key="label"
    @node-click="handleNodeClick"
  />
</template>
```

## Cascader 级联选择器

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { GCascader } from '@guwave/ui'

const value = ref<string[]>([])
const options = [
  {
    value: 'zhejiang',
    label: '浙江',
    children: [
      {
        value: 'hangzhou',
        label: '杭州',
        children: [
          { value: 'xihu', label: '西湖区' },
          { value: 'binjiang', label: '滨江区' },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: '江苏',
    children: [
      {
        value: 'nanjing',
        label: '南京',
        children: [{ value: 'gulou', label: '鼓楼区' }],
      },
    ],
  },
]
</script>

<template>
  <g-cascader
    v-model="value"
    :options="options"
    placeholder="请选择地区"
    clearable
    :props="{ expandTrigger: 'hover' }"
  />
</template>
```

## Loading 加载

### 指令方式

```vue
<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(true)
setTimeout(() => (loading.value = false), 2000)
</script>

<template>
  <div v-loading="loading" element-loading-text="加载中...">
    <p>内容区域</p>
  </div>
</template>
```

### 服务方式（全屏加载）

```typescript
import { GLoading } from '@guwave/ui'

const loading = GLoading.service({
  lock: true,
  text: '加载中...',
  background: 'rgba(0, 0, 0, 0.7)',
})

setTimeout(() => loading.close(), 3000)
```

## Pagination 分页

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { GPagination } from '@guwave/ui'

const currentPage = ref(1)
const pageSize = ref(10)
const total = ref(200)

const handleCurrentChange = (val: number) => {
  console.log('当前页:', val)
}
</script>

<template>
  <g-pagination
    v-model:current-page="currentPage"
    v-model:page-size="pageSize"
    :total="total"
    :page-sizes="[10, 20, 50, 100]"
    layout="total, sizes, prev, pager, next, jumper"
    @current-change="handleCurrentChange"
  />
</template>
```
