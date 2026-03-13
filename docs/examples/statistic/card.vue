<template>
  <g-row :gutter="16">
    <g-col :xs="24" :sm="12" :md="8" class="mb-4">
      <div class="statistic-card">
        <g-statistic :value="98500">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Daily active users
              <g-tooltip
                effect="dark"
                content="Number of users who logged into the product in one day"
                placement="top"
              >
                <g-icon style="margin-left: 4px" :size="12">
                  <Warning />
                </g-icon>
              </g-tooltip>
            </div>
          </template>
        </g-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>than yesterday</span>
            <span class="green">
              24%
              <g-icon>
                <CaretTop />
              </g-icon>
            </span>
          </div>
        </div>
      </div>
    </g-col>
    <g-col :xs="24" :sm="12" :md="8" class="mb-4">
      <div class="statistic-card">
        <g-statistic :value="693700">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              Monthly Active Users
              <g-tooltip
                effect="dark"
                content="Number of users who logged into the product in one month"
                placement="top"
              >
                <g-icon style="margin-left: 4px" :size="12">
                  <Warning />
                </g-icon>
              </g-tooltip>
            </div>
          </template>
        </g-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>month on month</span>
            <span class="red">
              12%
              <g-icon>
                <CaretBottom />
              </g-icon>
            </span>
          </div>
        </div>
      </div>
    </g-col>
    <g-col :xs="24" :sm="12" :md="8" class="mb-4">
      <div class="statistic-card">
        <g-statistic :value="72000" title="New transactions today">
          <template #title>
            <div style="display: inline-flex; align-items: center">
              New transactions today
            </div>
          </template>
        </g-statistic>
        <div class="statistic-footer">
          <div class="footer-item">
            <span>than yesterday</span>
            <span class="green">
              16%
              <g-icon>
                <CaretTop />
              </g-icon>
            </span>
          </div>
          <div class="footer-item">
            <g-icon :size="14">
              <ArrowRight />
            </g-icon>
          </div>
        </div>
      </div>
    </g-col>
  </g-row>
</template>

<script lang="ts" setup>
import {
  ArrowRight,
  CaretBottom,
  CaretTop,
  Warning,
} from '@element-plus/icons-vue'
</script>

<style scoped>
:global(h2#card-usage ~ .example .example-showcase) {
  background-color: var(--g-fill-color) !important;
}

.g-statistic {
  --g-statistic-content-font-size: 28px;
}

.statistic-card {
  height: 100%;
  padding: 20px;
  border-radius: 4px;
  background-color: var(--g-bg-color-overlay);
}

.statistic-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-size: 12px;
  color: var(--g-text-color-regular);
  margin-top: 16px;
}

.statistic-footer .footer-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.statistic-footer .footer-item span:last-child {
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
}

.green {
  color: var(--g-color-success);
}
.red {
  color: var(--g-color-error);
}
</style>
