<template>
  <g-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :rules="rules"
  >
    <g-form-item label="name" prop="name">
      <g-mention v-model="ruleForm.name" :options="options" />
    </g-form-item>
    <g-form-item label="desc" prop="desc">
      <g-mention v-model="ruleForm.desc" type="textarea" :options="options" />
    </g-form-item>
    <g-form-item>
      <g-button type="primary" @click="submitForm(ruleFormRef)">
        Submit
      </g-button>
      <g-button @click="resetForm(ruleFormRef)">Reset</g-button>
    </g-form-item>
  </g-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

import type { FormInstance, FormRules } from 'element-plus'

interface RuleForm {
  name: string
  desc: string
}
const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: '',
  desc: '',
})

const options = ref([
  {
    label: 'Fuphoenixes',
    value: 'Fuphoenixes',
  },
  {
    label: 'kooriookami',
    value: 'kooriookami',
  },
  {
    label: 'Jeremy',
    value: 'Jeremy',
  },
  {
    label: 'btea',
    value: 'btea',
  },
])

const rules = reactive<FormRules<RuleForm>>({
  name: [{ required: true, message: 'Please input name', trigger: 'blur' }],
  desc: [{ required: true, message: 'Please input desc', trigger: 'blur' }],
})

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
