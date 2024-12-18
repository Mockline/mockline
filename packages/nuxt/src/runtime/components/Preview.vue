<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { tv } from 'tailwind-variants'
import { useRoute } from '#imports'

const MIN_ZOOM_SCALE = 1.5

type PreviewStyles = {
  transform: string
  cursor: string
  position?: string
  zIndex?: string
}

const route = useRoute()
const mounted = ref(false)

const preview = tv({
  slots: {
    wrapper: 'inline-block isolate',
    image: [
      'transition-transform duration-200 ease-out',
      'origin-top-left cursor-zoom-in'
    ],
    overlay: [
      'fixed inset-0 z-[9999]',
      'bg-white/70 dark:bg-neutral-900/70',
      'backdrop-blur-sm',
      'transition-opacity duration-200',
      'opacity-0 pointer-events-none'
    ]
  }
})

const imageWrapperRef = ref<HTMLElement | null>(null)
const overlayRef = ref<HTMLElement | null>(null)
const isZoomedIn = ref(false)

const imageStyle = ref<PreviewStyles>({
  transform: '',
  cursor: 'zoom-in'
})

function resetState(): void {
  isZoomedIn.value = false
  imageStyle.value = {
    transform: '',
    cursor: 'zoom-in'
  }
  if (overlayRef.value) {
    overlayRef.value.style.opacity = '0'
    overlayRef.value.style.pointerEvents = 'none'
  }
}

function zoomOut(): void {
  if (!imageWrapperRef.value || !mounted.value) return
  resetState()
}

function toggleZoom(): void {
  if (!mounted.value) return

  if (isZoomedIn.value) {
    zoomOut()
    return
  }

  const wrapper = imageWrapperRef.value
  if (!wrapper) return

  const rect = wrapper.getBoundingClientRect()
  const image = wrapper.querySelector('img')
  if (!image) return

  const targetWidth = Math.min(window.innerWidth, image.naturalWidth * MIN_ZOOM_SCALE)
  const targetHeight = Math.min(window.innerHeight, image.naturalHeight * MIN_ZOOM_SCALE)

  const scaleX = targetWidth / wrapper.clientWidth
  const scaleY = targetHeight / wrapper.clientHeight
  const scale = Math.max(Math.min(scaleX, scaleY), MIN_ZOOM_SCALE)

  const newWidth = wrapper.clientWidth * scale
  const newHeight = wrapper.clientHeight * scale

  imageStyle.value = {
    transform: `translate(${
      -rect.left + window.innerWidth / 2 - newWidth / 2
    }px, ${
      -rect.top + window.innerHeight / 2 - newHeight / 2
    }px) scale(${scale})`,
    cursor: 'zoom-out',
    position: 'relative',
    zIndex: '9999'
  }

  if (overlayRef.value) {
    overlayRef.value.style.opacity = '1'
    overlayRef.value.style.pointerEvents = 'auto'
  }

  isZoomedIn.value = true
}

watch(() => route.path, () => {
  resetState()
})

onMounted(() => {
  mounted.value = true
  window.addEventListener('scroll', zoomOut)
})

onUnmounted(() => {
  mounted.value = false
  resetState()
  window.removeEventListener('scroll', zoomOut)
})

const { wrapper, image, overlay } = preview()
</script>

<template>
  <div :class="wrapper()">
    <div
      ref="imageWrapperRef"
      :class="image()"
      :style="imageStyle"
      @click="toggleZoom"
    >
      <slot />
    </div>
    <Teleport to="body" :disabled="!mounted">
      <div
        v-if="mounted"
        v-show="isZoomedIn"
        ref="overlayRef"
        :class="overlay()"
        @click="zoomOut"
      />
    </Teleport>
  </div>
</template>
