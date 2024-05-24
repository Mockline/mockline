import { promises as fsp } from 'fs'
import { resolve } from 'path'
import { execSync } from 'child_process'

async function loadPackage(dir: string): Promise<{
  dir: string
  data: Record<string, any>
  save: () => Promise<void>
}> {
  const pkgPath = resolve(dir, 'package.json')

  const data = JSON.parse(await fsp.readFile(pkgPath, 'utf-8').catch(() => '{}'))

  const save = (): Promise<void> => fsp.writeFile(pkgPath, JSON.stringify(data, null, 2) + '\n')

  return {
    dir,
    data,
    save
  }
}

async function main(): Promise<void> {
  const pkg = await loadPackage(process.cwd())

  const commit = execSync('git rev-parse --short HEAD').toString('utf-8').trim()

  const date = Math.round(Date.now() / (1000 * 60))

  pkg.data.name = `${pkg.data.name}-edge`

  pkg.data.version = `${pkg.data.version}-${date}.${commit}`

  await pkg.save()
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
