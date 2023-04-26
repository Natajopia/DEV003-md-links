/* eslint-disable no-prototype-builtins */
/* eslint-disable no-undef */

const {
  checkPath,
  readFile
  // validate
} = require('../api.js')

global.fetch = jest.fn()

const pathIsExist = 'thumb.png'
const fileEmpty = 'src\\Pruebas\\vacio.md'
const fileAnyExt = 'src\\Pruebas\\lectura.js'
// const data = `
// Este es un texto con dos enlaces:
// [Markdown](https://es.wikipedia.org/wiki/Markdown)
// [CSS-Tricks](https://css-tricks.com/oohcrap)
// `
// matrixLinks = [
//   {
//     href: 'https://es.wikipedia.org/wiki/Markdown',
//     text: 'Markdown',
//     file: 'src\\Pruebas\\test-file.md',
//     status: 200,
//     statusText: 'OK'
//   },
//   {
//     href: 'https://es.wikipedia.org/wiki/Markdown',
//     text: 'Markdown',
//     file: 'src\\Pruebas\\test-file.md',
//     status: 200,
//     statusText: 'OK'
//   },
//   {
//     href: 'https://css-tricks.com/oohcrap',
//     text: 'CSS-Tricks',
//     file: 'src\\Pruebas\\test-file.md',
//     status: 404,
//     statusText: 'FAIL'
//   },
//   {
//     href: 'https://css-tricks.com/oohcrap',
//     text: 'CSS-Tricks',
//     file: 'src\\Pruebas\\test-file.md',
//     status: 404,
//     statusText: 'FAIL'
//   },
//   {
//     href: 'http://community.laboratoria.la/t/modulos-librerias-paquetes-frameworks-cual-es-la-diferencia/175',
//     text: 'Módulos, librerías, paquetes, frameworks... ¿cuál e',
//     file: 'src\\Pruebas\\prueba.md',
//     status: -1,
//     statusText: 'FETCH FAILED'
//   }
// ]

// -----------Validar si la ruta existe-------------------
describe('Function to check if the path exists', () => {
  it('should be a function', () => {
    expect(typeof checkPath).toBe('function')
  })
  it('should return "true" if the path is valid', () => {
    expect(checkPath(pathIsExist)).toBeTruthy()
  })
  it('should return "false" if there is no path', () => {
    expect(checkPath('')).toBeFalsy()
  })
})

// ----------------Leer el archivo-----------------------------------
describe('function to read the file and return the content', () => {
  it('should read a file with any extension', async () => {
    await readFile(fileAnyExt).then(data => {
      expect(data).toEqual('"Hola test"')
    })
  })
  it('should return error if empty', () => {
    return readFile(fileEmpty).catch(error => {
      expect(error).toBe(error)
    })
  })
})

// --------------------Validar links---------------------
// describe('function returns information about HTTP request', () => {
//   beforeEach(() => {
//     jest.spyOn(global, 'fetch').mockImplementation(url => {
//       switch (url) {
//         case matrixLinks[0].href:
//           return Promise.resolve({ status: 200, statusText: 'OK' })
//         case matrixLinks[1].href:
//           return Promise.resolve({ status: 404, statusText: 'FAIL' })
//         default:
//           return Promise.reject(new Error('FETCH FAIL'))
//       }
//     })
//   })
//   afterEach(() => {
//     global.fetch.mockClear()
//     jest.restoreAllMocks()
//   })
//   it('should return an array of objects with state properties and state text', () => {
//     return fetchRequestStatus(matrixLinks)
//       .then(result => {
//         result.forEach((obj) => {
//           expect(obj.hasOwnProperty('status')).toBe(true)
//           expect(obj.hasOwnProperty('statusText')).toBe(true)
//         })
//       })
//   })

//   it('should return FAIL status for links with status code 400 or higher', () => {
//     return fetchRequestStatus(matrixLinks)
//       .then(result => {
//         result.forEach((obj) => {
//           if (obj.status >= 400) {
//             expect(obj.statusText).toBe('FAIL')
//           }
//         })
//       })
//   })
// })
