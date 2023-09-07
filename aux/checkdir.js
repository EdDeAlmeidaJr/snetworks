const fs = require('fs')

module.exports = function (dir) {
  return fs.existsSync(dir)
}
