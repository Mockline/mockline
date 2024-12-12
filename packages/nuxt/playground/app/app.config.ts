export default defineAppConfig({
  mockline: {
    colors: {
      primary: 'blue',
    },
    transitions: true,
    components: {
      button: {
        slots: {
          label: 'font-bold',
        }
      },
    }
  }
})
