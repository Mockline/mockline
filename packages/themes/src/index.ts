import { ModuleOptions } from '@mockline/types'

import * as components from './components'

export const themes = components

/**
 * Processes the JSON theme to add "as const" to simple properties and array properties
 * @param json The JSON theme
 * @param variants The variants of the theme
 * @returns The processed JSON theme
 */
export function processComponentTheme(json: string, variants: string[]): string {
  return variants.reduce((processedJson, variant) => {
    // Adds "as const" to simple properties
    const singlePropRegex = new RegExp(`("${variant}": "[^"]+")`, 'g')
    processedJson = processedJson.replace(singlePropRegex, '$1 as const')

    // Adds "as const" to array properties
    const arrayPropRegex = new RegExp(`("${variant}": \\[\\s*)((?:"[^"]+",?\\s*)+)(\\])`, 'g')
    return processedJson.replace(arrayPropRegex, (_, before, content, after) => {
      const processedContent = content.replace(/("[^"]+")/g, '$1 as const')
      return `${ before }${ processedContent }${ after }`
    })
  }, json)
}

export function generateDevImport(themePath: string, options: ModuleOptions, json: string): string {
  return [
    `import template from ${JSON.stringify(themePath)}`,
    `const result = template(${JSON.stringify(options)})`,
    `const json = ${json}`,
    `export default result as typeof json`
  ].join('\n')
}
