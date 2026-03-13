<template>
  <div class="popover-base-box">
    <div class="row center">
      <g-popover
        title="Title"
        content="Top Left prompts info"
        placement="top-start"
      >
        <template #reference>
          <g-button>top-start</g-button>
        </template>
      </g-popover>
      <g-popover
        title="Title"
        content="Top Center prompts info"
        placement="top"
      >
        <template #reference>
          <g-button>top</g-button>
        </template>
      </g-popover>
      <g-popover
        title="Title"
        content="Top Right prompts info"
        placement="top-end"
      >
        <template #reference>
          <g-button>top-end</g-button>
        </template>
      </g-popover>
    </div>
    <div class="row">
      <g-popover
        title="Title"
        content="Left Top prompts info"
        placement="left-start"
      >
        <template #reference>
          <g-button>left-start</g-button>
        </template>
      </g-popover>
      <g-popover
        title="Title"
        content="Right Top prompts info"
        placement="right-start"
      >
        <template #reference>
          <g-button>right-start</g-button>
        </template>
      </g-popover>
    </div>
    <div class="row">
      <g-popover
        title="Title"
        content="Left Center prompts info"
        placement="left"
      >
        <template #reference>
          <g-button class="mt-3 mb-3">left</g-button>
        </template>
      </g-popover>
      <g-popover
        title="Title"
        content="Right Center prompts info"
        placement="right"
      >
        <template #reference>
          <g-button>right</g-button>
        </template>
      </g-popover>
    </div>
    <div class="row">
      <g-popover
        title="Title"
        content="Left Bottom prompts info"
        placement="left-end"
      >
        <template #reference>
          <g-button>left-end</g-button>
        </template>
      </g-popover>
      <g-popover
        title="Title"
        content="Right Bottom prompts info"
        placement="right-end"
      >
        <template #reference>
          <g-button>right-end</g-button>
        </template>
      </g-popover>
    </div>
    <div class="row center">
      <g-popover
        title="Title"
        content="Bottom Left prompts info"
        placement="bottom-start"
      >
        <template #reference> <g-button>bottom-start</g-button></template>
      </g-popover>
      <g-popover
        title="Title"
        content="Bottom Center prompts info"
        placement="bottom"
      >
        <template #reference> <g-button>bottom</g-button></template>
      </g-popover>
      <g-popover
        title="Title"
        content="Bottom Right prompts info"
        placement="bottom-end"
      >
        <template #reference>
          <g-button>bottom-end</g-button>
        </template>
      </g-popover>
    </div>
  </div>
</template>

<style>
.popover-base-box {
  width: 600px;
}

.popover-base-box .row {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.popover-base-box .center {
  justify-content: center;
}
</style>
