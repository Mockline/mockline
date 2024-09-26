export default defineAppConfig({
  toaster: {
    position: 'bottom-right' as const,
    expand: true,
    duration: 5000
  },
  ui: {
    icons: {
      loading: "lucide:loader"
    },
    colors: {
      primary: 'blue',
      gray: 'neutral'
    }
  }
})
