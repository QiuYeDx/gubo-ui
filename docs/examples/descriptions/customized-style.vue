<template>
  <g-descriptions title="Customized style list" :column="3" border>
    <g-descriptions-item
      label="Username"
      label-align="right"
      align="center"
      label-class-name="my-label"
      class-name="my-content"
      width="150px"
    >
      kooriookami
    </g-descriptions-item>
    <g-descriptions-item label="Telephone" label-align="right" align="center">
      18100000000
    </g-descriptions-item>
    <g-descriptions-item label="Place" label-align="right" align="center">
      Suzhou
    </g-descriptions-item>
    <g-descriptions-item label="Remarks" label-align="right" align="center">
      <g-tag size="small">School</g-tag>
    </g-descriptions-item>
    <g-descriptions-item label="Address" label-align="right" align="center">
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </g-descriptions-item>
  </g-descriptions>
</template>

<style scoped>
:deep(.my-label) {
  background: var(--g-color-success-light-9) !important;
}
:deep(.my-content) {
  background: var(--g-color-danger-light-9);
}
</style>
