<template>
  <g-button text @click="table = true">
    Open Drawer with nested table
  </g-button>
  <g-button text @click="dialog = true">
    Open Drawer with nested form
  </g-button>
  <g-drawer
    v-model="table"
    title="I have a nested table inside!"
    direction="rtl"
    size="50%"
  >
    <g-table :data="gridData">
      <g-table-column property="date" label="Date" width="150" />
      <g-table-column property="name" label="Name" width="200" />
      <g-table-column property="address" label="Address" />
    </g-table>
  </g-drawer>

  <g-drawer
    v-model="dialog"
    title="I have a nested form inside!"
    :before-close="handleClose"
    direction="ltr"
    class="demo-drawer"
  >
    <div class="demo-drawer__content">
      <g-form :model="form">
        <g-form-item label="Name" :label-width="formLabelWidth">
          <g-input v-model="form.name" autocomplete="off" />
        </g-form-item>
        <g-form-item label="Area" :label-width="formLabelWidth">
          <g-select
            v-model="form.region"
            placeholder="Please select activity area"
          >
            <g-option label="Area1" value="shanghai" />
            <g-option label="Area2" value="beijing" />
          </g-select>
        </g-form-item>
      </g-form>
      <div class="demo-drawer__footer">
        <g-button @click="cancelForm">Cancel</g-button>
        <g-button type="primary" :loading="loading" @click="onClick">
          {{ loading ? 'Submitting ...' : 'Submit' }}
        </g-button>
      </div>
    </div>
  </g-drawer>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { GMessageBox } from 'element-plus'

const formLabelWidth = '80px'
let timer

const table = ref(false)
const dialog = ref(false)
const loading = ref(false)

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

const gridData = [
  {
    date: '2016-05-02',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-04',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-01',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
  {
    date: '2016-05-03',
    name: 'Peter Parker',
    address: 'Queens, New York City',
  },
]

const onClick = () => {
  loading.value = true
  setTimeout(() => {
    loading.value = false
    dialog.value = false
  }, 400)
}

const handleClose = (done) => {
  if (loading.value) {
    return
  }
  GMessageBox.confirm('Do you want to submit?')
    .then(() => {
      loading.value = true
      timer = setTimeout(() => {
        done()
        // 动画关闭需要一定的时间
        setTimeout(() => {
          loading.value = false
        }, 400)
      }, 2000)
    })
    .catch(() => {
      // catch error
    })
}

const cancelForm = () => {
  loading.value = false
  dialog.value = false
  clearTimeout(timer)
}
</script>
