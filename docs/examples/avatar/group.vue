<template>
  <div class="m-4">
    <p>default</p>
    <g-avatar-group>
      <g-avatar v-for="number in 5" :key="number" :src="circleUrl" />
    </g-avatar-group>
  </div>
  <div class="m-4">
    <p>use collapse-avatars</p>
    <g-avatar-group collapse-avatars>
      <g-avatar v-for="number in 5" :key="number" :src="circleUrl" />
    </g-avatar-group>
  </div>
  <div class="m-4">
    <p>use collapse-class and collapse-style</p>
    <g-avatar-group
      collapse-avatars
      :collapse-style="{ 'background-color': '#d9ecff' }"
      collapse-class="my-collapse-avatar"
    >
      <g-avatar v-for="number in 5" :key="number" :src="circleUrl" />
    </g-avatar-group>
  </div>
  <div class="m-4">
    <p>use max-collapse-avatars</p>
    <g-avatar-group collapse-avatars :max-collapse-avatars="3">
      <g-avatar v-for="number in 5" :key="number" :src="circleUrl" />
    </g-avatar-group>
  </div>
  <div class="m-4">
    <p>use collapse-avatars-tooltip</p>
    <g-avatar-group
      collapse-avatars
      :max-collapse-avatars="3"
      collapse-avatars-tooltip
    >
      <g-avatar v-for="number in 5" :key="number" :src="circleUrl" />
    </g-avatar-group>
  </div>
</template>

<script lang="ts" setup>
const circleUrl =
  'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
</script>

<style>
.my-collapse-avatar {
  color: #409eff;
}
</style>
