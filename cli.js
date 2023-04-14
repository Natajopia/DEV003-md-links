const { mdLinks } = require('./index.js')

mdLinks('/noexiste/').then(() => {})
  .catch(() => {})
