import { defineCollection, z } from '@nuxt/content'

const schema = z.object({
  framework: z.string().optional(),
  navigation: z.object({
    title: z.string().optional()
  }),
})

export const collections = {
  docs: defineCollection({
    type: 'page',
    source: [
      {
        include: '1.getting-started/**/*.md',
        prefix: '/getting-started/',
      },
      {
        include: '2.components/**/*.md',
        prefix: '/components/',
      },
      {
        include: '3.typography/**/*.md',
        prefix: '/typography/',
      },
    ],
    schema
  })
}
