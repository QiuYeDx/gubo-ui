# 组件完整列表与导入速查

所有组件从 `@guwave/ui` 统一导入，组件名均以 `G` 前缀命名。

## 通用组件

```typescript
import {
  GButton,        // 按钮
  GButtonGroup,   // 按钮组
  GIcon,          // 图标
  GLink,          // 链接
  GText,          // 文本
  GScrollbar,     // 自定义滚动条
} from '@guwave/ui'
```

## 布局组件

```typescript
import {
  GContainer,     // 布局容器
  GAside,         // 侧边栏
  GHeader,        // 顶栏
  GFooter,        // 底栏
  GMain,          // 主体区域
  GRow,           // 行布局
  GCol,           // 列布局
  GSpace,         // 间距
  GDivider,       // 分割线
  GSplitter,      // 分割面板
  GSplitterPanel, // 分割面板子项
} from '@guwave/ui'
```

## 导航组件

```typescript
import {
  GAffix,          // 固钉
  GAnchor,         // 锚点
  GAnchorLink,     // 锚点链接
  GBacktop,        // 回到顶部
  GBreadcrumb,     // 面包屑
  GBreadcrumbItem, // 面包屑子项
  GDropdown,       // 下拉菜单
  GDropdownItem,   // 下拉菜单项
  GDropdownMenu,   // 下拉菜单列表
  GMenu,           // 导航菜单
  GMenuItem,       // 菜单项
  GMenuItemGroup,  // 菜单分组
  GSubMenu,        // 子菜单
  GPageHeader,     // 页头
  GPagination,     // 分页
  GSteps,          // 步骤条
  GStep,           // 步骤条子项
  GTabs,           // 标签页
  GTabPane,        // 标签面板
} from '@guwave/ui'
```

## 数据录入组件

```typescript
import {
  GAutocomplete,   // 自动补全
  GCascader,       // 级联选择器
  GCascaderPanel,  // 级联面板
  GCheckbox,       // 多选框
  GCheckboxButton, // 多选按钮
  GCheckboxGroup,  // 多选组
  GColorPicker,    // 颜色选择器
  GColorPickerPanel, // 颜色选择器面板
  GDatePicker,     // 日期选择器
  GDatePickerPanel,// 日期选择器面板
  GForm,           // 表单
  GFormItem,       // 表单项
  GInput,          // 输入框
  GInputNumber,    // 数字输入框
  GInputTag,       // 标签输入框
  GMention,        // 提及（@）
  GRadio,          // 单选框
  GRadioButton,    // 单选按钮
  GRadioGroup,     // 单选组
  GRate,           // 评分
  GSelect,         // 选择器
  GOption,         // 选择器选项
  GOptionGroup,    // 选择器分组
  GSelectV2,       // 虚拟化选择器（大数据量）
  GSlider,         // 滑块
  GSwitch,         // 开关
  GTimePicker,     // 时间选择器
  GTimeSelect,     // 时间选择（固定间隔）
  GTransfer,       // 穿梭框
  GTreeSelect,     // 树形选择器
  GUpload,         // 上传
} from '@guwave/ui'
```

## 数据展示组件

```typescript
import {
  GAvatar,          // 头像
  GAvatarGroup,     // 头像组
  GBadge,           // 徽章
  GCalendar,        // 日历
  GCard,            // 卡片
  GCarousel,        // 走马灯
  GCarouselItem,    // 走马灯子项
  GCheckTag,        // 可选标签
  GCollapse,        // 折叠面板
  GCollapseItem,    // 折叠面板子项
  GCountdown,       // 倒计时
  GDescriptions,    // 描述列表
  GDescriptionsItem,// 描述列表子项
  GEmpty,           // 空状态
  GImage,           // 图片
  GImageViewer,     // 图片查看器
  GProgress,        // 进度条
  GResult,          // 结果页
  GSegmented,       // 分段控制器
  GSkeleton,        // 骨架屏
  GSkeletonItem,    // 骨架屏子项
  GStatistic,       // 统计数值
  GTable,           // 表格
  GTableColumn,     // 表格列
  GTableV2,         // 虚拟化表格（大数据量）
  GAutoResizer,     // 自动调整容器（配合 TableV2）
  GTag,             // 标签
  GTimeline,        // 时间线
  GTimelineItem,    // 时间线子项
  GTooltip,         // 文字提示
  GTour,            // 漫游式引导
  GTourStep,        // 引导步骤
  GTree,            // 树形控件
  GTreeV2,          // 虚拟化树形控件（大数据量）
  GWatermark,       // 水印
} from '@guwave/ui'
```

## 反馈组件

```typescript
import {
  GAlert,          // 警告提示
  GDialog,         // 对话框
  GDrawer,         // 抽屉
  GPopconfirm,     // 气泡确认框
  GPopover,        // 气泡卡片
} from '@guwave/ui'
```

## 命令式 API（函数调用）

以下为命令式组件，通过函数调用使用，非模板组件：

```typescript
import {
  GMessage,        // 消息提示（GMessage.success / .warning / .info / .error）
  GMessageBox,     // 消息弹框（GMessageBox.confirm / .alert / .prompt）
  GNotification,   // 通知（GNotification({ title, message, type })）
  GLoading,        // 加载服务（GLoading.service(options)）
} from '@guwave/ui'
```

全量引入后也可通过 Vue 实例方法访问（Options API）：

| 函数式导入 | 实例方法 | 说明 |
| --- | --- | --- |
| `GMessage` | `this.$message` | 全局消息提示 |
| `GMessageBox` | `this.$msgbox` / `this.$alert` / `this.$confirm` / `this.$prompt` | 消息弹框 |
| `GNotification` | `this.$notify` | 通知消息 |
| `GLoading.service()` | `this.$loading` | 全屏加载 |

## 指令

```typescript
import {
  GInfiniteScroll,   // v-infinite-scroll 无限滚动
  GLoading,          // v-loading 加载指令
  ClickOutside,      // 点击外部检测
  vRepeatClick,      // 长按重复触发
  TrapFocus,         // 焦点陷阱
  Mousewheel,        // 鼠标滚轮事件
  GPopoverDirective, // v-popover 指令
} from '@guwave/ui'
```

## 内置 Hooks（Composables）

从 `@guwave/ui` 导出的可组合函数，主要用于组件库内部，部分可在业务代码中使用：

```typescript
import {
  useLocale,          // 国际化
  useNamespace,       // CSS 命名空间
  useZIndex,          // z-index 管理
  useId,              // 唯一 ID 生成
  useDraggable,       // 拖拽
  useFocus,           // 焦点管理
  useLockscreen,      // 锁屏滚动
  useSize,            // 尺寸管理
  useEscapeKeydown,   // ESC 键监听
} from '@guwave/ui'
```

## 常量

```typescript
import {
  componentSizes,     // ['', 'default', 'small', 'large']
  componentSizeMap,   // { large: 40, default: 32, small: 24 }
} from '@guwave/ui'
import type { ComponentSize } from '@guwave/ui'
```

## 类型导出速查

```typescript
import type {
  // 组件实例类型
  FormInstance,
  TableInstance,
  ButtonInstance,
  InputInstance,
  SelectInstance,
  UploadInstance,
  TreeInstance,

  // Props 类型
  ButtonProps,
  FormProps,
  FormRules,
  InputProps,
  TableProps,
  DialogProps,
  DrawerProps,

  // 表格相关
  TableColumnCtx,

  // 上传相关
  UploadFile,
  UploadProps,
  UploadRawFile,
  UploadRequestOptions,

  // 树相关
  TreeData,
  TreeKey,
  TreeNodeData,

  // 日期相关
  DateModelType,

  // 通用
  ComponentSize,
  FormItemProp,
  FormValidateCallback,
  ConfigProviderProps,
} from '@guwave/ui'
```

## dayjs 导出

`@guwave/ui` 直接导出 dayjs 实例，无需额外安装：

```typescript
import { dayjs } from '@guwave/ui'

const now = dayjs()
const formatted = dayjs('2025-01-01').format('YYYY年MM月DD日')
```
