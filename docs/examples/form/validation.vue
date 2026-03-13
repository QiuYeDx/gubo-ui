<template>
  <g-form
    ref="ruleFormRef"
    style="max-width: 600px"
    :model="ruleForm"
    :rules="rules"
    label-width="auto"
  >
    <g-form-item label="Activity name" prop="name">
      <g-input v-model="ruleForm.name" />
    </g-form-item>
    <g-form-item label="Activity zone" prop="region">
      <g-select v-model="ruleForm.region" placeholder="Activity zone">
        <g-option label="Zone one" value="shanghai" />
        <g-option label="Zone two" value="beijing" />
      </g-select>
    </g-form-item>
    <g-form-item label="Activity count" prop="count">
      <g-select-v2
        v-model="ruleForm.count"
        placeholder="Activity count"
        :options="options"
      />
    </g-form-item>
    <g-form-item label="Activity time" required>
      <g-col :span="11">
        <g-form-item prop="date1">
          <g-date-picker
            v-model="ruleForm.date1"
            type="date"
            aria-label="Pick a date"
            placeholder="Pick a date"
            style="width: 100%"
          />
        </g-form-item>
      </g-col>
      <g-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </g-col>
      <g-col :span="11">
        <g-form-item prop="date2">
          <g-time-picker
            v-model="ruleForm.date2"
            aria-label="Pick a time"
            placeholder="Pick a time"
            style="width: 100%"
          />
        </g-form-item>
      </g-col>
    </g-form-item>
    <g-form-item label="Instant delivery" prop="delivery">
      <g-switch v-model="ruleForm.delivery" />
    </g-form-item>
    <g-form-item label="Activity location" prop="location">
      <g-segmented v-model="ruleForm.location" :options="locationOptions" />
    </g-form-item>
    <g-form-item label="Activity type" prop="type">
      <g-checkbox-group v-model="ruleForm.type">
        <g-checkbox value="Online activities" name="type">
          Online activities
        </g-checkbox>
        <g-checkbox value="Promotion activities" name="type">
          Promotion activities
        </g-checkbox>
        <g-checkbox value="Offline activities" name="type">
          Offline activities
        </g-checkbox>
        <g-checkbox value="Simple brand exposure" name="type">
          Simple brand exposure
        </g-checkbox>
      </g-checkbox-group>
    </g-form-item>
    <g-form-item label="Resources" prop="resource">
      <g-radio-group v-model="ruleForm.resource">
        <g-radio value="Sponsorship">Sponsorship</g-radio>
        <g-radio value="Venue">Venue</g-radio>
      </g-radio-group>
    </g-form-item>
    <g-form-item label="Activity form" prop="desc">
      <g-input v-model="ruleForm.desc" type="textarea" />
    </g-form-item>
    <g-form-item>
      <g-button type="primary" @click="submitForm(ruleFormRef)">
        Create
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
  region: string
  count: string
  date1: string
  date2: string
  delivery: boolean
  location: string
  type: string[]
  resource: string
  desc: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: 'Hello',
  region: '',
  count: '',
  date1: '',
  date2: '',
  delivery: false,
  location: '',
  type: [],
  resource: '',
  desc: '',
})

const locationOptions = ['Home', 'Company', 'School']

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
    { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' },
  ],
  region: [
    {
      required: true,
      message: 'Please select Activity zone',
      trigger: 'change',
    },
  ],
  count: [
    {
      required: true,
      message: 'Please select Activity count',
      trigger: 'change',
    },
  ],
  date1: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a date',
      trigger: 'change',
    },
  ],
  date2: [
    {
      type: 'date',
      required: true,
      message: 'Please pick a time',
      trigger: 'change',
    },
  ],
  location: [
    {
      required: true,
      message: 'Please select a location',
      trigger: 'change',
    },
  ],
  type: [
    {
      type: 'array',
      required: true,
      message: 'Please select at least one activity type',
      trigger: 'change',
    },
  ],
  resource: [
    {
      required: true,
      message: 'Please select activity resource',
      trigger: 'change',
    },
  ],
  desc: [
    { required: true, message: 'Please input activity form', trigger: 'blur' },
  ],
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

const options = Array.from({ length: 10000 }).map((_, idx) => ({
  value: `${idx + 1}`,
  label: `${idx + 1}`,
}))
</script>
