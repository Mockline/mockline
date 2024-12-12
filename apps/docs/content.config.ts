import { defineCollection, z } from '@nuxt/content'

const schema = z.object({
  framework: z.string().optional(),
  navigation: z.object({
    title: z.string().optional()
  }),
})

export const collections = {
  content: defineCollection({
    type: 'page',
    source: '**/*.md',
    schema
  })
}
