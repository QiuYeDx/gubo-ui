<template>
  <g-page-header>
    <template #breadcrumb>
      <g-breadcrumb separator="/">
        <g-breadcrumb-item :to="{ path: './page-header.html' }">
          homepage
        </g-breadcrumb-item>
        <g-breadcrumb-item
          ><a href="./page-header.html">route 1</a></g-breadcrumb-item
        >
        <g-breadcrumb-item>route 2</g-breadcrumb-item>
      </g-breadcrumb>
    </template>
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </g-page-header>
</template>
