<template>
  <g-table-v2
    :columns="columns"
    :data="data"
    :row-class="rowClass"
    :width="700"
    :height="400"
  />
</template>

<script lang="tsx" setup>
import { ref } from 'vue'
import dayjs from 'dayjs'
import {
  GButton,
  GIcon,
  GTag,
  GTooltip,
  TableV2FixedDir,
} from 'element-plus'
import { Timer } from '@element-plus/icons-vue'

import type { Column, RowClassNameGetter } from 'element-plus'

let id = 0

const dataGenerator = () => ({
  id: `random-id-${++id}`,
  name: 'Tom',
  date: '2020-10-1',
})

const columns: Column<any>[] = [
  {
    key: 'date',
    title: 'Date',
    dataKey: 'date',
    width: 150,
    fixed: TableV2FixedDir.LEFT,
    cellRenderer: ({ cellData: date }) => (
      <GTooltip content={dayjs(date).format('YYYY/MM/DD')}>
        {
          <span class="flex items-center">
            <GIcon class="mr-3">
              <Timer />
            </GIcon>
            {dayjs(date).format('YYYY/MM/DD')}
          </span>
        }
      </GTooltip>
    ),
  },
  {
    key: 'name',
    title: 'Name',
    dataKey: 'name',
    width: 150,
    align: 'center',
    cellRenderer: ({ cellData: name }) => <GTag>{name}</GTag>,
  },
  {
    key: 'operations',
    title: 'Operations',
    cellRenderer: () => (
      <>
        <GButton size="small">Edit</GButton>
        <GButton size="small" type="danger">
          Delete
        </GButton>
      </>
    ),
    width: 150,
    align: 'center',
    flexGrow: 1,
  },
]

const data = ref(Array.from({ length: 200 }).map(dataGenerator))

const rowClass = ({ rowIndex }: Parameters<RowClassNameGetter<any>>[0]) => {
  if (rowIndex % 10 === 5) {
    return 'bg-red-100'
  } else if (rowIndex % 10 === 0) {
    return 'bg-blue-200'
  }
  return ''
}
</script>
