// file system functions
const fs = require('fs')
// funciones de las rutas
const path = require('path')

// -----------------validar si la ruta existe---------------
const checkPath = (route) => fs.existsSync(route)
// console.log(checkPath('filetest\\testfile.md'));

// -------------------validar si es absoluta -------------------------
const pathIsAbsolute = (route) => path.isAbsolute(route)
//  console.log(pathIsAbsolute('filetest\\testfile.md'));
//  console.log(pathIsAbsolute('C:\\Users\\nataj\\DEV003-md-links\\filetest\\testfile.md'));

// -----------------Transformar ruta relativa a absoluta------------------
const transformPathAbsolute = (route) => path.resolve(route)
//  console.log(transformPathAbsolute('filetest\\testfile.md'));
// console.log(transformPathAbsolute('C:\\Users\\nataj\\DEV003-md-links\\filetest\\testfile.md'));

// -----------------confirma si es archivo md----------------------
const confirmFileMd = (route) => {
  const mdExtension = path.extname(route)
  return mdExtension === '.md'
}
//  console.log(confirmFileMd('index.js'));

//  ---------------------leer archivo--------------------
const readFiles = (route) => new Promise((resolve, reject) => {
  fs.readFile(route, 'utf-8', (error, data) => {
    if (error) {
      reject(error)
    } else {
      resolve(data)
    }
  })
})
// readFiles('filetest\\testfile.md')
// .then((data)=>{
//   console.log(data)
// })
// .catch((error)=>{
//   console.log(error.message)
// })

// ------------buscar links  y extraerlos--------------
const getLinks = (content, route) => {
  let dataLinks = ''
  // remueve links
  const remove = /\[([^\]]+)\]\((http[s]?:\/\/[^)]+)\)/g
  // saca solo lo que este entre parentesis
  const url = /\(([^)]+)\)/
  const brackets = /\[(.*?)\]/
  dataLinks = Array.from(content.match(remove), (links) =>
    // console.log('este es el array', links)
    ({
      // extraer links y URL
      href: links.match(url)[1],
      text: links.match(brackets)[1].substring(0, 51),
      file: route
    }))
  //  console.log(dataLinks)
  return dataLinks // es un array de objetos
}
// readFiles('filetest\\testfile.md').then((result) => {
// getLinks(result, 'filetest\\testfile.md')
// });

// -----------------validar links (peticiones HTTP)--------------
const validate = (dataLinks) => {
  const promiseArray = dataLinks.map((link) =>
    // console.log(link.href)
    fetch(link.href)
      .then((response) => {
        // console.log(response.status, response.statusText)
        return {
          href: link.href,
          text: link.text,
          file: link.file,
          status: response.status,
          ok: response.statusText
        }
      })
      .catch(error => {
        if (!error.response) {
          return {
            href: link.href,
            text: link.text,
            file: link.file,
            status: -1,
            statusText: 'FETCH FAILED'
          }
        }
      })
  )
  return Promise.all(promiseArray)
}

readFiles('filetest\\testfile.md').then((result) => {
  validate(getLinks(result, 'filetest\\testfile.md'))
    .then(console.log)
    .catch(console.log)
})
// filetest\\testfile.md

module.exports = {
  checkPath,
  pathIsAbsolute,
  transformPathAbsolute,
  confirmFileMd,
  readFiles,
  getLinks,
  validate

}
