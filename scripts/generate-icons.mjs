import { writeFileSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const root = join(dirname(fileURLToPath(import.meta.url)), "..")
const publicDir = join(root, "public")

function ssSvg({ size, bg, fg }) {
  return Buffer.from(`<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.22)}" fill="${bg}"/>
  <text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle"
    font-family="ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    font-size="${Math.round(size * 0.42)}" font-weight="700" letter-spacing="-0.04em" fill="${fg}">SS</text>
</svg>`)
}

async function writePng(name, size, bg, fg) {
  const png = await sharp(ssSvg({ size, bg, fg })).png().toBuffer()
  writeFileSync(join(publicDir, name), png)
  console.log(`wrote ${name} (${size}x${size})`)
}

await writePng("icon-light-32x32.png", 32, "#eff6ff", "#1e3a8a")
await writePng("icon-dark-32x32.png", 32, "#1e3a8a", "#dbeafe")
await writePng("apple-icon.png", 180, "#1e40af", "#eff6ff")
await writePng("placeholder-logo.png", 280, "#1e40af", "#eff6ff")
