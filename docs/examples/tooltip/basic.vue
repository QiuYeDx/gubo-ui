<template>
  <div class="tooltip-base-box">
    <div class="row center">
      <g-tooltip
        class="box-item"
        effect="dark"
        content="Top Left prompts info"
        placement="top-start"
      >
        <g-button>top-start</g-button>
      </g-tooltip>
      <g-tooltip
        class="box-item"
        effect="dark"
        content="Top Center prompts info"
        placement="top"
      >
        <g-button>top</g-button>
      </g-tooltip>
      <g-tooltip
        class="box-item"
        effect="dark"
        content="Top Right prompts info"
        placement="top-end"
      >
        <g-button>top-end</g-button>
      </g-tooltip>
    </div>
    <div class="row">
      <g-tooltip
        class="box-item"
        effect="dark"
        content="Left Top prompts info"
        placement="left-start"
      >
        <g-button>left-start</g-button>
      </g-tooltip>
      <g-tooltip
        class="box-item"
        effect="dark"
        content="Right Top prompts info"
        placement="right-start"
      >
        <g-button>right-start</g-button>
      </g-tooltip>
    </div>
    <div class="row">
      <g-tooltip
        class="box-item"
        effect="dark"
        content="Left Center prompts info"
        placement="left"
      >
        <g-button class="mt-3 mb-3">left</g-button>
      </g-tooltip>
      <g-tooltip
        class="box-item"
        effect="dark"
        content="Right Center prompts info"
        placement="right"
      >
        <g-button>right</g-button>
      </g-tooltip>
    </div>
    <div class="row">
      <g-tooltip
        class="box-item"
        effect="dark"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <g-button>left-end</g-button>
      </g-tooltip>
      <g-tooltip
        class="box-item"
        effect="dark"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <g-button>right-end</g-button>
      </g-tooltip>
    </div>
    <div class="row center">
      <g-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <g-button>bottom-start</g-button>
      </g-tooltip>
      <g-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <g-button>bottom</g-button>
      </g-tooltip>
      <g-tooltip
        class="box-item"
        effect="dark"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <g-button>bottom-end</g-button>
      </g-tooltip>
    </div>
  </div>
</template>

<style>
.tooltip-base-box {
  width: 600px;
}
.tooltip-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.tooltip-base-box .center {
  justify-content: center;
}
.tooltip-base-box .box-item {
  width: 110px;
  margin-top: 10px;
}
</style>
