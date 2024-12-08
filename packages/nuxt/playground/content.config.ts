import { defineCollection, z } from '@nuxt/content'

/*const schema = z.object({
  navigation: z.object({
    title: z.string().optional()
  }),
})*/

export const collections = {
  content: defineCollection({
    type: 'page',
    source: '**/*.md'
  })
}
