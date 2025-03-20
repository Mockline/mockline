<script setup lang="ts">
import { switchTv } from '@mockline/themes'

const sizes = Object.keys(switchTv.variants.size) as Array<keyof typeof switchTv.variants.size>
const state = ref(false)
</script>

<template>
  <MPageBody>
    <div>
      <h3>
        Variants (primary)
      </h3>
      <div class="flex flex-wrap gap-4">
        <MSwitch
          v-model="state"
          label="Disabled"
          disabled
        />
        <MSwitch
          v-model="state"
          label="Loading"
          loading
          unchecked-icon="lucide:x"
          checked-icon="lucide:check"
        />
        <MSwitch
          v-model="state"
          label="Icon"
          unchecked-icon="lucide:x"
          checked-icon="lucide:check"
        />
        <MSwitch
          v-model="state"
          label="Required"
          required
        />
      </div>
      <div>
        <h3>
          Variants (neutral)
        </h3>
        <div class="flex flex-wrap gap-4">
          <MSwitch
            v-model="state"
            label="Disabled"
            color="neutral"
            disabled
          />
          <MSwitch
            v-model="state"
            label="Loading"
            loading
            color="neutral"
            unchecked-icon="lucide:x"
            checked-icon="lucide:check"
          />
          <MSwitch
            v-model="state"
            label="Icon"
            color="neutral"
            unchecked-icon="lucide:x"
            checked-icon="lucide:check"
          />
          <MSwitch
            v-model="state"
            label="Required"
            required
            color="neutral"
          />
        </div>
      </div>
    </div>
    <div>
      <h3>
        Sizes
      </h3>
      <div class="flex gap-4">
        <div v-for="size in sizes" :key="size" class="flex items-center gap-2">
          <MSwitch
            :key="size"
            v-model="state"
            :label="size"
            :size
            unchecked-icon="lucide:x"
            checked-icon="lucide:check"
            variant="solid"
          />
        </div>
      </div>
    </div>
    <div>
      <h3>
        With description
      </h3>
      <div class="flex flex-wrap gap-4">
        <MSwitch
          v-model="state"
          label="With description"
          description="This is a description"
        />
        <MSwitch
          v-model="state"
          label="With description"
          description="This is a description"
          color="neutral"
        />
      </div>
    </div>
  </MPageBody>
</template>
