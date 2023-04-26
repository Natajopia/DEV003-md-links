const links = [
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'filetest\\testfile.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://es.wikipedia.org/wiki/Markdown',
    text: 'Markdown',
    file: 'filetest\\testfile.md',
    status: 200,
    statusText: 'OK'
  },
  {
    href: 'https://css-tricks.com/oohcrap',
    text: 'CSS-Tricks',
    file: 'filetest\\testfile.md',
    status: 404,
    statusText: 'FAIL'
  },
  {
    href: 'https://css-tricks.com/oohcrap',
    text: 'CSS-Tricks',
    file: 'filetest\\testfile.md',
    status: 404,
    statusText: 'FAIL'
  },
  {
    href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
    text: 'Módulos, librerías, paquetes, frameworks... ¿cuál e',
    file: 'filetest\\testfile.md',
    status: -1,
    statusText: 'FETCH FAILED'
  }
]

const totalHref = (links) => {
  const all = links.length
  return all
}
const uniqueHref = (links) => {
  const hipertext = links.map(link => link.href)
  const uniqueLinks = new Set(hipertext)
  return uniqueLinks.size
}
// console.log(uniqueHref(links))

const brokenHref = links => {
  const broken = links.filter((link) => (link.status >= 400 || link.status === -1) && (link.statusText === 'FAIL' || link.statusText === 'FETCH FAILED'))
  return `Broken: ${broken.length}`
}
console.log(brokenHref(links))

module.exports = {
  totalHref,
  uniqueHref,
  brokenHref
}
