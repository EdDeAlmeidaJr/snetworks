const fs = require('fs').promises

require("dotenv").config()

const TimeStamps = require('./aux/timestamps')
const CheckDir = require('./aux/checkdir')
const CreateDir = require('./aux/createdir')

const postDir = './posts/' + TimeStamps.createDate()

if (!CheckDir(postDir)) {
  CreateDir(postDir)
}

