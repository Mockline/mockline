import { promises as fsp } from 'fs'
import { resolve } from 'path'
import { execSync } from 'child_process'
import { join } from 'pathe'

async function loadPackage(dir: string) {
  const pkgPath = resolve(dir, 'package.json')

  const data = JSON.parse(await fsp.readFile(pkgPath, 'utf-8').catch(() => '{}'))

  const save = () => fsp.writeFile(pkgPath, JSON.stringify(data, null, 2) + '\n')

  return {
    dir,
    data,
    save
  }
}

async function main() {
  const rootDir = resolve(__dirname, '..')
  const pkg = await loadPackage(join(rootDir, 'packages', 'mockline'))

  const commit = execSync('git rev-parse --short HEAD').toString('utf-8').trim()

  const date = Math.round(Date.now() / (1000 * 60))

  pkg.data.name = `${pkg.data.name}-edge`

  pkg.data.version = `${pkg.data.version}-${date}.${commit}`

  await pkg.save()
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exit(1)
})
