const { diskLocation } = require('../config/disk')
const disk = diskLocation
const fs = require('fs')

function isDisk() {
  if (fs.existsSync(disk)) {
    try {
      fs.statSync(disk).isDirectory()
      return true
    } catch (error) {
      return 'not a dir'
    }
  } else {
    return 'not a disk'
  }
}

function getIndex() {
  return fs.readdirSync(disk)
}

function removeFile(file) {
  try {
    fs.unlinkSync(disk + '/' + file)
  } catch (error) {
    console.log('error: file does not exists')
    return
  }
}

module.exports = { isDisk, getIndex, removeFile }
