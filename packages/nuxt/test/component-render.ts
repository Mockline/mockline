import path from 'node:path'
import { mountSuspended } from '@nuxt/test-utils/runtime'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default async function(nameOrHtml: string, options: any, component: any) {
  let html: string
  const { name } = path.parse(component.__file)
  if (options === undefined) {
    const app = {
      template: nameOrHtml,
      components: { [`M${name}`]: component }
    }
    const result = await mountSuspended(app)
    html = result.html()
  } else {
    const cResult = await mountSuspended(component, options)
    html = cResult.html()
  }
  return html
}
