<template>
  <g-form label-position="left" label-width="auto" style="max-width: 600px">
    <g-space fill>
      <g-alert type="info" show-icon :closable="false">
        <p>"Full Name" label is automatically attached to the input:</p>
      </g-alert>
      <g-form-item label="Full Name">
        <g-input v-model="formAccessibility.fullName" />
      </g-form-item>
    </g-space>
    <g-space fill>
      <g-alert type="info" show-icon :closable="false">
        <p>
          "Your Information" serves as a label for the group of inputs. <br />
          You must specify labels on the individal inputs. Placeholders are not
          replacements for using the "label" attribute.
        </p>
      </g-alert>
      <g-form-item label="Your Information">
        <g-row :gutter="20">
          <g-col :span="12">
            <g-input
              v-model="formAccessibility.firstName"
              aria-label="First Name"
              placeholder="First Name"
            />
          </g-col>
          <g-col :span="12">
            <g-input
              v-model="formAccessibility.lastName"
              aria-label="Last Name"
              placeholder="Last Name"
            />
          </g-col>
        </g-row>
      </g-form-item>
    </g-space>
  </g-form>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'

const formAccessibility = reactive({
  fullName: '',
  firstName: '',
  lastName: '',
})
</script>
