import WebDB from '@beaker/webdb'
import assert from 'assert'

class LibBookshelf {
  constructor (opts = {}) {
    this.db = new WebDB(opts.mainIndex || 'bookshelf', {
      DatArchive: opts.DatArchive
    })
    defineTables(this.db)
  }
}

export default LibBookshelf

function defineTables (db) {
  db.define('users', {
    filePattern: '/user.json',
    index: ['*followUrls'],
    validate (record) {
      if (record.name) assert(typeof record.name === 'string', 'The .name attribute must be a string')
      if (record.url) assert(typeof record.url === 'string', 'The .url attribute must be a string')
      if (record.shelfUrls) assert(Array.isArray(record.shelfUrls), 'The .shelfUrls attribute must be an array')
      if (record.followUrls) assert(Array.isArray(record.followUrls), 'The .followUrls attribute must be an array')
    }
  })
}
