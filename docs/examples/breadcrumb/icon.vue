<template>
  <g-breadcrumb :separator-icon="ArrowRight">
    <g-breadcrumb-item :to="{ path: '/' }">homepage</g-breadcrumb-item>
    <g-breadcrumb-item>promotion management</g-breadcrumb-item>
    <g-breadcrumb-item>promotion list</g-breadcrumb-item>
    <g-breadcrumb-item>promotion detail</g-breadcrumb-item>
  </g-breadcrumb>
</template>

<script lang="ts" setup>
import { ArrowRight } from '@element-plus/icons-vue'
</script>
