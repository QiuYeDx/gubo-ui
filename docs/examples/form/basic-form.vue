<template>
  <g-form :model="form" label-width="auto" style="max-width: 600px">
    <g-form-item label="Activity name">
      <g-input v-model="form.name" />
    </g-form-item>
    <g-form-item label="Activity zone">
      <g-select v-model="form.region" placeholder="please select your zone">
        <g-option label="Zone one" value="shanghai" />
        <g-option label="Zone two" value="beijing" />
      </g-select>
    </g-form-item>
    <g-form-item label="Activity time">
      <g-col :span="11">
        <g-date-picker
          v-model="form.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        />
      </g-col>
      <g-col :span="2" class="text-center">
        <span class="text-gray-500">-</span>
      </g-col>
      <g-col :span="11">
        <g-time-picker
          v-model="form.date2"
          placeholder="Pick a time"
          style="width: 100%"
        />
      </g-col>
    </g-form-item>
    <g-form-item label="Instant delivery">
      <g-switch v-model="form.delivery" />
    </g-form-item>
    <g-form-item label="Activity type">
      <g-checkbox-group v-model="form.type">
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
    <g-form-item label="Resources">
      <g-radio-group v-model="form.resource">
        <g-radio value="Sponsor">Sponsor</g-radio>
        <g-radio value="Venue">Venue</g-radio>
      </g-radio-group>
    </g-form-item>
    <g-form-item label="Activity form">
      <g-input v-model="form.desc" type="textarea" />
    </g-form-item>
    <g-form-item>
      <g-button type="primary" @click="onSubmit">Create</g-button>
      <g-button>Cancel</g-button>
    </g-form-item>
  </g-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
