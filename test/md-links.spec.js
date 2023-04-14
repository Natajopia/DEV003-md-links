/* eslint-disable no-undef */
const { mdLinks } = require('../index.js')

describe('mdLinks', () => {
  it('should...', () => {
    console.log('FIX ME!')
  })
  // it('Debería devolver una promesa', () => {
  //   expect(mdLinks()).toBe(typeof Promise);
  // });
  it('Debería rechazar cuando el path no existe', () => {
    return mdLinks('/natalia/carpeta/noexiste.md').catch((error) => {
      expect(error).toBe('La ruta no existe')
    })
  })
})
