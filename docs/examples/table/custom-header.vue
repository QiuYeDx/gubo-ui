<template>
  <g-table :data="filterTableData" style="width: 100%">
    <g-table-column label="Date" prop="date" />
    <g-table-column label="Name" prop="name" />
    <g-table-column align="right">
      <template #header>
        <g-input v-model="search" size="small" placeholder="Type to search" />
      </template>
      <template #default="scope">
        <g-button size="small" @click="handleEdit(scope.$index, scope.row)">
          Edit
        </g-button>
        <g-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          Delete
        </g-button>
      </template>
    </g-table-column>
  </g-table>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'

interface User {
  date: string
  name: string
  address: string
}

const search = ref('')
const filterTableData = computed(() =>
  tableData.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)
const handleEdit = (index: number, row: User) => {
  console.log(index, row)
}
const handleDelete = (index: number, row: User) => {
  console.log(index, row)
}

const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Morgan',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Jessy',
    address: 'No. 189, Grove St, Los Angeles',
  },
]
</script>
