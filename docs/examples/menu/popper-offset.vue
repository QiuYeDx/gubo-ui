<template>
  <g-menu
    ellipsis
    class="g-menu-popper-demo"
    mode="horizontal"
    :popper-offset="16"
    style="max-width: 600px"
  >
    <g-menu-item index="1">Processing Center</g-menu-item>
    <g-sub-menu index="2">
      <template #title>Workspace</template>
      <g-menu-item index="2-1">item one</g-menu-item>
      <g-menu-item index="2-2">item two</g-menu-item>
      <g-menu-item index="2-3">item three</g-menu-item>
      <g-sub-menu index="2-4">
        <template #title>item four</template>
        <g-menu-item index="2-4-1">item one</g-menu-item>
        <g-menu-item index="2-4-2">item two</g-menu-item>
        <g-menu-item index="2-4-3">item three</g-menu-item>
      </g-sub-menu>
    </g-sub-menu>
    <g-sub-menu index="3" :popper-offset="8">
      <template #title>Override Popper Offset</template>
      <g-menu-item index="3-1">item one</g-menu-item>
      <g-menu-item index="3-2">item two</g-menu-item>
      <g-menu-item index="3-3">item three</g-menu-item>
      <g-sub-menu index="3-4" :popper-offset="20">
        <template #title>override child</template>
        <g-menu-item index="3-4-1">item one</g-menu-item>
        <g-menu-item index="3-4-2">item two</g-menu-item>
        <g-menu-item index="3-4-3">item three</g-menu-item>
      </g-sub-menu>
    </g-sub-menu>
    <g-menu-item index="4" disabled>Info</g-menu-item>
    <g-menu-item index="5">Orders</g-menu-item>
  </g-menu>
</template>

<script lang="ts" setup></script>
