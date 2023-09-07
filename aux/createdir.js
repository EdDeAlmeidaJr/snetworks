const fs = require('fs')

module.exports = function (dir) {
  fs.mkdir(dir, { recursive: true }, error => {
    if (error) {
      return false
    } else {
      return true
    }
  })
}
