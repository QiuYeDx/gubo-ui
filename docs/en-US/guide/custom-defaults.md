---
title: Custom Defaults
lang: en-US
---

# Custom Defaults

The component library allows you to customize the default values of component props.

By configuring defaults in advance, you can reduce repetitive prop declarations and keep your templates cleaner and more consistent.

## Basic Usage

You can customize a component’s default props using the static `setPropsDefaults` method provided by the component.

:::tip

Note that default customization **only applies to declarative components** and **must be performed before the component is initialized**.

The configured defaults are global. Once set, they will apply to all Vue applications where the component is registered.

Once the component is rendered for the first time, the defaults become immutable and can no longer be changed.

:::

```ts [main.ts]
import { GButton } from 'element-plus'

GButton.setPropsDefaults({
  type: 'primary',
  size: 'small',
})
```

After applying the customization, the following two usages are equivalent:

```vue [App.vue]
<template>
  <g-button>Hello</g-button>
  <g-button type="primary" size="small">Hello</g-button>
</template>
```

::: warning

It is not recommended to set default values for components that are internally used by other components.

For example:

```ts
// This will cause the behavior of the g-autocomplete component to change.
GInput.setPropsDefaults({ maxlength: 1 })
```

:::
