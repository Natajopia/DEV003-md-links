#!/usr/bin/env node
const { mdLinks } = require('./index.js')
const { totalHref, uniqueHref, brokenHref } = require('./functionscli.js')

const path = process.argv[2]
const validate = process.argv.includes('--validate') || process.argv.includes('--v')
const stats = process.argv.includes('--stats') || process.argv.includes('--s')
const options = { validate, stats }

mdLinks(path, options)
  .then((result) => {
    if (stats && validate) {
      console.log('Total:', totalHref(result))
      console.log('Unique:', uniqueHref(result))
      console.log('Broken:', brokenHref(result))
    } else if (stats) {
      console.log('Total:', totalHref(result))
      console.log('Unique:', uniqueHref(result))
    } else if (validate) {
      result.forEach(links => {
        console.log('href:', links.href)
        console.log('text:', links.text)
        console.log('file:', links.file)
        console.log('status:', links.status)
        console.log('ok:', links.ok)
      })
    } else {
      result.forEach(links => {
        console.log('href:', links.href)
        console.log('text:', links.text)
        console.log('file:', links.file)
      })
    }
  }).catch((error) => {
    console.log(error)
  })
