---
title: Built-in Transitions
lang: en-US
---

# Built-in Transition

You can use Element's built-in transitions directly.
Before that, please read the [transition docs](https://vuejs.org/guide/built-ins/transition.html).

## Fade

:::demo We have two fading effects: `g-fade-in-linear` and `g-fade-in`.

transitions/fade

:::

## Zoom

:::demo `g-zoom-in-left`, `g-zoom-in-center`, `g-zoom-in-top` and `g-zoom-in-bottom` are provided.

transitions/zoom

:::

## Collapse

For collapse effect, use the `g-collapse-transition` component.

:::demo

transitions/collapse

:::

## On-demand import

```ts [main.ts]
// collapse
import { GCollapseTransition } from 'element-plus'
// fade/zoom
import 'element-plus/theme-chalk/base.css'
import App from './App.vue'

const app = createApp(App)
app.component(GCollapseTransition.name, GCollapseTransition)
```
