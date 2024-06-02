<script setup lang="ts">
import {tv, type VariantProps} from 'tailwind-variants'
import {SwitchRoot, SwitchThumb} from 'radix-vue'
import {computed} from 'vue'
import {twMerge} from 'tailwind-merge'
import {colors} from '#mockline/colors'


const switchStyle = tv({
  base: 'flex items-center justify-center gap-1 text-white',
  slots: {
    thumb: 'bg-gray-1 my-auto block translate-x-1 rounded-full shadow-sm transition-transform duration-100 will-change-transform',
    root: 'bg-gray-3 relative flex cursor-default rounded-full shadow-sm focus-within:outline-none',
  },
  variants: {
    variant: {
      solid: '',
    },
    color: {
      ...Object.fromEntries(colors.map(color => [color, ''])),
    },
    size: {
      '2xs': {
        thumb: 'size-2 data-[state=checked]:translate-x-3',
        root: 'h-3 w-6',
      },
      xs: {
        thumb: 'size-3 data-[state=checked]:translate-x-4',
        root: 'h-4 w-8',
      },
      sm: {
        thumb: 'size-4 data-[state=checked]:translate-x-5',
        root: 'h-5 w-10',
      },
      md: {
        thumb: 'size-5 data-[state=checked]:translate-x-6',
        root: 'h-6 w-12',
      },
      lg: {
        thumb: 'size-6 data-[state=checked]:translate-x-7',
        root: 'h-7 w-14',
      },
      xl: {
        thumb: 'size-7 data-[state=checked]:translate-x-8',
        root: 'h-8 w-16',
      },
    },

    block: {
      true: 'w-full'
    }
  },
  defaultVariants:
    {
      variant: 'solid',
      color:
        'primary',
      size:
        'md',
    }
  ,
  compoundVariants: [
    ...colors.map(color => ({
      color,
      variant: 'solid',
      class: {
        thumb: ``,
        root: `data-[state=unchecked]:bg-gray-3 hover:bg-${color}-10 bg-${color}-9`
      }
    })),
    ...colors.map(color => ({
      color,
      variant: 'outline',
      class: `border border-${color}-9 text-${color}-9 hover:bg-${color}-9 hover:text-${color}-1`
    })),
    ...colors.map(color => ({
      color,
      variant: 'soft',
      class: `bg-${color}-2 text-${color}-9 hover:bg-${color}-3`
    })),
    ...colors.map(color => ({
      color,
      variant: 'subtle',
      class: `bg-${color}-3 text-${color}-9 hover:bg-${color}-4`
    })),
    ...colors.map(color => ({
      color,
      variant: 'ghost',
      class: `text-${color}-9 hover:bg-${color}-3`
    })),
    ...colors.map(color => ({
      color,
      variant: 'link',
      class: `text-${color}-9 hover:underline`
    }))
  ]
})

const switchState = ref(false)

export type SwitchProps = {
  /** Switch class to override */
  class?: string;
  /** Switch color */
  color?: VariantProps<typeof switchStyle>['color'];
  /** Switch variant */
  variant?: VariantProps<typeof switchStyle>['variant'];
  /** Size */
  size?: VariantProps<typeof switchStyle>['size'];
  /** Loading */
  loading?: boolean;
  /** Icon */
  icon?: string;
}

const props = withDefaults(defineProps<SwitchProps>(), {})

const {thumb, root} = switchStyle({...props})

</script>

<template>
  <div class="flex items-center gap-2">
    <SwitchRoot
      id="airplane-mode"
      v-model:checked="switchState"
      :class="root()"
    >
      <SwitchThumb
        :class="thumb()"
      >
        <MIcon v-if="icon" :name="icon" />
      </SwitchThumb>
    </switchroot>
  </div>
</template>

<style scoped></style>

