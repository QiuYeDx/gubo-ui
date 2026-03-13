<template>
  <div class="flex flex-wrap gap-1">
    <g-button class="!ml-0" plain @click="dialogTableVisible = true">
      Open a Table nested Dialog
    </g-button>

    <g-button class="!ml-0" plain @click="dialogFormVisible = true">
      Open a Form nested Dialog
    </g-button>
  </div>

  <g-dialog v-model="dialogTableVisible" title="Shipping address" width="800">
    <g-table :data="gridData">
      <g-table-column property="date" label="Date" width="150" />
      <g-table-column property="name" label="Name" width="200" />
      <g-table-column property="address" label="Address" />
    </g-table>
  </g-dialog>

  <g-dialog v-model="dialogFormVisible" title="Shipping address" width="500">
    <g-form :model="form">
      <g-form-item label="Promotion name" :label-width="formLabelWidth">
        <g-input v-model="form.name" autocomplete="off" />
      </g-form-item>
      <g-form-item label="Zones" :label-width="formLabelWidth">
        <g-select v-model="form.region" placeholder="Please select a zone">
          <g-option label="Zone No.1" value="shanghai" />
          <g-option label="Zone No.2" value="beijing" />
        </g-select>
      </g-form-item>
    </g-form>
    <template #footer>
      <div class="dialog-footer">
        <g-button @click="dialogFormVisible = false">Cancel</g-button>
        <g-button type="primary" @click="dialogFormVisible = false">
          Confirm
        </g-button>
      </div>
    </template>
  </g-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const dialogTableVisible = ref(false)
const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

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
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-04',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-01',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
  {
    date: '2016-05-03',
    name: 'John Smith',
    address: 'No.1518,  Jinshajiang Road, Putuo District',
  },
]
</script>
