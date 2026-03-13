<template>
  <div class="popconfirm-base-box">
    <div class="row center">
      <g-popconfirm
        class="box-item"
        title="Top Left prompts info"
        placement="top-start"
      >
        <template #reference>
          <g-button>top-start</g-button>
        </template>
      </g-popconfirm>
      <g-popconfirm
        class="box-item"
        title="Top Center prompts info"
        placement="top"
      >
        <template #reference>
          <g-button>top</g-button>
        </template>
      </g-popconfirm>
      <g-popconfirm
        class="box-item"
        title="Top Right prompts info"
        placement="top-end"
      >
        <template #reference>
          <g-button>top-end</g-button>
        </template>
      </g-popconfirm>
    </div>
    <div class="row">
      <g-popconfirm
        class="box-item"
        title="Left Top prompts info"
        placement="left-start"
      >
        <template #reference>
          <g-button>left-start</g-button>
        </template>
      </g-popconfirm>
      <g-popconfirm
        class="box-item"
        title="Right Top prompts info"
        placement="right-start"
      >
        <template #reference>
          <g-button>right-start</g-button>
        </template>
      </g-popconfirm>
    </div>
    <div class="row">
      <g-popconfirm
        class="box-item"
        title="Left Center prompts info"
        placement="left"
      >
        <template #reference>
          <g-button class="mt-3 mb-3">left</g-button>
        </template>
      </g-popconfirm>
      <g-popconfirm
        class="box-item"
        title="Right Center prompts info"
        placement="right"
      >
        <template #reference>
          <g-button>right</g-button>
        </template>
      </g-popconfirm>
    </div>
    <div class="row">
      <g-popconfirm
        class="box-item"
        title="Left Bottom prompts info"
        placement="left-end"
      >
        <template #reference>
          <g-button>left-end</g-button>
        </template>
      </g-popconfirm>
      <g-popconfirm
        class="box-item"
        title="Right Bottom prompts info"
        placement="right-end"
      >
        <template #reference>
          <g-button>right-end</g-button>
        </template>
      </g-popconfirm>
    </div>
    <div class="row center">
      <g-popconfirm
        class="box-item"
        title="Bottom Left prompts info"
        placement="bottom-start"
      >
        <template #reference> <g-button>bottom-start</g-button></template>
      </g-popconfirm>
      <g-popconfirm
        class="box-item"
        title="Bottom Center prompts info"
        placement="bottom"
      >
        <template #reference> <g-button>bottom</g-button></template>
      </g-popconfirm>
      <g-popconfirm
        class="box-item"
        title="Bottom Right prompts info"
        placement="bottom-end"
      >
        <template #reference>
          <g-button>bottom-end</g-button>
        </template>
      </g-popconfirm>
    </div>
  </div>
</template>

<style>
.popconfirm-base-box {
  width: 600px;
}

.popconfirm-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.popconfirm-base-box .center {
  justify-content: center;
}

.popconfirm-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
