/* eslint-disable prefer-promise-reject-errors */
const {
  checkPath,
  pathIsAbsolute,
  transformPathAbsolute,
  confirmFileMd,
  readFiles,
  getLinks,
  validateLinks
} = require('./api.js')

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    // console.log(!checkPath(path))
    let absPath = path
    if (!checkPath(path)) {
      reject(`La ${path} no existe, ingresa una ruta válida`)
    } else {
      if (!pathIsAbsolute(path)) {
        absPath = transformPathAbsolute(path)
      };
      // console.log(!confirmeFileMd(pathAbs))
      if (!confirmFileMd(absPath)) {
        reject('No es un archivo MD')
      } else {
        readFiles(absPath).then((result) => {
          const linksMdm = getLinks(result, absPath)
          if (!options.valide) {
            resolve(linksMdm)
          } else {
            resolve(validateLinks(linksMdm))
          }
        }).catch((error) => {
          reject(error, 'Esto es un error')
        })
      }
    }
  })
}

// console.log('Leyendo archivo MD')
// console.log('prueba links md')
// mdLinks('.\\filetest\\testfile.md', { valide: true }).then(console.log).catch(console.log)
// mdLinks('.\\filetest\\testvacio.md', { valide: false }).then(console.log).catch(console.log)

module.exports = {
  mdLinks
}
