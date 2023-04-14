/* eslint-disable prefer-promise-reject-errors */
const fs = require('fs')

const mdLinks = (path, options) => {
  return new Promise((resolve, reject) => {
    // Identificar si la ruta existe
    if (fs.existsSync(path)) {
    // faltan lineas
    } else {
      // Si no existe la ruta rechaza la promesa
      reject('La ruta no existe')
    }
  })
}

module.exports = {
  mdLinks
}
