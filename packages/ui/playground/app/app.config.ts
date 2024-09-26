export default defineAppConfig({
  toaster: {
    position: 'bottom-right' as const,
    expand: true,
    duration: 5000
  },
  mockline: {
    icons: {
      loading: 'lucide:loader'
    },
    colors: {
      primary: 'blue',
      gray: 'neutral'
    }
  }
})
